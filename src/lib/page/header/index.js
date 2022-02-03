import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';
import config from './config';

export default function Header(props) {
  const { t } = useTranslation();

  const titleIsString = typeof props.title === 'string';
  const title = titleIsString ? <h3>{t(props.title)}</h3> : props.title;
  const descIsString = typeof props.desc === 'string';
  const desc = descIsString ? <p>{t(props.desc)}</p> : props.desc;

  return (
    <motion.div
      className={props.nopad ? null : styles.content}
      initial="hidden"
      animate="visible"
      variants={config.title}
      transition={config.transition}
    >
      {title}
      {desc}

      {!props.noLine && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={config.line}
          transition={config.transition}
          className={styles.line}
        ></motion.div>
      )}
    </motion.div>
  );
}
