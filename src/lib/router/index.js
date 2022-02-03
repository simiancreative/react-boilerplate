import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Login from 'views/auth/login';
import Home from 'views/home';
import PrivateRoute from './private-route';

export default function AppRouter() {
  const { location } = window;

  return (
    <Router>
      <Switch location={location}>
        <Route path="/auth/login" component={Login} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </Router>
  );
}
