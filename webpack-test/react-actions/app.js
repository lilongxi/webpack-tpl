import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ActionCreators from './action';
import {userFetchRequested} from './saga';


const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators({...ActionCreators, userFetchRequested}, dispatch),
	}
}

@connect(
	mapStateToProps,
	mapDispatchToProps
)
class ReactAction extends React.PureComponent{
	constructor(props){
		super(props);
		this.invalidate = this.invalidate.bind(this);
	}	
	
	componentWillMount(){
		
	}
	
	componentDidMount(){
		const {selectSubreddit, actions} = this.props;
		actions.fetchPostsIfNeed(selectSubreddit);
	}

	invalidate(){
		const {selectSubreddit, actions} = this.props;
		actions.invalidateSubreddit(selectSubreddit);
		actions.fetchPostsIfNeed(selectSubreddit);
	}
	
	selected(subreddit){
		this.props.actions.shoudSelectSubreddit(subreddit)
		this.props.actions.fetchPostsIfNeed(subreddit)
	}
	
	saga(){
		this.props.actions.userFetchRequested('lilongxi');
	}
	
	render(){
		return (
			<div>
				<h2>{`这是一个react-action和${this.props.selectSubreddit}结合的🌰`}</h2>	
				<button onClick = {this.invalidate}>刷新</button>
				<button onClick = {this.selected.bind(this, 'reactjs')}>reactjs</button>
				<button onClick = {this.selected.bind(this, 'frontend')}>frontend</button>
				<button onClick = {this.saga.bind(this)}>saga</button>
			</div>
		)
	}
}

export default ReactAction;