
import fetch from 'isomorphic-fetch';

//一个简单的async函数
//async function getData(id){
//	const url = `http://www.subreddit.com/r/${id}.json`;
//	const response = await fetch(url);
//	return await response.json();
//}
//作为一个promise使用
//getData('reactjs').then(res => {
//	console.log(res)
//})

//函数表达式
const getData = async(id) => {
	const url = `http://www.subreddit.com/r/${id}.json`;
	const response = await fetch(url);
	return await response.json();
}

class APIClient{
	async getData(id){
		const url = `http://www.subreddit.com/r/${id}.json`;
		const response = await fetch(url);
		return await response.json();
	}
}

(async () => {
	const client = new APIClient();
	const data = await client.getData('reactjs');
//	const data = await getData('reactjs');
	console.log(data)
})()

//import jsdom from "jsdom"
//import chai from 'chai';
//import chaiImmutable from 'chai-immutable';

//if (typeof document === 'undefined') {
//	const { JSDOM } = jsdom;
//	const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
//	global.window = dom.window;
//	global.document = dom.window.document;
//	global.navigator = dom.window.navigator;
//}