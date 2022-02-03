import React from 'react';
import MenuItem from '@mui/material/MenuItem';

function ForwardedMenuItem(props, ref) {
  return <MenuItem ref={ref} {...props} />;
}
export default React.forwardRef(ForwardedMenuItem);
