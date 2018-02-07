


export function createStore(reducer){
	
	let currentState = {},
		currentListeners = [];
	
	function getState(){
		return currentState
	}
	
	function subscribe(listener){
		currentListeners.push(listener)
	}
	
	function dispatch(action){
		currentState = reducer(currentState, action);
		currentListeners.forEach(d => d());
		return action;
	}
	
	dispatch({type:'@@REAL-REDUX/INIT'})
	
	return {getState, subscribe, dispatch}
	
}
