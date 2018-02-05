import {createLogger} from 'redux-logger';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

/*
 * saga
 */

import createSagaMiddleware from 'redux-saga';
import {mySaga} from './saga';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const {createStore, applyMiddleware} = Redux;
const env = process.env.NODE_ENV;
var middleWare = [thunk, sagaMiddleware];
const logger = createLogger({
	diff: true,
	collapsed: true
})

if(env === 'dev'){
	middleWare = [...middleWare, logger];
}


export const store = applyMiddleware(...middleWare)(createStore)(rootReducer);

/*
 * 最后执行
 */
sagaMiddleware.run(mySaga)
