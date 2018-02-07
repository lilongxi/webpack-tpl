import React, {Component} from 'react';
import PropTypes from 'prop-types';
//connect 链接组件，将redux里的数据放到组件的属性里
//1.负责接收一个组件，把state里的数据放进去，返回一个组件
//2.数据变化的时候能够通知组件
export const connect = (mapStateToProps = state => state, mapDispatchToProps = {}) => {
	
	
	
}

//provider 把store放到context里。所有的子元素可以去到store

export class Provider extends Component{
	
	static childContextTypes = {
		store: PropTypes.object
	}
	
	getChildContext(){
		return {store: this.store}
	}
	
	constructor(props){
		super(props, context);
		this.store = props.store;
	}
	
	render(){
		return this.props.children
	}
	
}
