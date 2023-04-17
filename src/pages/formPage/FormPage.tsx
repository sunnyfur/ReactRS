import React, { useCallback, useState } from 'react';
import Card from '../../components/cards/Card';
import CardList from '../../components/cards/CardList';
import Form from '../../components/form/Form';
import Message from '../../components/message/Message';
import { CardType } from '../../types/types';
import styles from './formPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { formActions } from '../../store/reducers/formSlice';

const FormPage = () => {
  const { cards } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();
  const [isShowMessage, setIsShowMessage] = useState(false);

  const handleSubmit = (card: CardType) => {
    dispatch(formActions.addCard(card));
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
      <CardList>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </CardList>

      {isShowMessage && (
        <Message onClick={handleClick}>
          <p>The data is added</p>
        </Message>
      )}
    </section>
  );
};

export default FormPage;
