import React from 'react';
import styles from './message.module.scss';

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
}

class Message extends React.Component<Props> {
  render() {
    return (
      <div className={styles.message}>
        <div className={styles.messageContent}>
          {this.props.children}
          <button type="button" className={styles.but} onClick={this.props.onClick}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Message;
