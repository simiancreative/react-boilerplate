const config = {
  pageVariants: {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  },

  pageTransition: {
    type: 'tween',
    ease: 'anticipate',
    duration: 1.5
  }
};

export default config;
