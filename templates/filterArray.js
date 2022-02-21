const arr = [23, 54, 12, 90, 76, 9, 76, 44, 82, 40];

const filteredArray = arr.filter((value, index, arr) => {
  return value > 50 ? console.log(`${index} => ${value}`) : arr;
});

console.log(filteredArray);

const num = 30;

let smallerNums = arr.filter((number) => {
  return number < num;
});
console.log(smallerNums);

let largerNums = arr.filter((number) => {
  return number > num;
});
console.log(largerNums);
