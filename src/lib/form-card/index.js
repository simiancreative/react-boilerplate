import React from 'react';
import { Formik } from 'formik';

import { useStore } from 'store';

import './styles.module.scss';

import submitWrapper from './submit-wrapper';

function AppFormCard(props) {
  const [
    ,
    {
      layout: { setAlert, setWaiting }
    }
  ] = useStore();

  return (
    <Formik
      initialValues={props.initialValues}
      validate={props.validate}
      onSubmit={submitWrapper(setAlert, setWaiting, props.submit)}
    >
      {props.form}
    </Formik>
  );
}

export default AppFormCard;
