import {ThemeProvider} from 'styled-components';
import App from './redux/container.js';
import Tpl from './component/tpl.js';
import StyleComponent from './style-component';
import {store} from './redux/createStore';
const {Provider} = ReactRedux;

const theme = {
	primary: 'tomato'
}

const root = (() => {
ReactDom.render(
    <Provider store={store}>
    		<ThemeProvider theme={theme}>
      		<StyleComponent />
      	</ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
})();

store.subscribe(() => {
	root
});

//import './diff';
//import './async/_index'


