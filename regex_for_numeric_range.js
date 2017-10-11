/*
# coding=utf8 positive_subpatterns only not includes negative patterns
#  Author : Brijesh Kothari
#  Reference taken from https://github.com/dimka665/range-regex/blob/master/range_regex/range_regex.py
#  Split range to ranges that has its unique pattern.
*/

// Formating string into proper regex brackets fromat
String.prototype.format = function() {
  var i = 0, args = arguments;
  return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
  });
};

function uniqueFilter(value, index, self) { 
    return self.indexOf(value) === index;
}

// Main function
exports.regex_for_range = function(min_, max_){
    positive_subpatterns = [];
    negative_subpatterns = [];
    if (max_ >= 0){
        positive_subpatterns = split_to_patterns(min_, max_);
        //console.log("positive_subpatterns : ", positive_subpatterns);
    }
    var regex = "";
    positive_subpatterns.forEach(function(val){
        regex+=val+"|";
    });
    regex = regex.substring(0, regex.length - 1);
    //console.log("regex : ", regex);
    return regex;
}

// Splitting into multiple patterns
function split_to_patterns(min_, max_){
    subpatterns = [];

    start = min_;
    var tmp = [];
    tmp = split_to_ranges(min_, max_);
	tmp = tmp.filter(uniqueFilter);
    for(var stop in tmp){
        subpatterns.push(range_to_pattern(start, tmp[stop]));
        start = tmp[stop] + 1;
    }
    return subpatterns;
}

// Splitting into multiple ranges
function split_to_ranges(min_, max_){
    stops = [];
    stops.push(parseInt(max_));
    nines_count = 1;
    var stop = fill_by_nines(min_, nines_count);
    var old_min = min_;
    while(min_ <= stop && stop < max_){
        stops.push(parseInt(stop));
            min_ = stop;
        nines_count += 1;
        stop = fill_by_nines(min_, nines_count);
    }
    min_ = old_min;
    zeros_count = 1;
    stop = fill_by_zeros(max_ + 1, zeros_count) - 1;
    while(min_ < stop && stop <= max_){
        if(stops.indexOf(stop) == -1){
            stops.push(parseInt(stop));
        }

        zeros_count += 1;
        stop = fill_by_zeros(max_ + 1, zeros_count) - 1;
    }
    stops.sort();
    return stops;
}

// Generate digits from right to left 9's
function fill_by_nines(integer, nines_count){
    var str = integer.toString();
    var index = parseInt(str.length) - parseInt(nines_count);
    var character = "9";
    return str.substr(0, index) + character + str.substr(index+character.length);
}

// Generate digits from left to right with 0's
function fill_by_zeros(integer, zeros_count){
    return integer - (integer % (Math.pow(10,zeros_count)))
}

// creating regex according to pattenrs it belongs to
function range_to_pattern(start, stop){
    pattern = '';
    any_digit_count = 0;
    var i,j = 0;
    for(i = 0; i < start.toString().length, j < stop.toString().length; i++, j++){
        start_digit = start.toString().charAt(i);
        stop_digit = stop.toString().charAt(j);
        if (start_digit == stop_digit){
            pattern += start_digit
        } else if (start_digit != '0' || stop_digit != '9'){
            pattern += '[{}-{}]'.format(start_digit, stop_digit)
        } else {
            any_digit_count += 1;
        }
    }
    if (any_digit_count){
        pattern += '[0-9]';
    }
    if (any_digit_count > 1){
        pattern += '{{}}'.format(any_digit_count);
    }
    return pattern;
}

//Examples  (minimum number, maximum numer)
// regex_for_range(111111, 456789);
// regex_for_range(1000, 1009);
// regex_for_range(1000, 1010);
// regex_for_range(1000, 1100);
// regex_for_range(1000, 1050);
// regex_for_range(1000, 1150);
// regex_for_range(1000, 1037);
// regex_for_range(1234, 5678);
// regex_for_range(2065, 2085);
// regex_for_range(111111, 999999);
// regex_for_range(42569,46589);
// regex_for_range(123456,123458);
// regex_for_range(111111, 999999);
// regex_for_range(123412, 902313);
// regex_for_range(3493, 5765);
