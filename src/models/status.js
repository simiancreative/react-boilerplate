import moment from 'moment-timezone';

import Base from './base.model';

class Status extends Base {
  get name() {
    return this.params.series_name;
  }

  get href() {
    return `/shows/${this.id}`;
  }

  get image() {
    const { image_id, image_file } = this.params;
    return {
      id: image_id,
      file: image_file
    };
  }

  get next_airing() {
    let { next_airing } = this.params;
    if (!next_airing) return undefined;

    next_airing = next_airing.replace('Z', '');

    return moment(next_airing).tz(moment.tz.guess());
  }

  get info() {
    const { status } = this.params;

    return this.next_airing ? this.next_airing.fromNow() : status;
  }
}

export default Status;
