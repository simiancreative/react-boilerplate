import React from 'react';
import { motion } from 'framer-motion';

// import { ReactComponent as Logo } from 'assets/images/logo.svg';
import styles from './styles.module.scss';

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 1.5
};

function CenteredContent(props) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div data-testid="centered-content" className={styles.parent}>
        <div className={styles.wrap}>
          Add A logo here
          {/*<Logo className={styles.logo} />*/}
          <div className={styles.content}>{props.children}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default CenteredContent;
