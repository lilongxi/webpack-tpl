import { call, 
		apply,
		put, 
		select,
		takeEvery, 
		takeLatest } 
from 'redux-saga/effects';
import produce from 'immer';
import {
	createActions,
	handleAction,
	handleActions,
    combineActions
} from 'redux-actions';

/*
 * create actions
 */

const {
	userFetchRequested,
	userFetchSucceeded,
	userFetchFailed
} = createActions({
	'USER_FETCH_REQUESTED': (id = 'lilongxi', loading) => ({id, loading: true}),
	'USER_FETCH_SUCCEEDED': (wage = 6000) => ({loading: false, wage}),
	'USER_FETCH_FAILED': (message = 'error') => ({loading: false, message})
})


/*
 * saga test reduce
 */

const initState = {
	wage: 6000,
	loading: false
}

const immtable = [
{
	todo: [
		{list: [1,2,3,4], done: true},
		{list: [], done: false}
	],
	done: true
},
{
	todo: "Try immer",
    done: false
}
]

const m1 = produce(immtable, draft => {
	draft[0].todo[0].list.push(5);
	draft[0].todo[0].done = false;
});

const mapper = produce((draft,index) => draft.index = index);
const m2 = immtable.map(mapper);

//const nextState = produce(initState, draft => draft.wage = 5000 );
//console.log(nextState, initState)

const fetchApi = id => {
	return new Promise((resolve, reject) => {
		if(id === 'lilongxi'){
			setTimeout(() => resolve(2500), 2000)
		}
	})
}

//const home = (state = initState, action) => 	produce( state, draft => {
//	//draft不接受return
//	switch(action.type){
//			case 'USER_FETCH_REQUESTED':
////				return {...state, loading: true}
//				draft.loading = true;
//				break;
//			case 'USER_FETCH_SUCCEEDED':
//				draft.wage = action.wage;
//				draft.loading = false;
//				break;
////				return {...state, wage: action.wage, loading: false}
//			case 'USER_FETCH_FAILED':
//				draft.message = action.message;
//				draft.loading = false;
//				break;
////				return {...state, loading: false, message: action.message}
//	}		
//})

const homeProduce = (state, fun) => produce(state, draft => fun(draft))
const home = handleActions({
		'USER_FETCH_REQUESTED': (state, action) => homeProduce(state, draft => { draft.loading = true }),
		'USER_FETCH_SUCCEEDED': (state, action) => homeProduce(state, draft => { draft.loading = false, draft.wage = action.payload.wage}),
		'USER_FETCH_FAILED': (state, action) => homeProduce(state, draft => {draft.message = action.payload.message, draft.loading = false })	
}, initState);


/*
 * saga actions
 */
function * fetchUser(action){
	
	try{
		/*
		 * call 发起一个异步
		 * 第一个参数异步函数，
		 * 第二个参数，函数接收的参数
		 */
		const wage = yield call(fetchApi, action.payload.id);
//		const wage = yield apply(fetchApi, [action.payload.id]);
		/*
		 * put => dispatch
		 */
//		yield put({type: 'USER_FETCH_SUCCEEDED', wage: 25000})
		yield put(userFetchSucceeded(25000));
		const state = yield select(state => state.home);
		
	}catch(e){
		//TODO handle the exception
//		yield put({type: 'USER_FETCH_FAILED', message:'error'})
		yield put(userFetchFailed('error'))
	}
	
}

/*
 * sage
 */
function * mySaga(){
	yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}


export {home, mySaga, userFetchRequested}
