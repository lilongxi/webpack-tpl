import {
	REQUEST_POSTS, 
	RECEIVE_POSTS, 
	INVALIDATE_SUBREDDIT, 
	SELECT_SUBREDDIT
} from './actionCreators';

import {
		createAction, 
		createActions
} from 'redux-actions';

const normalize = items => {return items.data.children.map(item => item.data)}

/*
 * redux-actions减少模板代码复用
 */
const {requestPosts, 
	  receivePosts, 
	  invalidateSubreddit, 
	  selectSubreddit
} = createActions({
	SELECT_SUBREDDIT: subreddit => subreddit,
	REQUEST_POSTS: subreddit => ({subreddit}),
	INVALIDATE_SUBREDDIT: subreddit => ({subreddit}),
	RECEIVE_POSTS: (subreddit, items = []) => ({subreddit, items: normalize(items)}),
})

const shouldFetchIfNeed = (state, subreddit) => {
	const posts = state.postsBySubreddit[subreddit];
	if(!posts){
		return true
	}else if(posts.isFetching){
		return false
	}else{
		return posts.didInvalidate
	}
}

const sleep = async(timer) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(), timer)
	})
}

const fetchPosts = subreddit => async(dispatch, getState) => {
	
	 dispatch(requestPosts(subreddit));
	 
	 await IsomorphicFetch(`http://www.subreddit.com/r/${subreddit}.json`)
	   .then(response => response.json())
	   .then(data => dispatch(receivePosts(subreddit, data)));
	 
//	 console.time('await');
//	 await sleep(2000)
//	 console.timeEnd('await');
//	 
//	 await IsomorphicFetch(`http://www.subreddit.com/r/frontend.json`)
//	  		.then(response => response.json())
//	  		.then(data => console.log(data))
		   
}

const fetchPostsIfNeed = subreddit => (dispatch, getState) => {
	
	if(shouldFetchIfNeed(getState(), subreddit)){
		return dispatch(fetchPosts(subreddit));
	}else{
		Promise.resolve()	
	}
	
}

const shoudSelectSubreddit = subreddit => (dispatch, getState) => {
	const {selectSubreddit: selectString} = getState();
	if(subreddit === selectString){
		return Promise.resolve();
	}
	return dispatch(selectSubreddit(subreddit))
}

export {shoudSelectSubreddit, fetchPostsIfNeed, invalidateSubreddit}
