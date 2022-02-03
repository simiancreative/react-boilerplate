const config = {
  list: {
    visible: {
      opacity: 1,
      transition: {
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

  fade: {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  },

  transition: {
    ease: 'easeInOut',
    times: [0, 0.2, 0.5, 0.8, 1]
  }
};

export default config;
