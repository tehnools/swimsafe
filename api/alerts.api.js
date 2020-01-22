const { get } = require('axios');

const URL = 'https://api-dot-translate-safeswim.appspot.com/v1/alerts';

export default function getAlerts(params) {
  return get(URL, null, params).then((r) => r).catch((error) => error);
}
