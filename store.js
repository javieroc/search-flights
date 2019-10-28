import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { setData } from './actions';
import rootReducer from './reducers';

const exampleInitialState = {
  flights: {
    inbound: [],
    outbound: []
  }
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
}
