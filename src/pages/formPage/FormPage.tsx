import React from 'react';
import CardList from '../../components/cards/CardList';
import { CardType } from '../../types/types';

interface Props {
  children?: React.ReactNode;
}
interface State {
  cards: CardType[];
}

class FormPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cards: [],
    };
  }
  render() {
    return (
      <>
        <form></form>
        <CardList cards={this.state.cards} />
      </>
    );
  }
}

export default FormPage;
