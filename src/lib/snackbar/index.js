import { useState, useEffect } from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import { useStore } from 'store';

export default function Snacker() {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const [state] = useStore();
  const alertConfig = _.get(state, 'layout.alert');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (alertConfig.message) {
      setOpen(true);
    }

    return () => setOpen(false);
  }, [alertConfig]);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={isOpen}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        elevation={6}
        severity={alertConfig.severity}
      >
        {t(alertConfig.message)}
        {!!alertConfig.reason && ' - '}
        {!!alertConfig.reason && t(alertConfig.reason)}
      </Alert>
    </Snackbar>
  );
}
