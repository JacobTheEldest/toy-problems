function reverseInteger(number) {
  var ans = 0;
  console.log('start', number);
  while (number > 9) {
      ans = (ans*10) + number%10;
      number = Math.trunc(number/10);
      console.log(number);
  }
  ans = (ans*10) + number%10;
  return ans;
}

inputs = [0, 10, 100, 999, 103, 328];

for (i of inputs) {
  console.log('ans', reverseInteger(i));
}