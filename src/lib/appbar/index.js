import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { motion } from 'framer-motion';

import Token from 'lib/token';
// import { ReactComponent as Logo } from 'assets/images/logo.svg';

import config from './config';
import styles from './styles.module.scss';

import Control from './control';
import User from './user';

function TopBar({ location, control }) {
  const [isValid, setValid] = useState(false);

  useEffect(() => {
    setValid(Token.isValid());
  }, [location.pathname]);

  if (!isValid) return '';

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      className={styles.appbarwrapper}
      variants={config.pageVariants}
      transition={config.pageTransition}
    >
      <AppBar position="fixed" className={styles.appbar}>
        <Toolbar>
          <Control control={control} />
          <Link to="/">
            Add A logo here
            {/*<Logo className={styles.logo} />*/}
          </Link>
          <User control={control} />
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}

export default TopBar;
