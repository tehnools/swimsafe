import { combineReducers } from 'redux';
import locationsState from './locations';
import alertsState from './alerts';
import loadingState from './loading';
import errorsState from './errors';
// import locationDrawerState from './locationDrawerState';
// import eventDrawerState from './eventDrawerState';
// import menuDrawerState from './menuDrawerState';

export default combineReducers({
  errorsState,
  loadingState,
  alertsState,
  locationsState,
});
