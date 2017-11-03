import App from './redux/container.js';
import {store} from './redux/createStore';
const {Provider} = ReactRedux;

const root = (() => {
ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
})();

store.subscribe(() => {
	root
});


