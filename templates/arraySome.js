let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// FALSE
console.log(
  arr.some((num) => {
    return num < 10;
  })
);

// TRUE
console.log(
  arr.some((num) => {
    return num < 20;
  })
);
