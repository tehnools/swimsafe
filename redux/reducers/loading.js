import {
  GET_ALERTS_PENDING,
  GET_ALERTS_SUCCESS,
  LIST_LOCATIONS_PENDING,
  LIST_LOCATIONS_SUCCESS,
  ALERTS_ERROR,
  LOCATIONS_ERROR
} from '../actions/data';

const initialState = {
  loadingLocations: null,
  loadingAlerts: null
};

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_LOCATIONS_PENDING:
      return {
        ...state,
        loadingLocations: true
      };
    case LIST_LOCATIONS_SUCCESS:
      return {
        ...state,
        loadingLocations: false
      };
    case GET_ALERTS_PENDING:
      return {
        ...state,
        loadingAlerts: true
      };
    case GET_ALERTS_SUCCESS:
      return {
        ...state,
        loadingLocations: true
      };
    case ALERTS_ERROR:
      return {
        ...state,
        loadingAlerts: false
      };
    case LOCATIONS_ERROR:
      return {
        ...state,
        loadingLocations: false
      };
    default:
      return state;
  }
}
