import React from 'react';

import styles from './styles.module.scss';

export default function Footer(props) {
  if (!props.footer) {
    return null;
  }

  return (
    <div className={styles.footer}>
      <props.footer {...props} />
    </div>
  );
}
