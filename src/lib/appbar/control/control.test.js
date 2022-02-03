import React from 'react';
import { render, fireEvent, act, cleanup } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import _ from 'lodash';

import gateway from 'integrations/gateway';
import Control from './index';

afterEach(cleanup);

it('calls identify on', async () => {
  gateway.identify = jest.fn();
  let getByTestId;

  await act(async () => {
    ({ getByTestId } = render(<Control />));
  });

  await act(async () => {
    const bars = await getByTestId('bars');
    fireEvent.click(bars);
  });

  await act(async () => {
    const proceed = await getByTestId('identify_on');
    fireEvent.click(proceed);
  });

  await waitFor(() => {
    expect(gateway.identify).toHaveBeenCalled();
    const state = _.get(gateway, 'identify.mock.calls.0.0');
    expect(state).toBe('on');
  });
});

it('calls identify off', async () => {
  gateway.identify = jest.fn();
  let getByTestId;

  await act(async () => {
    ({ getByTestId } = render(<Control />));
  });

  await act(async () => {
    const bars = await getByTestId('bars');
    fireEvent.click(bars);
  });

  await act(async () => {
    const proceed = await getByTestId('identify_off');
    fireEvent.click(proceed);
  });

  await waitFor(() => {
    expect(gateway.identify).toHaveBeenCalled();
    const state = _.get(gateway, 'identify.mock.calls.0.0');
    expect(state).toBe('off');
  });
});
