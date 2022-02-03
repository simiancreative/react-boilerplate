import React from 'react';
import ReactCodeInput from 'react-verification-input';
import { fieldToTextField } from 'formik-material-ui';

import styles from './styles.module.scss';

export default function AppCodeInputField(props) {
  const {
    form: { setFieldValue },
    field: { name }
  } = props;

  const onChange = React.useCallback(
    value => {
      setFieldValue(name, value || '');
    },
    [setFieldValue, name]
  );

  return (
    <div className={styles.field}>
      <ReactCodeInput
        inputField={{ 'data-testid': props.field.name }}
        removeDefaultStyles
        container={{
          className: styles['code-input-container']
        }}
        characters={{
          className: styles['code-input-characters']
        }}
        character={{
          className: styles['code-input-character'],
          classNameInactive: styles['character--inactive'],
          classNameSelected: styles['character--selected']
        }}
        length={6}
        validChars={'0-9'}
        placeholder="0"
        autoFocus
        input={{ onChange }}
        {...fieldToTextField(props)}
      />
    </div>
  );
}
