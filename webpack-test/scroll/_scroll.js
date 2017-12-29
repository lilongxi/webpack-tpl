//只是一个demo
import scroll from './scroll.css';
import BScroll from './scroll';

@ReactCssModules(scroll)
class ScrollReact extends React.Component{
	
	_createLi(){
		this.ul = [];
		for(let i = 0; i < 100; i++){
			this.ul.push(<li key={i}>{i}</li>)
		}
		return this.ul;
	}
	
	render(){
		
		const li = this._createLi.bind(this)();
		
		return (
			<BScroll className={scroll.scrollView}>
				<ul styleName="containerUl">
					{li}
				</ul>
			</BScroll>
		)
	}
}

export default ScrollReact;