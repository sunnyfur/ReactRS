import React, { useCallback, useState } from 'react';
import CardList from '../../components/cards/CardList';
import Form from '../../components/form/Form';
import Message from '../../components/message/Message';
import { CardType } from '../../types/types';
import styles from './formPage.module.scss';

const FormPage = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [isShowMessage, setIsShowMessage] = useState(false);

  const handleSubmit = (card: CardType) => {
    setCards((prevState) => [...prevState, card]);
    setIsShowMessage(true);
    setTimeout(() => {
      setIsShowMessage(false);
    }, 3000);
  };
  const handleClick = useCallback(() => {
    setIsShowMessage(false);
  }, []);

  return (
    <section className={styles.wrapper}>
      <Form onSubmit={handleSubmit} />
      <CardList cards={cards} />

      {isShowMessage && (
        <Message onClick={handleClick}>
          <p>The data is added</p>
        </Message>
      )}
    </section>
  );
};

export default FormPage;
