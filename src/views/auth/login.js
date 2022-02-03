import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';

import CenteredContent from 'lib/centered-content';
import AppFormCard from 'lib/form-card';
import Token from 'lib/token';

import initialValues, { validate, submit, LoginForm } from './helpers';

function Login(props) {
  const [loading, setLoading] = useState(true);
  const [isValid, setValid] = useState(false);
  const [submitSuccess, setSubmitValue] = useState({
    success: false,
    details: { reason: null }
  });

  useEffect(() => {
    if (Token.isValid()) setValid(true);
    setLoading(false);
  }, []); // eslint-disable-line

  if (isValid) {
    const to = _.get(props, 'history.location.state.returnurl', '/');
    return <Redirect to={to} />;
  }

  if (loading) {
    return <h4 className="centered">loading</h4>;
  }

  if (submitSuccess.success) {
    const to = _.get(props, 'history.location.state.returnurl', '/');
    return <Redirect to={to} />;
  }

  return (
    <CenteredContent>
      <AppFormCard
        initialValues={initialValues}
        validate={validate}
        submit={submit(setSubmitValue)}
        form={LoginForm}
      ></AppFormCard>
    </CenteredContent>
  );
}

export default Login;
