import React, { useState, useEffect } from 'react';
// import _ from 'lodash';

import Page from 'lib/page';
import Content from 'lib/page/content';
import List from 'lib/list';
import { useStore } from 'store';

import helpers from './helpers';

export default function Statuses(props) {
  const [{ layout }] = useStore();
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    helpers.loadData({
      setStatuses,
      waiting: layout.setWaiting
    });
  }, []); // eslint-disable-line

  return (
    <Page>
      <Content>
        <List items={helpers.mapStatuses(statuses)} />
      </Content>
    </Page>
  );
}
