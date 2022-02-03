import React from 'react';
import MenuItem from 'lib/menu/item';
import Icon from 'lib/icon';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function StatusesLink(props) {
  const { t } = useTranslation();
  const history = useHistory();

  const send = () => {
    props.close();
    history.push('/');
  };

  return (
    <MenuItem onClick={send}>
      <ListItemIcon>
        <Icon icon={['far', 'film']} />
      </ListItemIcon>
      <ListItemText>{t('menu_items.statuses')}</ListItemText>
    </MenuItem>
  );
}

export default StatusesLink;
