import {
  GET_ALERTS_PENDING,
  GET_ALERTS_SUCCESS,
  LIST_LOCATIONS_PENDING,
  LIST_LOCATIONS_SUCCESS,
  ALERTS_ERROR,
  LOCATIONS_ERROR
} from '../actions/data';
import {
  MAP_MARKERS_PENDING,
  MAP_MARKERS_SUCCESS,
  MAP_MARKERS_ERROR
} from '../actions/mapMarkers';

const initialState = {
  loadingLocations: null,
  loadingAlerts: null,
  loadingMapMarkers: null
};

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_LOCATIONS_PENDING:
      return {
        ...state,
        loadingLocations: true
      };
    case GET_ALERTS_PENDING:
      return {
        ...state,
        loadingAlerts: true
      };
    case MAP_MARKERS_PENDING:
      return {
        ...state,
        loadingMapMarkers: true
      };
    case LIST_LOCATIONS_SUCCESS:
      return {
        ...state,
        loadingLocations: false
      };
    case GET_ALERTS_SUCCESS:
      return {
        ...state,
        loadingAlerts: false
      };
    case MAP_MARKERS_SUCCESS:
      return {
        ...state,
        loadingMapMarkers: false
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
    case MAP_MARKERS_ERROR:
      return {
        ...state,
        loadingMapMarkers: false
      };
    default:
      return state;
  }
}
