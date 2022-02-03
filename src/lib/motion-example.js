// import React from 'react';
// import { motion } from 'framer-motion';

export default {
  list: {
    visible: {
      opacity: 1,
      transition: {
        delay: 3,
        when: 'beforeChildren',
        staggerChildren: 0.3
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren'
      }
    }
  },

  item: {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 }
  },

  title: {
    visible: {
      opacity: [0, 0.2, 0.5, 0.7, 1],
      transition: {
        delay: 2
      }
    },
    hidden: {
      opacity: [1, 0.2, 0.7, 0.1, 0]
    }
  },

  transition: {
    ease: 'easeInOut',
    duration: 7,
    times: [0, 0.2, 0.5, 0.8, 1]
  }
};

// import Page from '../../../lib/page';
// import styles from './styles.module.scss';
// import config from './config';

// function LI() {
//   return (
//     <motion.li variants={config.item}>
//       Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
//       ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
//       ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
//       nisl consectetur et.
//     </motion.li>
//   );
// }

// export default function ConnectionSelect() {
//   return (
//     <Page>
//       <motion.div
//         className={styles.content}
//         initial="hidden"
//         animate="visible"
//         variants={config.title}
//         transition={config.transition}
//       >
//         Select Connection Type
//       </motion.div>
//       <motion.ul initial="hidden" animate="visible" variants={config.list}>
//         {[...new Array(50)].map((i, index) => (
//           <LI key={index} item={i} />
//         ))}
//       </motion.ul>
//     </Page>
//   );
// }
