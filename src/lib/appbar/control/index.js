import React from 'react';

import Menu from 'lib/menu';
import Icon from 'lib/icon';

import Statuses from './statuses';
import Search from './search';

import styles from '../styles.module.scss';

export default function Control(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.control}>
      <Icon onClick={handleClick} icon={['far', 'bars']} />

      <Menu
        data-testid="bars"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Statuses close={handleClose} />
        <Search close={handleClose} />
      </Menu>
    </div>
  );
}
