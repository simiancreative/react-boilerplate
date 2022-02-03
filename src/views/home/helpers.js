// import React from 'react';

import api from 'sources';

import Status from './status';

const helpers = {
  async loadData(methods) {
    methods.waiting(true);

    const statuses = await api.statuses();
    methods.setStatuses(statuses);

    methods.waiting(false);
  },

  // removeData(actions) {
  //   return () => {
  //     const { setAreas, setArea, setGateways } = actions;
  //     setAreas([]);
  //     setArea({});
  //     setGateways([]);
  //   };
  // }

  mapStatuses(statuses) {
    return statuses.map(status => {
      return <Status key={`status-${status.id}`} status={status} />;
    });
  }
};

export default helpers;
