import {
  ALERTS_ERROR,
  LOCATIONS_ERROR,
} from '../actions/data';
import { MAP_MARKERS_ERROR } from '../actions/mapMarkers';

const initialState = {};
const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALERTS_ERROR:
    case LOCATIONS_ERROR:
    case MAP_MARKERS_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default errorsReducer;
