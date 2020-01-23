import { combineReducers } from 'redux';
import locationsState from './locations';
import mapMarkersState from './mapMarkers';
import alertsState from './alerts';
import loadingState from './loading';
import errorsState from './errors';

export default combineReducers({
  errorsState,
  loadingState,
  alertsState,
  mapMarkersState,
  locationsState,
});
