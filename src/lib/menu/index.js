import React from 'react';
import Menu from '@mui/material/Menu';

function ForwardedMenu(props, ref) {
  return <Menu ref={ref} {...props} />;
}
export default React.forwardRef(ForwardedMenu);
