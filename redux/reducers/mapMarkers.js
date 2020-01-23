import {
  MAP_MARKERS_SUCCESS
} from '../actions/mapMarkers';

export default function mapMarkersReducer(state = null, action) {
  switch (action.type) {
    case MAP_MARKERS_SUCCESS:
      return action.mapMarkers;
    default:
      return state;
  }
}
