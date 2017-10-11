import React from 'react';
import Index from 'stylus/index.css';

import $ from 'jquery';

class Tpl extends React.Component{
	componentWillMount(){
		
	}
	render(){
		return (
			<div className={Index.head}>
			webpack master Hello
			</div>
		)
	}
}

export default Tpl;