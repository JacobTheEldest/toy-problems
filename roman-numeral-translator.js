var translateRomanNumeral = function (romanNumeral) {
  if (typeof(romanNumeral) != 'string') {
    return null;
  }

  var digits = Array.from(romanNumeral);
  var total = 0;
  var DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  for (let i = 0; i < digits.length; i++) {
    digits[i] = DIGIT_VALUES[digits[i]];
  }

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] < digits[i+1]) {
      total -= digits[i];
    }
    else {
      total += digits[i];
    }
  }

  return total;
};


inputs = ['LX', 'IV', 'XIX'];

for (i of inputs) {
  console.log(i, '->', translateRomanNumeral(i));
}