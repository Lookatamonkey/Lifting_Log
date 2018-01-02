import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/root_reducer';
// import logger from 'redux-logger';

// Uncomment this when you need to deplay for production
const middlewares = [thunk];
if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  const logger = require('redux-logger');
  middlewares.push(logger.createLogger());
}

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer, 
    preloadedState, 
    applyMiddleware(thunk, ...middlewares))
);

export default configureStore;