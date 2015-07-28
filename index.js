var regex = require('./regex_for_numeric_range.js'),
	min = 1000,
	max = 1009;

exports.regexGen = function(min_, max_){
	console.log("Min - Max : ("+min+"-"+max+") : " , regex.regex_for_range(1000, 1009));
	return regex.regex_for_range(1000, 1009);
}


var regNum = require('regex-range'),
	min = 1500,
	max = 2500;

console.log(regNum.regexGen(min, max));	
