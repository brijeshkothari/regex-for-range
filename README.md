# regex-for-range
regex-for-range is npm library for getting instant regex for numeric value range with same numeric length i.e. min & max values having same no. of digits

Example : 

var regNum = require('regex_for_range'),
	min = 1234,
	max = 9879;

console.log(regNum.regexGen(min, max));	
// output shows generated regex

