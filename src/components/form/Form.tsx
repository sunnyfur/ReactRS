import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInput } from '../../interfaces/interfaces';
import { CardType, Currency } from '../../types/types';
import styles from './form.module.scss';

interface Props {
  onSubmit: (card: CardType) => void;
}

const Form = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInput>({ mode: 'onBlur' });

  const formSubmit: SubmitHandler<FormInput> = (data) => {
    const card: CardType = {
      id: Number(new Date()),
      category: '',
      cost: '',
      costUSD: '',
      name: '',
      img: '',
    };
    card.name = data.name;
    card.category = data.category;

    const ethInUsdt = 1750;
    const cost = +data.cost;

    if (data.curr == Currency.eth) {
      card.cost = cost.toString();
      card.costUSD = (cost * ethInUsdt).toString();
    }

    if (data.curr == Currency.usdt) {
      card.cost = (cost / ethInUsdt).toFixed(4);
      card.costUSD = cost.toString();
    }
    card.date = data.date;
    card.img = URL.createObjectURL(data.img[0]);
    reset();
    onSubmit(card);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
      <div>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            {...register('name', {
              required: 'Field name is required',
            })}
          />
        </label>
        {errors.name && <p className={styles.error}>{errors.name?.message}</p>}
      </div>
      <div>
        <label className={styles.label}>
          Date creation:
          <input
            className={styles.input}
            type="date"
            {...register('date', {
              required: 'Date is required',
              validate: (value: string) =>
                new Date() > new Date(value) || 'Date couldn`t be over current one',
            })}
          />
        </label>
        <p className={styles.error}>{errors.date?.message}</p>
      </div>
      <div>
        <label className={styles.label}>
          Type NFT:
          <select
            className={styles.select}
            {...register('category', {
              required: 'Please choose one of the type',
            })}
            defaultValue=""
          >
            <option value="" disabled></option>
            <option value="art">art</option>
            <option value="photo">photo</option>
            <option value="3D">3D</option>
          </select>
        </label>
        <p className={styles.error}>{errors.category?.message}</p>
      </div>
      <div>
        <label className={styles.label}>
          Cost:
          <input
            className={styles.input}
            type="number"
            {...register('cost', {
              required: 'Field cost is required',
              validate: {
                positive: (v) => Number(v) > 0 || 'Cost should be greater than 0',
              },
            })}
          />
        </label>
        <p className={styles.error}>{errors.cost?.message}</p>
      </div>

      <fieldset>
        <legend>Currency</legend>
        <label>
          USDT
          <input
            type="radio"
            value={Currency.usdt}
            {...register('curr', {
              required: 'Please choose one of the type',
            })}
          />
        </label>
        <label>
          ETH
          <input
            type="radio"
            value={Currency.eth}
            {...register('curr', {
              required: 'Please choose the currensy',
            })}
          />
        </label>
        <p className={styles.error}>{errors.curr?.message}</p>
      </fieldset>
      <div>
        <label>
          Add file
          <input
            className={styles.input_file}
            type="file"
            accept="image/*"
            {...register('img', {
              required: 'Please add the file',
            })}
          />
        </label>
        <p className={styles.error}>{errors.img?.message}</p>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            {...register('agreem', {
              required: 'Please check the agreement',
            })}
          />
          I agree with the privacy policy
        </label>
        <p className={styles.error}>{errors.agreem?.message}</p>
      </div>

      <button type="submit" className={styles.but}>
        Add
      </button>
    </form>
  );
};

export default Form;
