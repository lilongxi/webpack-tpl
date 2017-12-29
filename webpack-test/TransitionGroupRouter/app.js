import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {firstChild} from './helpers';
import Home from './home';
import Subpage from './subpage';
import './styles.css';

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

class App extends React.Component{
	
	constructor(props){
		super(props);
		this.state = { show: true }
	}
	
	handleEnter(){
	  	console.log('onEnter')
	 }
	  
	  handleEntering(){
	  	console.time('handleEntering')
	  	console.timeEnd('handleEntering')
	  }
	  
	  handleEntered(){
	  	console.log('handleEntered')
	  }
	  
	  handleExit(){
	  	console.log('handleExit')
	  }
	  
	  handleExiting(){
	  	console.log('handleExiting')
	  }
	  
	  handleExited(){
	  	console.log('handleExited')
	  }
	
	render(){
		
		const props = {
			in: this.state.show,
	  		timeout: {enter: 2000, exit: 500},
	  		onEnter: this.handleEnter.bind(this),
	    		onEntering: this.handleEntering.bind(this),
	    		onEntered: this.handleEntered.bind(this),
	    		onExit: this.handleExit.bind(this),
	    		onExiting: this.handleExiting.bind(this),
	    		onExited: this.handleExited.bind(this),
	  	}
		
		return (
			<Router>
				<div>
					<div>
						<Link to='/'>Home</Link>
						{` `}
						<Link to='/subpage'>Subpage</Link>
					</div>
					{/*<Route exact path='/' component={Home} />
					<Route path='/subpage' component={Subpage} />*/}
					<TransitionGroup>
						<Route 
						 exact 
						 path='/' 
						 render = {({...rest}) => (<Fade {...props} key='home'><Home {...rest} /></Fade>) }/>
						<Route 
						 path='/subpage' 
						 render = {({...rest}) => (<Fade {...props} key='subpage'><Subpage {...rest} /></Fade>) }/>
					</TransitionGroup>
				</div>
			</Router>
		)
		
	}
	
}

export default App;
