var toFraction = function(number) {
  var sign = 1;
  if (number < 0) {
    sign = -1;
    number *= -1;
  }
  var num = number;
  var den = 1;
  while (num % 1 != 0) {
      num *= 10;
      den *= 10;
  }

  var numFactors = findFactors(num).sort((a,b)=>b-a);
  var denFactors = findFactors(den).sort((a,b)=>b-a);

  for (var factor of numFactors) {
    if (denFactors.includes(factor)) {
      num /= factor;
      den /= factor;
      break;
    }
  }

  return (sign * num) + '/' + den;
};

var findFactors = function(num) {
  var max = num;
  var factors = [];
  for (let t = 1; t < max; t++) {
    if (num % t === 0) {
      max = num / t;
      factors.push(t);
      factors.push(max);
    }
  }
  return factors;
}



inputs = [1.0, .25, .88, 1.75, 0.0, 82, -1.75];

for (i of inputs) {
  console.log(i, '->', toFraction(i));
}