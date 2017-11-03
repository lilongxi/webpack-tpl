import * as ActionCreators from './action';
import {Picker, Posts} from './component';
import styles from '../css/index.css';
const {connect} = ReactRedux;

const mapStateToProps = state => {
	
	const {selectSubreddit, postsBySubreddit} = state;
	const {isFetching, items: posts, lastUpdate} = postsBySubreddit[selectSubreddit] || {isFetching: true, items:[]};
	
	return {
		selectSubreddit,
		isFetching,
		posts,
		lastUpdate
	}
}

const mapDispatchToProps = dispatch => {
	//可通过此方法将action传入子组件
	return {
		actions: Redux.bindActionCreators(ActionCreators, dispatch)
	}
}

//模块化处理css
@connect(mapStateToProps, mapDispatchToProps)
@ReactCssModules(styles, {allowMultiple:true})
class App extends React.Component{
	
	componentDidMount(){
		const {selectSubreddit, actions} = this.props;
		actions.fetchPostsIfNeed(selectSubreddit);
	}
	
	componentWillReceiveProps(nextProps){
		if (nextProps.selectSubreddit !== this.props.selectSubreddit) {
	      const { selectSubreddit } = nextProps
	      this.props.actions.fetchPostsIfNeed(selectSubreddit)
	    }
	}
	
	onRefresh(e){
		e.preventDefault();
		const {selectSubreddit, actions} = this.props;
		actions.invalidatePosts(selectSubreddit);
		actions.fetchPostsIfNeed(selectSubreddit);
	}
	
	handleChange(e){
		const {actions} = this.props;
		actions.selectSubreddit(e);
	}
	
	render(){
		
		const {selectSubreddit, lastUpdate, isFetching, posts} = this.props;
		const picker = {value: selectSubreddit, options: ['reactjs', 'frontend'], onChange: this.handleChange.bind(this)}
		const isEmpty = posts.length === 0;
		
		return (
			<div>
				<h2 styleName="head title">{selectSubreddit}</h2>
				<Picker {...picker} />
				<p>
				{
					lastUpdate && 
					<span>lastUpdate: {new Date(lastUpdate).toLocaleTimeString()}</span>
				}
				{
					!isFetching && <button onClick={this.onRefresh.bind(this)}>点击刷新</button>
				}
				</p>
				{
					(isEmpty || isFetching) ? <h2 styleName="head title">Loading...</h2> : <Posts posts={posts} />
				}
			</div>
		)
	}
}

export default App;