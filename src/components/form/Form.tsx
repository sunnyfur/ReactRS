import React from 'react';
import { Refs } from '../../interfaces/refs';
import { CardType, ErrorsCard } from '../../types/types';
import { validate } from '../../utils/validation';
import styles from './form.module.scss';

interface Props {
  onSubmit: (card: CardType) => void;
  refForm: React.RefObject<HTMLFormElement>;
  children?: React.ReactNode;
}
interface State {
  errors: ErrorsCard;
}

class Form extends React.Component<Props, State> {
  private allRefs: Refs = {};
  constructor(props: Props) {
    super(props);
    this.state = {
      errors: {},
    };
    this.allRefs.nameRef = React.createRef<HTMLInputElement>();
    this.allRefs.dateRef = React.createRef<HTMLInputElement>();
    this.allRefs.typeRef = React.createRef<HTMLSelectElement>();
    this.allRefs.costRef = React.createRef<HTMLInputElement>();
    this.allRefs.usdtRef = React.createRef<HTMLInputElement>();
    this.allRefs.ethRef = React.createRef<HTMLInputElement>();
    this.allRefs.fileRef = React.createRef<HTMLInputElement>();
    this.allRefs.agreeRef = React.createRef<HTMLInputElement>();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const errors = validate(this.allRefs);
    if (Object.values(errors).every((elem) => !elem)) {
      const card: CardType = {
        id: Number(new Date()),
        category: '',
        cost: '',
        costUSD: '',
        name: '',
        img: '',
      };
      card.name = this.allRefs.nameRef?.current?.value || '';
      card.category = this.allRefs.typeRef?.current?.value || '';

      const ethInUsdt = 1750;
      const cost = this.allRefs?.costRef?.current?.value ? +this.allRefs.costRef.current?.value : 0;

      if (this.allRefs.ethRef?.current?.checked) {
        card.cost = cost.toString();
        card.costUSD = (cost * ethInUsdt).toString();
      }

      if (this.allRefs?.usdtRef?.current && this.allRefs?.usdtRef?.current?.checked) {
        card.cost = (cost / ethInUsdt).toFixed(4);
        card.costUSD = cost.toString();
      }
      card.date = this.allRefs.dateRef?.current?.value;
      card.img = this.allRefs.fileRef?.current?.files
        ? URL.createObjectURL(this.allRefs.fileRef?.current?.files[0])
        : '';
      this.props.onSubmit(card);
    } else {
    }
    this.setState({ errors: errors });
  }
  render() {
    return (
      <form ref={this.props.refForm} className={styles.form} onSubmit={this.handleSubmit}>
        <div>
          <label className={styles.label}>
            Name <input className={styles.input} type="text" ref={this.allRefs.nameRef} />
          </label>
          <p className={styles.error}>{this.state.errors?.name}</p>
        </div>
        <div>
          <label className={styles.label}>
            Date creation:
            <input className={styles.input} type="date" ref={this.allRefs.dateRef} />
          </label>
          <p className={styles.error}>{this.state.errors?.date}</p>
        </div>
        <div>
          <label className={styles.label}>
            Type NFT:
            <select className={styles.select} ref={this.allRefs.typeRef} defaultValue="">
              <option value="" disabled></option>
              <option value="art">art</option>
              <option value="photo">photo</option>
              <option value="3D">3D</option>
            </select>
          </label>
          <p className={styles.error}>{this.state.errors?.category}</p>
        </div>
        <div>
          <label className={styles.label}>
            Cost:
            <input className={styles.input} type="number" ref={this.allRefs.costRef} />
          </label>
          <p className={styles.error}>{this.state.errors?.cost}</p>
        </div>

        <fieldset>
          <legend>Currency</legend>
          <label>
            USDT
            <input type="radio" name="radio" value="usdt" ref={this.allRefs.usdtRef} />
          </label>
          <label>
            ETH
            <input type="radio" name="radio" value="eth" ref={this.allRefs.ethRef} />
          </label>
          <p className={styles.error}>{this.state.errors?.curr}</p>
        </fieldset>
        <div>
          <label>
            Add file
            <input
              className={styles.input_file}
              type="file"
              accept="image/*"
              ref={this.allRefs.fileRef}
            />
          </label>
          <p className={styles.error}>{this.state.errors?.img}</p>
        </div>
        <div>
          <label>
            <input type="checkbox" ref={this.allRefs.agreeRef} />I agree with the privacy policy
          </label>
          <p className={styles.error}>{this.state.errors?.agreem}</p>
        </div>

        <button type="submit" className={styles.but}>
          Add
        </button>
      </form>
    );
  }
}

export default Form;
