import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import mainReducer from './reducers/main';

export default function configureStore() {
  return createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));
}
