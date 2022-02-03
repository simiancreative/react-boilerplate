import React from 'react';
import { LinearProgress } from '@mui/material';
import { useStore } from 'store';

import styles from './styles.module.scss';

export default function Spinner() {
  const [
    {
      layout: { isWaiting }
    }
  ] = useStore();

  return (
    <div className={styles.spinner}>{isWaiting && <LinearProgress />}</div>
  );
}
