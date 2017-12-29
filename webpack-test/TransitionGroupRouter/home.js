import { CSSTransition } from 'react-transition-group';


class Home extends React.Component {
 
 constructor(props){
 	super(props);
 }
 
 componentWillMount(){
 	console.log('componentWillMount')
 }
 
 componentWillUnmount(){
 	console.log('componentWillUnmount')
 }
 
 render() {
  
  return (
	   <div>
	    <h1>Home</h1>
	    <p>Hello from the home page!</p>
	   </div>
  )
 }
}

export default Home;