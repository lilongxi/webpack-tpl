import styles from 'css/index.css';

@ReactCssModules(styles, {allowMultiple:true})
class Tpl extends React.Component {
  render() {
    return (
      <div styleName="head title">
			webpack master Hello
      </div>
    );
  }
}

export default Tpl;
