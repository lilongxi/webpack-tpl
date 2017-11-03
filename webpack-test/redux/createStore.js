import logger from 'redux-logger';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
const {createStore, applyMiddleware} = Redux;
const env = process.env.NODE_ENV;
var middleWare = [thunk];

if(env === 'dev'){
	middleWare = [...middleWare, logger];
}

export const store = applyMiddleware(...middleWare)(createStore)(rootReducer);
