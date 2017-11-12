
/*
 * @jsx diff
 */

//返回react在内存中的数据形式
function diff(type, props, ...child){
	return {type, props, child}
}

const list = (
	<ul class="list">
		<li>111</li>
		<li>111</li>
	</ul>
)

const newList = (
	<ul class="list">
		<li>111</li>
		<li>
			<p>222</p>
			<div>333</div>
		</li>
	</ul>
)

//将jsx的dom节点转换成新的节点插入到页面
function createElement(node){
	//文本节点插入
	if(typeof node === 'string'){
		return document.createTextNode(node)
	}
	//如果是jsx节点形式
	const $el = document.createElement(node.type);
	//循环创建子节点
	node.child.map(createElement).forEach($el.appendChild.bind($el));
	return $el
}


//子节点递归计算
function updateElement($parent, newNode, oldNode, index = 0){
	//root节点和当前的虚拟节点作比较
	//新老节点作比较
	//index做定位
	
	if(!oldNode){
		//首次渲染，如果没有老节点，直接添加新节点
		$parent.appendChild(createElement(newNode))
	}else if(!newNode){
		//更新时候如果新节点为空,remove根节点第一个元素节点
		$parent.removeChild($parent.childNodes[index])
	}else if(changed(oldNode, newNode)){
		//根节点更新，新老根节点先做比较。如果比较结果为true这证明节点有变更
		//创建新节点然后替换掉老节点
		//通过index定位到老节点
		$parent.replaceChild(
			createElement(newNode),
			$parent.childNodes[index]
		);
	}else if(newNode.type){

		//根节点下某一个子节点发生了改变。递归计算子节点。
		
		/*$parent.childNodes[index] 获取改变的子节点的父亲节点
		 * newNode.child[i] 当前的新节点 
		 * oldNode.child[i] 当前的老节点
		 * i 当前的索引
		 */
		
		const newLength = newNode.child.length;
		const oldLength = oldNode.child.length;
		
		for (let i = 0; i < newLength || i < oldLength; i++) {
			updateElement(
				$parent.childNodes[index],
				newNode.child[i],
				oldNode.child[i],
				i
			)
		}
		
	}
	
}

//diff
function changed(nodeOld, nodeNew){
	//判断类型是否还相等
	//如果nodeOld是一个文本节点，直接判断nodeOld和nodeNew是否相等
	//判断根节点类型
	
	return typeof nodeOld !== typeof nodeNew || 
		   typeof nodeOld === 'string' && nodeOld !== nodeNew ||
		   nodeOld.type !== nodeNew.type
}


const $root = document.getElementById('root');
//$root.appendChild(createElement(list))
updateElement($root, list)

const $reload = document.getElementById('btn');
$reload.addEventListener('click', () => {
	updateElement($root, newList, list)
})