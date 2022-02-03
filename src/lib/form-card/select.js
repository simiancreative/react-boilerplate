import React from 'react';
import { Field } from 'formik';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from 'formik-material-ui';

import styles from './styles.module.scss';

export default function AppSelect(props) {
  return (
    <div className={styles.field}>
      <Field
        component={TextField}
        inputProps={{ 'data-testid': props.name }}
        type="text"
        name={props.name}
        label={props.label}
        variant="outlined"
        select
      >
        {props.options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Field>
    </div>
  );
}
