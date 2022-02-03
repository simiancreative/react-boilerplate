import Util from './utils';
import Statuses from './statuses';

const Api = {
  login: Util.login,
  accessCode: Util.accessCode,
  statuses: Statuses.all,
  watched: Statuses.watched,
};

export default Api;
