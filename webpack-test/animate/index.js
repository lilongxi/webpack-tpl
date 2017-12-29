
import ReactTransitionGroup from 'react-addons-transition-group';


function FirstChild(props) {
	console.log(props)
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}

class AnimateFrist extends React.Component{
	componentWillAppear(){
		console.log('componentWillAppear')
	}
	componentDidAppear(){
		console.log('componentDidAppear')
	}
	componentWillEnter(){
		console.log('componentWillEnter')
	}
	componentDidEnter(){
		console.log('componentDidEnter')
	}
	componentWillLeave(){
		console.log('componentWillLeave')
	}
	componentDidLeave(){
		console.log('componentDidLeave')
	}
	render(){
		return (
			<div>
				AnimateFrist
			</div>
		)
	}
}

class Animate extends React.Component{
	
	render(){
		return (
			<ReactTransitionGroup component = {AnimateFrist}>
			</ReactTransitionGroup>
		)
	}
}


export default Animate