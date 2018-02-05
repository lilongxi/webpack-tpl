/*
 * saga test reduce
 */

import {home} from './saga';

import {
	REQUEST_POSTS, 
	RECEIVE_POSTS, 
	INVALIDATE_SUBREDDIT, 
	SELECT_SUBREDDIT
} from './actionCreators';

import {
		handleAction,
		combineActions, 
		handleActions
} from 'redux-actions';

//初始数据类型
const initialState = {
	isFetching:false,
	didInvalidate: false,
	items:[]
}
const initial = 'reactjs';

/*
 * redux-actions减少模板代码复用
 */
const selectSubreddit = handleAction(SELECT_SUBREDDIT, (state, action) => action.payload , initial)

const posts = (state = initialState, action) => {
	
	switch(action.type){
		//请求发起
		case REQUEST_POSTS:
			return {
				...state,
				isFetching: true,
				didInvalidate: false
			}
		case RECEIVE_POSTS:
			return {
				...state,
				isFetching: false,
				didInvalidate: false,
				items: action.payload.items,
				lastUpdate: Date.now()
			}
		case INVALIDATE_SUBREDDIT:
			return {
				...state,
				didInvalidate: true,
			}
		default:
			return state;
	}
}

/*
 * redux-actions减少模板代码复用
 */
const postsBySubreddit = handleAction(
	combineActions(REQUEST_POSTS, RECEIVE_POSTS, INVALIDATE_SUBREDDIT),
	{
	next: (state, action) => ({ ...state, [action.payload.subreddit]: posts(state[action.payload.subreddit], action) }),
	throw: state => ({ ...state }),
	},{})

export default Redux.combineReducers({
	selectSubreddit,
	postsBySubreddit,
	home
})