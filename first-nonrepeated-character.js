var firstNonRepeatedCharacter = function (string) {
  if (string === '') {return null;}

  var firstChars = [];
  var secondChars = [];

  for (let char of string) {
    if (firstChars.includes(char)) {
      secondChars.push(char);
    } else {
      firstChars.push(char);
    }
  }

  for (let char of firstChars) {
    if (! secondChars.includes(char)) {
      return char;
    }
  }
  return null;
};


inputs = ['ABA', 'AACBDB', 'XIX'];

for (i of inputs) {
  console.log(i, '->', firstNonRepeatedCharacter(i));
}