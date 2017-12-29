import React from 'react';
import {Motion, spring} from 'react-motion';
import demoStyle from './demo.css';


class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  };

  handleMouseDown = () => {
    this.setState({open: !this.state.open});
  };

  handleTouchStart = (e) => {
    e.preventDefault();
    this.handleMouseDown();
  };

  render() {
    return (
      <div>
        <button
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}>
          Toggle
        </button>
        <Motion style={{x: spring(this.state.open ? 400 : 0), y: spring(this.state.open ? 200 : 0)}}>
          {({x, y}) =>
            // children is a callback which should accept the current value of
            // `style`
            <div className={demoStyle.demo0}>
              <div className={demoStyle.demo0block} style={{
                WebkitTransform: `translate3d(${y}px, ${x}px, 0)`,
                transform: `translate3d(${y}px, ${x}px, 0)`,
              }} />
            </div>
          }
        </Motion>
      </div>
    );
  };
}

export default Demo;