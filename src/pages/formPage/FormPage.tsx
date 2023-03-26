import React from 'react';
import CardList from '../../components/cards/CardList';
import Form from '../../components/form/Form';
import Message from '../../components/message/Message';
import { CardType } from '../../types/types';
import styles from './formPage.module.scss';
interface Props {
  children?: React.ReactNode;
}
interface State {
  cards: CardType[];
  isShowMessage: boolean;
}

class FormPage extends React.Component<Props, State> {
  private formRef: React.RefObject<HTMLFormElement>;
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.formRef = React.createRef<HTMLFormElement>();
    this.state = {
      cards: [],
      isShowMessage: false,
    };
  }
  handleSubmit(card: CardType) {
    this.setState((prevState: State) => ({
      cards: [...prevState.cards, card],
      isShowMessage: true,
    }));
    this.formRef.current!.reset();

    setTimeout(() => {
      this.setState({ isShowMessage: false });
    }, 3000);
  }
  handleClick() {
    this.setState({ isShowMessage: false });
  }
  render() {
    return (
      <section className={styles.wrapper}>
        <Form refForm={this.formRef} onSubmit={this.handleSubmit} />
        <CardList cards={this.state.cards} />

        {this.state.isShowMessage && (
          <Message onClick={this.handleClick}>
            <p>The data is added</p>
          </Message>
        )}
      </section>
    );
  }
}

export default FormPage;
