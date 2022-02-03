import { enUS } from '@mui/material/locale';

const store = {
  state: {
    alert: {},
    isWaiting: null,
    locale: enUS
  },

  reducers: {
    setWaiting(state, isWaiting) {
      return { ...state, isWaiting };
    },

    setLocale(state, locale) {
      return { ...state, locale };
    },

    setAlert(state, alert = {}) {
      return { ...state, alert };
    }
  }
};

export default store;
