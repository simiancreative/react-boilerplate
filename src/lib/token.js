import jwt from 'jsonwebtoken';
import { DateTime } from 'luxon';

const cachedTokens = {};

const Token = {
  isValid() {
    const decoded = jwt.decode(Token.get('token'));
    if (!decoded) {
      return false;
    }
    return DateTime.fromSeconds(decoded.exp) > DateTime.local();
  },

  set(type, token) {
    cachedTokens[type] = token;
    localStorage.setItem(type, token);
  },

  get(type) {
    cachedTokens[type] = localStorage.getItem(type);
    return cachedTokens[type];
  }
};

export default Token;
