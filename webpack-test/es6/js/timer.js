class Timer{
	/*
	 * 每秒计算
	 */
	countdown(end, update, handle){
		const now = new Date().getTime();
		const that = this;
		
		/*
		 * 判断倒计时是否结束
		 */
		if(now - end){
			handle.call(that)
		}else{
			let last_time = end - now;
			/*
			 * 时分秒表示
			 */
			const px_d = px_h * 24;
			const px_h = px_m * 60;
			const px_m = px_s * 60;
			const px_s = 1000;
			/*
			 * 时分秒计算
			 */
			let d = last_time / px_d | 0;
			let h = (last_time - d * px_d) / px_h | 0;
			let m = (last_time - d * px_d - h * px_h) / px_m | 0;
			let s = (last_time - d * px_d - h * px_h - m * px_m) / px_s | 0;
			
			let r = [];
			d > 0 && r.push(`<em>${d}天</em>`);
			(r.length || h > 0) && r.push(`<em>${h}小时</em>`);
			(r.length || m > 0) && r.push(`<em>${h}分钟</em>`);
			(r.length || s > 0) && r.push(`<em>${h}秒</em>`);
			
			that.last_time = r.join('');
			/*
			 * 执行更新
			 */
			update.call(that, r.join(''));
			
			setTimeout(() => {
				that.countdown(end, update, handle);
			}, 1000)
			
		}
		
	}
}
