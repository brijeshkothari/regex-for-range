var regex = require('./regex_for_numeric_range.js'),
	min = 1000,
	max = 1009;

exports.regexGen = function(min_, max_){
	if(!min_ && !max_){
		console.log("Min - Max : ("+min+"-"+max+") : " , regex.regex_for_range(1000, 1009));
	}
	return regex.regex_for_range(min_, max_);
}
