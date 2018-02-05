import {combineReducers, createStore, applyMiddleware} from 'redux';
import { createAction, 
		handleAction,
		createActions, 
		combineActions, 
		handleActions } from 'redux-actions';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//function Reudce(state = {num: 0}, action){
//	switch(action.type){
//		case 'ADD_TODO':
//			return {num: state.num + action.payload}
//		case 'SUB_TODO':
//			return {num: state.num - action.payload}
//		default:
//			return state
//	}
//}


const ADD_TODO = 'ADD_TODO';
const SUB_TODO = 'SUB_TODO';

/*
 * 分发reduce
 */


const Reudce = handleActions({
	ADD_TODO : (state, action) => ({
		num: state.num + action.payload
	}),
	SUB_TODO: (state, action) => ({
		num: state.num - action.payload
	})
}, {num: 10})

/*
 * 整合reducer
 */
const reducer = handleAction(combineActions(ADD_TODO, SUB_TODO), {
  next:(state, action) => ({ ...state, num: state.num + action.payload }),
  throw: state => ({ ...state, num: 0 }),
}, { num: 10 })


const reducers = handleActions({
  [combineActions(ADD_TODO, SUB_TODO)]
  (state, action){ return { ...state, num: state.num + action.payload }}
}, { num: 10 });

/*
 * 组合createActions
 */
const {addTodo, subTodo} = createActions({
	ADD_TODO: num => num,
	SUB_TODO: num => -num
});

const addTodoA = (num) => (dispatch, getState) => {
   console.log(addTodo)
}

/*
 * 创建多个createActions
 */
//const selectTodo = (todo, num) => dispatch => {
//	const d = createAction(todo);
//	return dispatch(d(num))
//}

function selectTodo(todo, num){
	return function(dispatch){
		return dispatch({type: todo, payload: num})
	}
}

//const addTodo = createAction(ADD_TODO);
//const subTodo = createAction(SUB_TODO);

//function add(){
//	return {type: 'ADD_TODO'}
//}
//
//function sub(){
//	return {type: 'SUB_TODO'}
//}

const combine = combineReducers({store});
const store = applyMiddleware(logger, thunk)(createStore)(reducer);

export {addTodo, store, subTodo, selectTodo}
