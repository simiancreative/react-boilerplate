import React from 'react';

import styles from './styles.module.scss';

export default function AppFormFooter(props) {
  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>{props.children}</div>
    </div>
  );
}
