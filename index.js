var regex = require('./regex_for_numeric_range.js');

module.exports = function(min, max){
        console.log(regex.regex_for_range(min, max));
	return regex.regex_for_range(min, max);
}
