var regex = require('./regex_for_numeric_range.js');

exports.regexGen = function(min, max){
	return regex.regex_for_range(min, max);
}