import React from 'react';
import MenuItem from 'lib/menu/item';
import Icon from 'lib/icon';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function SearchLink(props) {
  const { t } = useTranslation();
  const history = useHistory();

  const send = () => {
    props.close();
    history.push('/search');
  };

  return (
    <MenuItem onClick={send}>
      <ListItemIcon>
        <Icon icon={['far', 'search']} />
      </ListItemIcon>
      <ListItemText>{t('menu_items.search')}</ListItemText>
    </MenuItem>
  );
}

export default SearchLink;
