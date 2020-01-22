const { get } = require('axios');

const URL = 'https://api-dot-translate-safeswim.appspot.com/v1/map/locations';

export function listLocations() {
  return get(URL);
}

export function getLocation(id) {
  return get(`${URL}/${id}`)
    .then((response) => response)
    .catch((error) => error);
}
