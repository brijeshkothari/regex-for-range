var regex = require('./regex_for_numeric_range.js'),
	min = 1000,
	max = 1009;

console.log("Min - Max : ("+min+"-"+max+") : " , regex.regex_for_range(1000, 1009));