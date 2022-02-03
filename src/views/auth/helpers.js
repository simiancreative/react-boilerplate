import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { Form, Field } from 'formik';
import _ from 'lodash';

import api from 'sources';
import AppTextField from 'lib/form-card/text';
import i18n from 'lib/i18n';
import AppError from 'lib/error';

const defaults = {
  email: '',
  password: ''
};

export default defaults;

export function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = i18n.t('forms.errors.required');
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = i18n.t('errors.invalid_email');
  }

  if (!values.password) {
    errors.password = i18n.t('errors.required');
  }

  return errors;
}

export const submit = sideEffect => async creds => {
  try {
    await api.login(creds);
  } catch (err) {
    const reason = _.get(err, 'response.data.reasons.0.message');
    throw new AppError('errors.login_failed', reason);
  }

  return { sideEffect, args: [{ success: true, details: { reason: null } }] };
};

export function LoginForm({ submitForm, isSubmitting }) {
  const { t } = useTranslation();

  return (
    <Form>
      <Field
        component={AppTextField}
        variant="outlined"
        name="email"
        type="email"
        label={t('forms.email')}
      />
      <Field
        component={AppTextField}
        variant="outlined"
        type="password"
        label={t('forms.password')}
        name="password"
      />
      <Button
        type="submit"
        data-testid="submit"
        variant="contained"
        color="primary"
        disabled={isSubmitting}
        onClick={submitForm}
      >
        {t('forms.submit')}
      </Button>
    </Form>
  );
}
