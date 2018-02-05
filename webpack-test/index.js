//import {ThemeProvider} from 'styled-components';
import App from './redux/container.js';
import {store} from './react-actions/createStore';
//import {store} from './redux/createStore';
import ReactAction from './react-actions/app';
import CreatLi from './scroll';
//import Tpl from './component/tpl.js';
//import Animate from './animate';
//import StyleComponent from './style-component';
//import Motion from './animate/demo';
//import TransitionGroup from './TransitionGroup/TransitionGroup';
//import TransitionGroupItem from './TransitionGroup/TransitionGroupItem';
//import TransitionGroupRouter from './TransitionGroupRouter/TransitionGroupRouter';
const {Provider} = ReactRedux;

//const theme = {
//	primary: 'tomato'
//}

//<ThemeProvider theme={theme}>
//	<StyleComponent />
//</ThemeProvider>

const root = (() => {
ReactDom.render(
    <Provider store = {store}>
    		<ReactAction />
    </Provider>,
    document.getElementById('root')
);
})();

store.subscribe(() => {
	root
});

//import './async/generator.js'

