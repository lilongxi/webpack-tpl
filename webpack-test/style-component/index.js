import styled, {injectGlobal, keyframes} from 'styled-components';
import csss from './csss.css';

@ReactCssModules(csss, {allowMultiple: true})
class StyleComponent extends React.Component{

	render(){
		
		return (
			<ContactMale gender={'female'}>
				<ContactName styleName="title">
					<strong> xxx </strong>
				</ContactName>
				<PasswordInput name="pass1" size="1em"/>
			</ContactMale>
		)
	}

}

/*
 * 注册全局样式
 */

injectGlobal`
	body{
		padding:0;
		margin: 0;
		line-height: 2em;
	}
`

/*
 * 动画
 */

const spin = keyframes`
	from {transform: rotate(0deg);}
	to {transforn: rotate(180deg);}
`

const ContactName = styled.h2`
	font-size: 20px;
	margin-top: 0;
	strong {
		font-weight: 600;
	}
`;

const Contact = styled.div`
	width:300px;
	height: 75px;
	line-height:75px;
	text-algin: center;
	border: 1px solid #dedede;
	color: white;
	background-color: ${props => (props.gender === 'female' && props.theme.primary)};
`

const ContactMale = Contact.extend`
	padding-left:30px;
	animation: ${spin} 1s linear infinite;
`

const PasswordInput = styled.input.attrs({
	type: 'password',
	padding: props => props.size || '0.5em',
	margin: props => props.size || '0.5em'
})`
	border:2px solid #dedede;
	color:#222;
	border-radius:5px;
	margin: ${props => props.margin};
	padding: ${props => props.padding};
`

export default StyleComponent;