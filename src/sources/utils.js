import axios from 'axios';
import _ from 'lodash';

import Env from 'lib/env';
import Token from 'lib/token';

const timeout = 60000;
let host;

function headers(requestHeaders = {}) {
  return _.merge(requestHeaders, {
    'Authorization': `Bearer ${Token.get('token')}`,
    'Content-Type': 'application/json'
  });
}

export async function req(params) {
  if (!host) {
    host = await Env.get('API_URL');
  }

  const result = await axios({
    baseURL: host,
    url: params.path,
    method: params.method,
    params: params.params,
    data: params.body,
    timeout,
    headers: headers(params.headers)
  });

  return result.data;
}

const Util = {
  async login(creds) {
    const resp = await req({
      method: 'post',
      path: `auth/login`,
      body: creds
    });

    Token.set('token', resp.token);

    return resp.token;
  }
};

const validTokenErrors = [
  'jwt expired',
  'invalid_token',
  'invalid signature',
  'jwt malformed'
];

function isError(error) {
  const message = _.get(error, 'response.data.result.0.message');
  const status = _.get(error, 'response.status');

  return status === 401 && validTokenErrors.includes(message);
}

axios.interceptors.response.use(undefined, async error => {
  if (!isError(error)) {
    return Promise.reject(error);
  }

  const { config } = error;
  config.headers = headers();

  return axios(config);
});

export default Util;
