var regex = require('./regex-for-range.js');

exports.regexGen = function(min, max){
	return regex(min, max);
}