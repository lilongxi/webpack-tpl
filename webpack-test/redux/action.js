import {
	REQUEST_POSTS, RECEIVE_POSTS, INVALIDATE_SUBREDDIT, SELECT_SUBREDDIT
} from './actionCreators';

//选择数据类型
export function selectSubreddit(subreddit){
	return {
		type: SELECT_SUBREDDIT,
		subreddit
	}
}

//发起请求
export function requestsPosts(subreddit){
	return {
		type: REQUEST_POSTS,
		subreddit
	}
}

//数据刷新
export function invalidatePosts(subreddit){
	return {
		type:INVALIDATE_SUBREDDIT,
		subreddit
	}
}

//数据更新
export function receivePosts(subreddit, data){
	return {
		type: RECEIVE_POSTS,
		subreddit,
		posts: data.data.children.map(item => item.data),
		lastUpdate: Date.now()
	}
}

//数据刷新
function shouldFetchPosts(state = {}, subreddit){
	const posts = state.postsBySubreddit[subreddit];
	if(!posts){
		//没有数据
		return true
	}else if(posts.isFetching){
		return false
	}else{
		return posts.didInvalidate
	}
}

//设置数据请求
const fetchPosts = subreddit => (dispatch, getState) => {
	//开始请求数据
	dispatch(requestsPosts(subreddit));
	//请求中。。。
	return IsomorphicFetch(`http://www.subreddit.com/r/${subreddit}.json`)
		   .then(response => response.json())
		   .then(data => dispatch(receivePosts(subreddit, data)))
}

export const fetchPostsIfNeed = subreddit => (dispatch, getState) => {
	//设置响应缓存，判断对应的数组内是否存在数据
	if(shouldFetchPosts(getState(), subreddit)){
		return dispatch(fetchPosts(subreddit));
	}else{
		Promise.resolve();
	}
}
