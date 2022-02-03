const Env = {
  get(key) {
    return process.env[`REACT_APP_${key}`];
  }
};

export default Env;
