

class Interface{
	
	/*
	 * 遗漏数据
	 * 当前的期号
	 */
	getOmit(issue){
		let that = this;
		return new Promise((resolve, reject) => {
			$.ajax({
				type:"get",
				url:"/get/omit",
				async:true,
				dataType:'json',
				data: {
					issue: issue
				},
				success: function(data){
					/*
					 * 存储当前数据
					 */
					that.setOmit(data);
					resolve.call(that, data);
				},
				error: function(e){
					reject.call(e)
				}
			});
		})
	}
	
	/*
	 * 获取开奖号码
	 */
	
	getOpenCode(issue){
		let that = this;
		return new Promise((resolve, reject) => {
			
		})
	}
	
}
