//import React from 'react';
//import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import { createStore, combineReducers, applyMiddleware } from 'redux';
import Tpl from 'component/tpl.js';
const {Provider} = ReactRedux;
const {createStore, combineReducers, applyMiddleware} = Redux;

// test reduce
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.text
      ];
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ todos }),
  applyMiddleware()
);

store.dispatch({ type: 'ADD_TODO', text: 100 });


const render = (() => {
  ReactDom.render(
    <Provider store={store}>
      <Tpl />
    </Provider>,
    document.getElementById('root')
  );
})();

store.subscribe(() => {
  render;
});
