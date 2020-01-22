import {
  GET_ALERTS_SUCCESS
} from '../actions/data';

export default function alertsReducer(state = null, action) {
  switch (action.type) {
    case GET_ALERTS_SUCCESS:
      return action.alerts;
    default:
      return state;
  }
}
