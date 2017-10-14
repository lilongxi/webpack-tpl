//import React from 'react';
// import $ from 'jquery';
import { connect } from 'react-redux';
import Index from 'css/index.css';

const env = process.env.NODE_ENV;

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: (text) => {
    dispatch({ type: 'ADD_TODO', text });
  }
});

@connect(mapStateToProps, mapDispatchToProps)
class Tpl extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.addTodo(200);
  }
  render() {
    const { todos } = this.props;

    return (
      <div className={Index.head}>
			webpack master Hello
		   <ul>
		     {
		     todos.map((item, index) => <li key={index}>{item}</li>)
		    }
		   </ul>
      </div>
    );
  }
}

export default Tpl;
