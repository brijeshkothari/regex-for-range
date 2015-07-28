var regex = require('./regex-for-range.js');

exports.printMsg = function() {
  console.log("This is a npm library for regex generator for numeric range values");
}

exports.regexGen = function(min, max){
	return regex(min, max);
}