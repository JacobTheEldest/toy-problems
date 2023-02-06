var commonCharacters = function (string1, ...targets) {
  let common = '';
  
  for (let char of string1) {
    let skip = false;
    if (char === ' ' || common.includes(char)) {
        continue;
    }
    for (let target of targets) {
       if (! target.includes(char)) {
        skip = true;
        break;
      }
    }
    if (!skip) {
      common += char;
    }

  }
    
  return common;      
}