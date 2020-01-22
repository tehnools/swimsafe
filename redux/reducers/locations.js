import {
  LIST_LOCATIONS_SUCCESS,
} from '../actions/data';

const locations = (state = null, action) => {
  switch (action.type) {
    case LIST_LOCATIONS_SUCCESS:
      return action.locations;
    default:
      return state;
  }
};


export default locations;
