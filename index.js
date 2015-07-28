var regex = require('./regex_for_numeric_range.js');

exports.regexGen = function(min_, max_){
	return regex.regex_for_range(min_, max_);
}
