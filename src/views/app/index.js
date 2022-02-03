import { useStore } from 'store';

import Router from 'lib/router';
import Spinner from 'lib/spinner';
import SnackBar from 'lib/snackbar';
import AppTheme from 'lib/theme';

export default function App() {
  const [{ layout }] = useStore();

  if (process.env.NODE_ENV !== 'production') {
    localStorage.setItem('debug', 'hyppo:*');
  }

  return (
    <AppTheme local={layout.locale}>
      <Router />
      <SnackBar />
      <Spinner />
    </AppTheme>
  );
}
