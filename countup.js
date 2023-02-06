var countUp = (count) => {
  if (count <= 0) {
      return [0];
  } else {
    let arr = countUp(count-1);
    arr.push(count);
    return arr;
  }
};



inputs = [0, 1, 2, 3, 6, 12, 22, -1, -10];

for (i of inputs) {
  console.log(i, '->', countUp(i));
}