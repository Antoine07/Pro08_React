import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/index';
import * as actionCreators from '../actions/actions-types'; 

export default function configureStore(preloadedState) {
  const composeEnhancers = composeWithDevTools({ actionCreators, trace: true, traceLimit: 25 });

  const middlewares = { };

  const store = createStore(reducer, preloadedState, composeEnhancers(
    applyMiddleware( ...middlewares )
  ));

  return store;
}