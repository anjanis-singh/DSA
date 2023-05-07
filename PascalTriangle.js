const PascalTriangle = (numsRow) => {
  let result = [];
  for (let i = 0; i < numsRow; i++) {
    let temp = new Array(i+1);
    temp[0] = 1;
    temp[i] = 1;
    for (let j = 1; j < i; j++) {
      temp[j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result.push(temp);
  }
  return result;
}

console.log(PascalTriangle(5));
