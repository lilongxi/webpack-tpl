import { Transition } from 'react-transition-group';

/*
 * duration: 动画过度时间
 * defaultStyle：默认起始样式
 * transitionStyles：过度样式
 */

const duration = 500;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 1,
  padding: 20,
  display: 'inline-block',
  backgroundColor: '#8787d8'
}

/*
 * entering，exiting：由timeout：{enter， exit} 控制
 * entered，exited: 由in：true/false 控制
 * exited为最终样式，如果没有设置则为默认样式defaultStyle
 */

const transitionStyles = {
entering: { opacity: .5 ,padding: 25, transform: `translate3d(0, 200px, 0)` },
entered: { opacity: 1 ,padding: 50, transform: `translate3d(200px, 200px, 0)` },
exiting: { opacity: .5 ,padding: 50, transform: `translate3d(200px, 0, 0)`},
exited: { opacity: .1, padding: 20, transform: `translate3d(0, 0, 0)`}
};

const Fade = ({...props}) => (
  <Transition {...props}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        I'm A fade Transition!
      </div>
    )}
  </Transition>
);

class Example extends React.Component {
  state = { show: false, timed: 500 }
  
  handleToggle() {
    this.setState(({ show }) => ({
      show: !show
    }))
  }
  
  handleEnter(){
  	console.log('onEnter')
  }
  
  handleEntering(){
  	console.time('handleEntering');
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
  
  render() {
    const { show, timed } = this.state;
    
    const props = {
    		in: show,
    		timeout: {enter:timed ,exit: timed},
    		onEnter: this.handleEnter.bind(this),
    		onEntering: this.handleEntering.bind(this),
    		onEntered: this.handleEntered.bind(this),
    		onExit: this.handleExit.bind(this),
    		onExiting: this.handleExiting.bind(this),
    		onExited: this.handleExited.bind(this),
    }
    
    return (
      <div>
        <button onClick={() => this.handleToggle()}>
        	  {
        	  	!show ? '点击变大' : '点击还原'
        	  }
        </button>
        <div>
          <Fade {...props} />
        </div>
      </div>
    )
  }
}

export default Example;