import ListView from './listview';
import index from './index.css';
import {data} from './data';

class CreatLi extends React.Component{
	
	constructor(props){
		super(props);
		this.handleTouchStart = this.handleTouchStart.bind(this);
		this.handleTouchMove = this.handleTouchMove.bind(this);
		this.scrollTo = this.scrollTo.bind(this);
		this.getData = this.getData.bind(this);
		this.onWatchListenScroll = this.onWatchListenScroll.bind(this);
		this.calculateHeight = this.calculateHeight.bind(this);
		this.calculateScrollY = this.calculateScrollY.bind(this);
		this.calculateFixedTitle = this.calculateFixedTitle.bind(this);
		this.touches = {};
		this.ANCHOR_HEIGHT = 0;
		this.TITLE_HEIGHT = 0;
		this.listHeight = []; //保存group的高度
		this.state = {
			ulList: [],
			shortcutList: [],
			scrollY: -1,//监听当前滚动y轴坐标
			currentIndex: 0, //当前滚动index值
			diff: -1 //下一个区块标题和上一个区块标题的差值
		}
	}
	
	componentDidMount(){
		this.setState(() => ({
			ulList: [...data],
			shortcutList: (() => {return data.map((item) => {return item.title.substr(0, 1)})})()
		}), () => setTimeout(() => this.calculateHeight()));
	}
	
	getData(ele, index){
		return ele.getAttribute(`data-${index}`);
	}
	
	scrollTo(index, timer = 0){
		const list = this.listHeight;
		//计算快速入口上下边界
		if(!index && index !== 0) return;
		//快速滑动到顶部或底部，index为负值或无限大
		if(index < 0){
			index = 0;
		}else if(index > list.length - 2){
			//大于最后一个元素
			index = list.length - 2;
		}
		//手动派发
		this.calculateScrollY(-list[index]);
		this.listview.scrollToElement(this.listGroup.children[index], timer);
	}
	
	onWatchListenScroll(pos){
		const scrollY = pos.y;
		//由listview派发， 用于计算滚动的scrollY
		this.setState({scrollY}, () => this.calculateScrollY(scrollY));
	}
	
	handleTouchStart(e){
		let target = e.target;
		//首次触摸li的index
		let anchorIndex = this.getData(target, 'index');
		//获取快速入口每一个li的高度padding+fontsize
		this.ANCHOR_HEIGHT = target.getBoundingClientRect().width;
		//获取首次触摸的pageX,pageY
		this.touches.y1 = e.touches[0].pageY;
		//记录当前anchorIndex
		this.touches.anchorIndex = anchorIndex;
		//回滚
		this.scrollTo(anchorIndex, 200);
	}
	
	handleTouchMove(e){
		e.stopPropagation();
		//实时获取手指滑动的pageY
		this.touches.y2 = e.touches[0].pageY;
		//计算出手指y轴的偏移量, 根据偏移量计算出滑动了多少个delta
		let delta = (this.touches.y2 - this.touches.y1) / this.ANCHOR_HEIGHT | 0; 
		//anchorIndex加上delta是当前的anchorIndex；
		let anchorIndex = parseInt(this.touches.anchorIndex) + delta;
		//回滚
		this.scrollTo(anchorIndex, 0);
	}
	
	calculateHeight(){
		//用于计算右侧group的高度,dom生成后执行此方法
		this.listHeight = [];
		const list = this.listGroup.children;
		//实例化区块标题高度
		this.TITLE_HEIGHT = list[0].getElementsByTagName('h2')[0].getBoundingClientRect().height;
		//获取listgroup下每一个ul-group的高度,初始化第一个高度
		let height = 0, len = list.length, i;
		this.listHeight.push(height);
		for(i = 0; i < len; i++){
			//循环获取每一个区块的高度
			let item = list[i];
			height += item.getBoundingClientRect().height;
			this.listHeight.push(height);
		}
	}
	
	calculateScrollY(newY){
		//监听scrollY的变化
		const listHeight = this.listHeight;
		let len = listHeight.length, i;
		/*
		 * 边界处理
		 * 1.newY > 0, 当滚动到顶部
		 * 2.中间部分滚动
		 * 3.当滚动到最底部， -newY大于最后一个元素上线
		 */
		
		//1
		if(newY > 0) {
			this.setState({currentIndex: 0});
			return;
		}
		
		//2
		for(i = 0; i < len - 1; i++){
			//len - 1由于数组多出一个初始化高度元素0
			let height1 = listHeight[i];//获取上边缘
			let height2 = listHeight[i + 1]; //获取下边缘
			//获取i
			if(-newY >= height1 && -newY < height2){
				//当newY 大于等于height1，并且小于height2证明此时处于中间部分
				this.setState({currentIndex: i, diff: height2 + newY}, () => this.calculateFixedTitle(this.state.diff));
				return
			}
		}
		
		//3
		this.setState({currentIndex: len - 2});
	}
	
	calculateFixedTitle(newVal){
		let fixTop = (newVal > 0 && newVal < this.TITLE_HEIGHT) ?  newVal - this.TITLE_HEIGHT : 0;
		if(this.fixTop === fixTop) return;
		this.fixTop = fixTop;
		this.fixed.style.transform = `translate3d(0, ${fixTop}px, 0)`;
	}
	
	render(){
		
		const {ulList, shortcutList, currentIndex, scrollY} = this.state;
		const config = {listenScroll: true, probeType: 3};
		
		return(
			<div>
				<ListView className={index.ul} 
						  data={ulList} 
						  config={config}
						  onWatchListenScroll = {this.onWatchListenScroll}
						  ref={listview => this.listview = listview}
						   >
					<ul className={index.group} 
						ref = {listGroup => this.listGroup = listGroup}>
						{
							ulList.map((item, i) => (
								<li className={index.title} key={i}>
							        <h2>
							        		{item.title}
							        </h2>
							        <ul>
							        		{
							        			item.items.map( it => (
							        				<li key={it.id}>
										            <span>
										            {it.name}
										            </span>
										         </li>
							        			))
							        		}
							        </ul>
							     </li>
							))
						}
					</ul>
				</ListView>
				<div className={index.fixed} ref = {fixed => this.fixed = fixed}>
					{
						(() => {
							
							if(scrollY > 0) return null;
							return <h2>{ulList[currentIndex] && ulList[currentIndex].title}</h2>;
							
						})()
					}
				</div>
				<ul className={index.shortcut} 
					onTouchStart={this.handleTouchStart}
					onTouchMove={this.handleTouchMove}>
					{
						shortcutList.map((item, i) => (
							<li className={currentIndex === i ? index.current : ''} 
								data-index={i} 
								key={item}>
								{item}
							</li>
						))
					}
				</ul>
			</div>
		)
	}
	
}




export default CreatLi;