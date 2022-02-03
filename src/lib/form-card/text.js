import React from 'react';
import { TextField } from 'formik-material-ui';

import styles from './styles.module.scss';

export default function AppTextField(props) {
  return (
    <div className={styles.field}>
      <TextField inputProps={{ 'data-testid': props.field.name }} {...props} />
    </div>
  );
}
