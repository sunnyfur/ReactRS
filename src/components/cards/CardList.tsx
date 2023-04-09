import React from 'react';

import styles from './cardList.module.scss';

interface Props {
  children?: React.ReactNode;
}

const CardList = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default CardList;
