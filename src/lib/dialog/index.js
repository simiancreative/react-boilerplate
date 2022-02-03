import React, { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useTranslation } from 'react-i18next';
import Slide from '@mui/material/Slide';

import Icon from 'lib/icon';

import styles from './styles.module.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AppDialog(props) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { fullWidth, maxWidth, trigger, children, onClose, title, fullScreen } =
    props;

  const handleClose = () => {
    setOpen(false);
    onClose && onClose();
  };
  const toggle = () => setOpen(!open);

  return (
    <React.Fragment>
      <div onClick={toggle}>{trigger}</div>
      <Dialog
        fullScreen={fullScreen}
        TransitionComponent={Transition}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        onClose={handleClose}
        open={open}
      >
        <DialogTitle className={styles.header}>
          <div className={styles.title}>{!!title && t(title)}</div>
          <Icon
            className={styles.close}
            icon={['far', 'times-square']}
            onClick={handleClose}
          />
        </DialogTitle>

        {children}
      </Dialog>
    </React.Fragment>
  );
}
