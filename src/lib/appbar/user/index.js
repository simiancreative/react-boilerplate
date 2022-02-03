import React from 'react';

import Menu from 'lib/menu';
import Icon from 'lib/icon';

import Settings from './settings';
import Logout from './logout';

import styles from '../styles.module.scss';

export default function User(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.control}>
      <Icon onClick={handleClick} icon={['far', 'user']} />

      <Menu
        data-testid="bars"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Settings close={handleClose} />
        <Logout close={handleClose} />
      </Menu>
    </div>
  );
}
