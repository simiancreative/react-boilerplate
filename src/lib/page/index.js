import React from 'react';

import { motion } from 'framer-motion';
import { styled } from '@mui/system';

import config from './config';
import styles from './styles.module.scss';

import Footer from './footer';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function Page(props) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      className={styles.page}
      variants={config.pageVariants}
      transition={config.pageTransition}
    >
      <div data-testid="page" className={styles.parent}>
        <Offset />
        <div className={styles.content}>{props.children}</div>
        <Footer {...props} />
      </div>
    </motion.div>
  );
}
