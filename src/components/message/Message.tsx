import React from 'react';
import styles from './message.module.scss';

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
}

const Message = (props: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target != e.currentTarget) return;
    props.onClick();
  };

  return (
    <div className={styles.message} onClick={handleClick}>
      <div className={styles.messageContent}>
        {props.children}
        <button type="button" className={styles.but} onClick={props.onClick}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Message;
