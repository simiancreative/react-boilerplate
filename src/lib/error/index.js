import Log from '../log';

export default function AppError(message, reason, err) {
  if (err) {
    Log.error(message, reason, err.stack);
  }

  const error = new Error(message);
  error.details = { reason, severity: 'error' };
  return error;
}
