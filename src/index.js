const smallNum = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teenNum = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const bigNum = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


module.exports = function toReadable (number) {
  if(number[1] == null && number[0] === 0) return 'zero';
  else if(number < 10 && number > 0) return smallNum[number];
  else if(number >= 10 && number < 20) return teenNum[number - 10];
  else if(number >= 20 && number < 100) return getBigNum(number);
  else if(number >= 100 && number < 1000) return getHundreds(number);
  else return 'zero';
}

function getBigNum(number) {
number = number.toString().split('');
	if(number[1] == 0) return bigNum[number[0]];
  else return (bigNum[number[0]] + ' ' + smallNum[number[1]]);
}


function getHundreds(number) {
    number = number.toString().split('');

    // 1 1 0
    if(number[1] == 1) return smallNum[number[0]] + ' hundred ' + teenNum[number[2]];
    else if(number[2] == 0 && number[1] == 0) return smallNum[number[0]] + ' hundred';
    else if(number[1] !== 0 && number[2] == 0) return smallNum[number[0]] + ' hundred ' + bigNum[number[1]];
    else if(number[2] !== 0 && number[1] == 0) return smallNum[number[0]] + ' hundred ' + smallNum[number[2]];
    else if(number[1] !== 0 && number[2] !== 0) return smallNum[number[0]] + ' hundred ' + bigNum[number[1]] + ' ' + smallNum[number[2]];
    else if(number[1] !== 0 && number[2] == 0) return smallNum[number[0]] + ' hundred' + bigNum[number[1]];
}

