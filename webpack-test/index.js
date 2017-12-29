import {ThemeProvider} from 'styled-components';
import App from './redux/container.js';
import Tpl from './component/tpl.js';
import Animate from './animate';
import StyleComponent from './style-component';
import {store} from './redux/createStore';
import Motion from './animate/demo';
import TransitionGroup from './TransitionGroup/TransitionGroup';
import TransitionGroupItem from './TransitionGroup/TransitionGroupItem';
import TransitionGroupRouter from './TransitionGroupRouter/TransitionGroupRouter';
const {Provider} = ReactRedux;

const theme = {
	primary: 'tomato'
}

//<ThemeProvider theme={theme}>
//	<StyleComponent />
//</ThemeProvider>

const root = (() => {
ReactDom.render(
    <Provider store={store}>
    		<TransitionGroupItem />
    </Provider>,
    document.getElementById('root')
);
})();

store.subscribe(() => {
	root
});

//import './diff';
//import './async/_index'
