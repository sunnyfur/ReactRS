import React from 'react';
import styles from './form.module.scss';

interface Props {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  refForm: React.RefObject<HTMLFormElement>;
  children?: React.ReactNode;
}

class Form extends React.Component<Props> {
  private input: React.RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);
    this.input = React.createRef<HTMLInputElement>();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    //ToDo validation
    this.props.onSubmit();
  }
  render() {
    return (
      <form ref={this.props.refForm} className={styles.form} onSubmit={this.handleSubmit}>
        <input type="text" ref={this.input} />
        <input type="date" />
        <select>
          <option />
        </select>
        <button type="submit" className={styles.but}>
          Add
        </button>
      </form>
    );
  }
}

export default Form;
