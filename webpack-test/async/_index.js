import fetch from 'isomorphic-fetch';

const sleep = (timeout = 2000) => new Promise(reslove => {
	setTimeout(() => {
		reslove()
	}, timeout)
})

async function getData(id){
	const url = `http://www.subreddit.com/r/${id}.json`;
	const response = await fetch(url);
	if(response.status !== 200){
		throw new Error(response.statusText)
	}
	return await response.json();
}

//错误处理
const showInfo = async() => {
	try{
		//串行处理await.等待第一个请求结束后发起第二个请求
		console.time('showInfo');
//		const reactjs = await getData('reactjs');
//		const frontend = await getData('frontend');

		//并行处理await
		
//		const reactjsPromise = getData('reactjs');
//		const frontendPromise = getData('frontend');
//		const reactjs = await reactjsPromise;
//		const frontend = await frontendPromise;

		//promise.all
//		const [reactjs, frontend] = await Promise.all([
//			getData('reactjs'),
//			getData('frontend')
//		])

		//循环处理await
		const names = ['reactjs', 'frontend'];
//		for(let name of names){
//			const data = await getData(name);
//			console.log(data)
//		}
		//
		const promises = names.map(x => getData(x));
		
		for (const promise of promises) {
			const data = await promise;
			console.log(data)
		}
		
		
//		console.log(reactjs);
//		console.log(frontend);
		
		console.timeEnd('showInfo');
		
	}catch(e){
		console.log(e)
	}
	
}

showInfo()

//promise.thenable
/*
 * async隐式调用，会把不是promise的对象转化成一个thenable对象
 */
async function thenable(){
//	const data = await 999;
	await sleep(3000)
	const data = await Promise.resolve(999)
	console.log(data)
}
//thenable()