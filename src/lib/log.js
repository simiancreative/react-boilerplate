const BASE = 'hyppo';
const COLOURS = {
  trace: '#7965a3',
  info: '#5daed4',
  warn: '#f09665',
  error: '#cc6161'
};

function generateMessage(level, source, message) {
  // Set the prefix which will cause debug to enable the message
  let namespace = `${BASE}:${level}`;
  if (source) {
    namespace = `${BASE}:${level}:${source}`;
  }

  console.group(`%c${namespace}`, `color: ${COLOURS[level]};`);

  console[level](...message);

  console.groupEnd(namespace);
}

const Log = {
  trace(source, ...message) {
    return generateMessage('trace', source, message);
  },

  info(source, ...message) {
    return generateMessage('info', source, message);
  },

  warn(source, ...message) {
    return generateMessage('warn', source, message);
  },

  error(source, ...message) {
    return generateMessage('error', source, message);
  }
};

export default Log;
