

/*
 * redux学习小记
 */

import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createStore} from './real-rdux';

function counter(state = 0, action){
	switch(action.type){
		
		case 'ADD':
			return state + 1;
		case 'SUB':
			return state - 1;
		default:
			return 10;
		
	}
}

const store = createStore(counter);

function listener(){
	console.log(store.getState())
}

store.subscribe(listener);

store.dispatch({type: 'ADD'});
store.dispatch({type: 'ADD'});


/*
 * context
 */
class Page extends React.Component{
	/*
	 * 使用context强类型检测
	 */
	static childContextTypes = {
		user: PropTypes.string
	}
	
	constructor(props){
		super(props);
		this.state = {user: 'info'}
	}
	
	getChildContext(){
		return this.state;
	}
	
	render(){
		return <Page1/>
	}
}

class Page1 extends React.Component{
	static contextTypes = {
		user: PropTypes.string
	}
	render(){
		console.log(this.context)
		return <div>{this.props.info}</div>
	}
}


ReactDOM.render(
	<Page/>,
	document.getElementById('root')
)
