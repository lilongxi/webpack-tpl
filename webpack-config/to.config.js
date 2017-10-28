
module.exports = function toFirstUpper(upper){
	let o = {};
	function capitalize(string){
        var words =string.split("-");
        for(var i=0;i<words.length;i++)
		{
			words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1);
		}
		return words.join("");
 	}
	upper.forEach((item) => {
		o[capitalize(item)] = item
	});
	return o;
}
