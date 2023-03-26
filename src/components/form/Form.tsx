import React from 'react';
import { CardType } from '../../types/types';
import styles from './form.module.scss';

interface Props {
  onSubmit: (card: CardType) => void;
  refForm: React.RefObject<HTMLFormElement>;
  children?: React.ReactNode;
}
interface Refs {
  nameRef?: React.RefObject<HTMLInputElement>;
  dateRef?: React.RefObject<HTMLInputElement>;
  typeRef?: React.RefObject<HTMLSelectElement>;
  costRef?: React.RefObject<HTMLInputElement>;
  usdtRef?: React.RefObject<HTMLInputElement>;
  ethRef?: React.RefObject<HTMLInputElement>;
  fileRef?: React.RefObject<HTMLInputElement>;
  agreeRef?: React.RefObject<HTMLInputElement>;
}

class Form extends React.Component<Props> {
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
      card.cost = (Math.round((cost / ethInUsdt) * 1000) / 1000).toString();
      card.costUSD = cost.toString();
    }
    card.date = this.allRefs.dateRef?.current?.value;
    card.img = this.allRefs.fileRef?.current?.files
      ? URL.createObjectURL(this.allRefs.fileRef?.current?.files[0])
      : '';
    this.props.onSubmit(card);
  }
  render() {
    return (
      <form ref={this.props.refForm} className={styles.form} onSubmit={this.handleSubmit}>
        <label>
          Name: <input type="text" ref={this.allRefs.nameRef} />
        </label>
        <label>
          Date creation:
          <input type="date" ref={this.allRefs.dateRef} />
        </label>
        <select ref={this.allRefs.typeRef} defaultValue="">
          <option value="" disabled></option>
          <option value="art">art</option>
          <option value="photo">photo</option>
          <option value="3D">3D</option>
        </select>
        <label>
          Cost:
          <input type="number" ref={this.allRefs.costRef} />
        </label>
        <div>
          <label>
            USDT
            <input type="radio" name="radio" value="usdt" ref={this.allRefs.usdtRef} />
          </label>
          <label>
            ETH
            <input type="radio" name="radio" value="eth" ref={this.allRefs.ethRef} />
          </label>
        </div>

        <label>
          Add file
          <input type="file" accept="image/*" ref={this.allRefs.fileRef} />
        </label>

        <label>
          <input type="checkbox" ref={this.allRefs.agreeRef} />I agree with the privacy policy
        </label>

        <button type="submit" className={styles.but}>
          Add
        </button>
      </form>
    );
  }
}

export default Form;
