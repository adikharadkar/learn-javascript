const arr = [23, 54, 12, 90, 76, 9, 76, 44, 82, 40];

const sum = arr.reduce((prevValue, curValue) => {
  return prevValue + curValue;
});

console.log(sum);
