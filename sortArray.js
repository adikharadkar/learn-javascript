const arr = [
  "Golang",
  "Python",
  "Javascript",
  "Node",
  "React",
  "MongoDB",
  "Express",
  "HTML",
  "CSS",
];
const sortedArray = arr.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

console.log(sortedArray);
