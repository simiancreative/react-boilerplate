import { req } from './utils';

import Status from 'models/status';

const Statuses = {
  async all() {
    const resp = await req({
      method: 'get',
      path: `statuses`
    });

    return resp.map(status => new Status(status));
  },

  async watched(show_id, raw_id, action) {
    await req({
      method: 'put',
      path: `watched`,
      body: {
        action,
        show_id,
        raw_id
      }
    });
  }
};

export default Statuses;
