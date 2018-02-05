import BScroll from 'better-scroll';
import React, {Component} from 'react';

class ListView extends Component{
	
	constructor(props){
		super(props);
		this.refresh = this.refresh.bind(this);
		this.initScroll = this.initScroll.bind(this);
		this.scrollTo = this.scrollTo.bind(this);
		this.scrollToElement = this.scrollToElement.bind(this);
		this.listenScroll = this.listenScroll.bind(this);
		this.config = {
			probeType: 1,
			click: true,
			listenScroll: false
		}
		this.state = this.props.config ? {...this.config, ...this.props.config} : {...this.config}
	}
	
	componentWillReceiveProps(nextProps){
		//数据发生改变，刷新高度
		if(nextProps.data.length !== this.props.data.length && this.scroll){
			this.refresh && this.refresh();
		}
	}
	
	componentDidMount(){
		setTimeout(() => this.initScroll())
	}
	
	initScroll(){
		//初始化better-scroll
		if(!this.wrapper) return;
		this.scroll = new BScroll(this.wrapper, {...this.state});
		//监听滚动事件
		this.state.listenScroll &&  setTimeout(() => this.listenScroll()); 
	}
	
	listenScroll(){
		//返回滚动的实时位置
		this.scroll.on('scroll', pos => {
			this.props.onWatchListenScroll && 
			this.props.onWatchListenScroll(pos)
		})
	}
	
	enable(){
		this.scroll && this.scroll.enable()
	}
	
	disable(){
		this.scroll && this.scroll.disable()
	}
	
	refresh(){
		//刷新
		this.scroll && this.scroll.refresh();
	}
	
	scrollTo(){
		//滚动到相应位置
		this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
	}
	
	scrollToElement(){
		//滚动到相应元素
		this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
	}
	
	render(){
		const {children, className} = this.props;
		return <div className = {className} ref = {wrapper => this.wrapper = wrapper}>{children}</div>;
	}
	
}

export default ListView;