# regex-for-range
regex-for-range is npm library for getting instant regex for numeric range with same numeric length

Example : 

var regNum = require('regex_for_range'),
	min = 1234,
	max = 91234;

console.log(regNum.regexGen(min, max));	
// output : 123[4-9]|12[4-9][0-9]|1[3-9][0-9]{2}|[2-8][-9][0-9]{3}|90[0-9]{3}|91[0-1][0-9]{2}|912[0-2][0-9]|9123[0-4]|9[1-9][2-9][3-9] 


