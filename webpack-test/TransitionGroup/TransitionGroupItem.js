import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styles from './styles.css';

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

@ReactCssModules(styles, {allowMultiple:true})
class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: ['hello', 'world', 'click', 'me'] }
  }
  handleAdd() {
    this.setState({
      items: [
        ...this.state.items,
        prompt('Enter some text')
      ]
    });
  }
  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }
  
  
  handleEnter(){
  	console.log('onEnter')
  }
  
  handleEntering(){
  	console.log('handleEntering')
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
  
  render() {
  	
  	const props = {
  		timeout: {enter: 1000, exit: 800},
  		onEnter: this.handleEnter.bind(this),
    		onEntering: this.handleEntering.bind(this),
    		onEntered: this.handleEntered.bind(this),
    		onExit: this.handleExit.bind(this),
    		onExiting: this.handleExiting.bind(this),
    		onExited: this.handleExited.bind(this),
  	}
  	
    return (
      <div styleName="container">
        <TransitionGroup 
         styleName="todo-list"
        	>
          {this.state.items.map((item, i) => (
            <Fade {...props} key={item}>
              <div>
                {`${item}`}
                <button onClick={this.handleRemove.bind(this,i)}>
                  &times;
                </button>
              </div>
            </Fade>
          ))}
        </TransitionGroup>
        <button onClick={() => this.handleAdd()}>Add Item</button>
      </div>
    );
  }
}

export default TodoList;