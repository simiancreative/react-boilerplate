import React from 'react';
import MenuItem from 'lib/menu/item';
import Icon from 'lib/icon';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import { useTranslation } from 'react-i18next';

function SettingsLink(props) {
  const { t } = useTranslation();

  const send = () => {
    props.close();
  };

  return (
    <MenuItem onClick={send}>
      <ListItemIcon>
        <Icon icon={['far', 'cog']} />
      </ListItemIcon>
      <ListItemText>{t('menu_items.settings')}</ListItemText>
    </MenuItem>
  );
}

export default SettingsLink;
