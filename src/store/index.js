import React, { useContext, createContext, useReducer } from 'react';
import _ from 'lodash';

import Log from 'lib/log';

import stores from './stores';

const store = createContext(stores.state);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const initialState = {};
  const storeNames = Object.keys(stores);
  storeNames.forEach(name => {
    initialState[name] = stores[name].state;
  });

  const [s, dispatch] = useReducer((state, action) => {
    try {
      const { store: storeName, reducer, value } = action;
      const reducerMethod = _.get(stores, `${storeName}.reducers.${reducer}`);
      const partialState = _.get(state, storeName);
      const newPartialState = reducerMethod(partialState, value);
      const newState = { ...state };
      _.set(newState, storeName, newPartialState);
      return newState;
    } catch (err) {
      Log.error(err, state, action);
      return state;
    }
  }, initialState);

  return <Provider value={{ state: s, dispatch }}>{children}</Provider>;
};

function useStore() {
  const { state, dispatch } = useContext(store);

  const actions = {};
  const storeNames = Object.keys(stores);
  storeNames.forEach(name => {
    const storeActions = {};
    const actionNames = Object.keys(stores[name].reducers);
    actionNames.forEach(actionName => {
      storeActions[actionName] = value => {
        dispatch({
          store: name,
          reducer: actionName,
          value
        });
      };
    });
    actions[name] = storeActions;
  });

  return [state, actions];
}

export { store, useStore, StateProvider };
