import React from 'react';
import { motion } from 'framer-motion';

import config from './config';
import styles from './styles.module.scss';

function ListItem(props) {
  const variants = config[props.itemVariant] || config.item;

  return (
    <motion.li className={styles.item} initial="hidden" variants={variants}>
      {props.children}
    </motion.li>
  );
}

export default ListItem;
