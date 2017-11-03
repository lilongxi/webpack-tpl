import {
	REQUEST_POSTS, RECEIVE_POSTS, INVALIDATE_SUBREDDIT, SELECT_SUBREDDIT
} from './actionCreators';

//初始数据类型
const initialState = {
	isFetching:false,
	didInvalidate: false,
	items:[]
}
const initial = 'reactjs';

//类型选择
function selectSubreddit(state = initial, action){
	switch(action.type){
		case SELECT_SUBREDDIT:
			return action.subreddit;
		default:
			return state;
	}
}


//数据异步请求reducer
function posts(state = initialState, action){
	switch(action.type){
		//请求发起
		case REQUEST_POSTS:
			return {
				...state,
				isFetching: true,
				didInvalidate: false
			}
		//数据响应
		case RECEIVE_POSTS:
			return {
				...state,
				isFetching: false,
				didInvalidate: false,
				items: action.posts,
				lastUpdate: action.lastUpdate
			}
		//数据刷新
		case INVALIDATE_SUBREDDIT:
			return {
				...state,
				didInvalidate: true
			}
		default:
			return state;
	}
}

//整体分发action
function postsBySubreddit(state = {}, action){
	switch(action.type){
		case INVALIDATE_SUBREDDIT:
		case REQUEST_POSTS:
		case RECEIVE_POSTS:
		return {
			...state,
			[action.subreddit]: posts(state[action.subreddit], action)
		}
		default:
		return state;
	}
}

export default Redux.combineReducers({
	selectSubreddit,
	postsBySubreddit
})
