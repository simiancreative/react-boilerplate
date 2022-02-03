import React from 'react';
import { Link } from 'react-router-dom';

import HostedImage from 'lib/hosted_image';

import styles from './styles.module.scss';

export default function Status({ status }) {
  return (
    <div className={styles.status}>
      <div className={styles.banner}>
        <HostedImage id={status.id} type="shows" image={status.image} />
      </div>
      <Link className={styles.name} to={status.href}>
        {status.name}
      </Link>
      <div className={styles.info}>{status.info}</div>
    </div>
  );
}
