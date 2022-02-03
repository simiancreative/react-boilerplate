import { Fragment, useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import _ from 'lodash';

import AppBar from 'lib/appbar';
import Token from 'lib/token';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { location } = window;
  const { path } = rest;
  const [loading, setLoading] = useState(true);
  const [isValid, setValid] = useState(false);

  useEffect(() => {
    setValid(Token.isValid());
    setLoading(false);
  }, [path]); // eslint-disable-line

  const render = props => {
    if (isValid) {
      return <Component {...props} />;
    }

    if (loading) {
      return <h4 className="centered">loading</h4>;
    }

    const to = {
      pathname: '/auth/login',
      state: {
        returnurl: _.get(props, 'match.url')
      }
    };

    return <Redirect to={to} />;
  };

  return (
    <Fragment>
      <AppBar location={location} />
      <Route {...rest} render={render} />
    </Fragment>
  );
}
