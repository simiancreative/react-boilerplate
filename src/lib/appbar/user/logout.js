import React from 'react';
import MenuItem from 'lib/menu/item';
import Icon from 'lib/icon';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LogoutLink(props) {
  const { t } = useTranslation();
  const history = useHistory();

  const send = () => {
    props.close();
    localStorage.clear();
    history.push('/auth/login');
  };

  return (
    <MenuItem onClick={send}>
      <ListItemIcon>
        <Icon icon={['far', 'sign-out']} />
      </ListItemIcon>
      <ListItemText>{t('menu_items.logout')}</ListItemText>
    </MenuItem>
  );
}

export default LogoutLink;
