import React, {Component} from 'react';
import ReactDOM, {} from 'react-dom';
import {expect} from "chai";
import ReactTest from '../../src/component/react';

import {
	Simulate,
	renderIntoDocument,
	isCompositeComponentWithType,
	scryRenderedDOMComponentsWithTag,
	scryRenderedDOMComponentsWithClass,
	findRenderedDOMComponentWithTag
} from "react-addons-test-utils";
import ShallowRenderer from 'react-test-renderer/shallow';

//浅渲染函数
function shallowRender(Component){
	const renderer = new ShallowRenderer();
  	renderer.render(<Component/>);
  	return renderer.getRenderOutput();
}

describe('测试react组件是否正常渲染', () => {
	
	it('App\'s title should be Todos', function () {
	    const app = shallowRender(ReactTest);
	    expect(app.type).to.equal('div');
	    expect(app.props.children.type).to.equal('h1');
	 });
	
	it('render react 01', () => {
		
		const component = renderIntoDocument(
			<ReactTest />
		)
		
		const $h = scryRenderedDOMComponentsWithTag(component, "h1");
		expect( $h.length ).to.be.equal(1);
		
		const $hNode = findRenderedDOMComponentWithTag(component,"h1");
		expect( $hNode ).to.be.ok;
		
		const $hClass = scryRenderedDOMComponentsWithClass(component, "testH1");
		expect( $hClass.length ).to.be.equal(1);
		
	})
})
