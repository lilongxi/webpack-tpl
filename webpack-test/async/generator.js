
/*
 * Generator
 */

//function * helloWorldGenerator(){
//	
//	yield 'lilongxi';
//	yield 'word';
//	return 'ending';
//	
//}
//
//const hw = helloWorldGenerator();

/*
 * 数组展开
 */

var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function * (a){
	
	var len = a.length,
		i;
	
	for (i = 0; i < len; i++) {
		
		var item = a[i];
		
		if(typeof item !== 'number'){
			
			yield * flat(item)
			
		}else{
			yield item;
			
		}
		
	}
	
}

/*
 * iterators
 */

function iterators(item){
	let i = 0;
	return {
		next(){
			let done = (i >= item.length);
			let value = !done ? item[i++] : undefined;
			return {value, done}
		}
	}
}

let iter = iterators(['hello', 'lilongxi']);

//console.log(iter.next())
//console.log(iter.next())
//console.log(iter.next())

/*
 * tag template
 */
{
	let name = 'lilongxi',
		age = 100;
	
	let str = template`我的名字${name}, 年龄${age}`;
	
	function template(strings, ...values){
		let result = '';
		for (var i = 0; i < values.length; i++) {
			result += strings[i];
			result += values[i];
		}
		result += strings[strings.length - 1];
		return result;
	}
	
//	console.log(str)
	
}

{
	
}

