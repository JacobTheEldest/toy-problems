Array.prototype.isSubsetOf = function(arr) {
  // console.log('sub:  ', arr);
  // console.log('super:', this);
  for (let i of this) {
    if (! arr.includes(i)) {
      return false
    }
  }
  return true;
};

const testIsSubsetOf = Array.prototype.isSubsetOf;


inputs = [['a', 'd', 'x'],
          ['a', 'f', 'f'],
          ['e', 'ed', 'j']];

for (i of inputs) {
  console.log(i, '->', i.isSubsetOf(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']));
}