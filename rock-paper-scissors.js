var rockPaperScissors = (rounds) => {
  var options = ['rock', 'paper', 'scissors'];
  const possibilities = [];

  const recurseRounds = (throws) => {
    if (throws.length === rounds) {
      possibilities.push(throws);
      return;
    }

    for (let option of options) {
      const nextThrow = throws.concat([option]);
      recurseRounds(nextThrow);
    }

  }

  recurseRounds([]);

  return possibilities
};



inputs = [0, 1, 2, 3, 6, 12, 22, -1, -10];

for (let i of inputs) {
  console.log(i, '->', rockPaperScissors(i));
}