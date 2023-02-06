var telephoneWords = function (digitString) {
  // var phoneDigitsToLetters = {
  //   0: ['0'],
  //   1: ['1'],
  //   2: ['A', 'B', 'C'],
  //   3: ['D', 'E', 'F'],
  //   4: ['G', 'H', 'I'],
  //   5: ['J', 'K', 'L'],
  //   6: ['M', 'N', 'O'],
  //   7: ['P', 'Q', 'R', 'S'],
  //   8: ['T', 'U', 'V'],
  //   9: ['W', 'X', 'Y', 'Z']
  // };
  var phoneDigitsToLetters = {
    0: '0',
    1: '1',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ'
  };


  const recurseWords = (digits, subWords) => {
    // Base Case:
    if (digits.length <= 1) {
      return phoneDigitsToLetters[digits[0]].split('');
    }

    var accWords = [];
    for (let char of phoneDigitsToLetters[digits[digits.length-1]]) {
      for (let word of recurseWords(digits.slice(0,digits.length-1), subWords)) {
        accWords.push(word + char);
      }
    }
    
    return accWords
  }

  return recurseWords(digitString, [''])
};

inputs = [
          '2086', 
          '1234', 
          '0195', 
          '0772', 
          '2744', 
          '7727', 
          '222', 
          '234', 
          '23', 
          '2'
        ];


strings = {};
for (let i of inputs) {
  strings[i] = telephoneWords(i);
  console.log(i, '->', strings[i]);
}



// Check if words are real english words
// var fs = require('fs');
// var dictionary = fs.readFileSync('/usr/share/dict/words').toString('utf-8');
// var wordList = dictionary.split('\n');

// words = {};
// for (let digitString in strings) {
//   words[digitString] = [];
//   for (gibberish in strings[digitString]) {
//     if (wordList.includes(gibberish)) {
//       words[digitString].push(gibberish);
//     }
//   }
// }
// console.log(words);
