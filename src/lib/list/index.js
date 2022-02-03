import React from 'react';
import { motion } from 'framer-motion';

import config from './config';
import Item from './item';

function List(props) {
  const { items } = props;

  if (!items.length) {
    return null;
  }

  return (
    <motion.ul
      initial="hidden"
      exit="hidden"
      animate="visible"
      variants={config.list}
    >
      {items.map((i, index) => (
        <Item itemVariant={props.itemVariant} key={index}>
          {i}
        </Item>
      ))}
    </motion.ul>
  );
}

export default List;
