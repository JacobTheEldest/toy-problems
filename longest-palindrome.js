var longestPalindrome = function (string) {
  let palindrome = '';
  
  for (let i = 0; i < string.length; i++) {
    let start = i;
    let end = i;
    if ( !(string[start-1] === string[end+1])
            && string[i] === string[end+1]) {
      end++;
    }
    while ((start-1 >= 0 && end+1 < string.length)
            && string[start-1] === string[end+1]) {
      start--;
      end++;
    }
    if (end-start + 1 > palindrome.length) {
      palindrome = string.slice(start, end + 1);
    }
  }

  return palindrome;
};


inputs = [
  'My dad is a racecar athlete',
  'i toot 1 horn', 
  'a crosssection of arm'
];


strings = {};
for (let i of inputs) {
strings[i] = longestPalindrome(i);
console.log(i, '->', strings[i]);
}