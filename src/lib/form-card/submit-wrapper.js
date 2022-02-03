export default function submitWrapper(setAlert, setWaiting, cb) {
  return async function useSubmit(values, options) {
    setWaiting(true);

    let resp;
    try {
      resp = await cb(values, options);
    } catch (err) {
      const { reason, severity } = err.details || {};
      setAlert({ message: err.message, reason, severity });
      resp = {};
    }

    // cleanup state
    options.setSubmitting(false);
    setWaiting(false);

    // call side effect callback
    if (resp.sideEffect) {
      const { sideEffect, args } = resp;
      sideEffect(...args);
    }
  };
}
