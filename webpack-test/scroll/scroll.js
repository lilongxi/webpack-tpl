
import BScroll from 'better-scroll';

class Scroll extends React.Component{
	
	constructor(props){
		super(props);
	  	this.shouldComponentUpdate = ReactAddonsPureRenderMixin.shouldComponentUpdate.bind(this);
	  	this.state = {
	  		probeType: this.props.probeType ? this.props.probeType: 1,
	  		click:true,
	  		listenScroll: this.props.listenScroll,
	  		_scrollTo: this.scrollTo.bind(this),
	  		_scrollToElement: this.scrollToElement.bind(this)
	  	}
	}
	
	
	componentDidMount(){
		setTimeout(() => {
			this._initScroll();
		}, 20);
	}
	
	componentWillReceiveProps(nextProps){
		this.refresh();
	}
	
	_initScroll(){
		const {probeType, click, listenScroll} = this.state;
		
		if(!this.wrapper){
			return
		}
		
		this.scroll = new BScroll(this.wrapper, {
			probeType: probeType,
			click: click
		});
		//监听scroll的滚动
		if(listenScroll){
			const {onWatchScrollY} = this.props;
			this.scroll.on('scroll', pos => {
				//将pos传出
				onWatchScrollY && onWatchScrollY(pos);
			})
		}
	}
	
	enable(){
		this.scroll && this.scroll.enable()
	}
	
	disable(){
		this.scroll && this.scroll.disable()
	}
	
	refresh(){
		this.scroll && this.scroll.refresh();
	}
	
	scrollTo(){
		//滑动到指定位置
		this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
	}
	
	scrollToElement(el, time = 0){
		this.scroll && this.scroll.scrollToElement(el, time);
	}
	
	render(){
		const {children: slot, className} = this.props;
		
		return (
			<div className={className} ref={wrapper => this.wrapper = wrapper}>
				{slot}
			</div>
		)
	}
}


export default Scroll;