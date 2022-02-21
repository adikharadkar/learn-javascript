const myName = "ADITYA";
const lastName = "KHARADKAR";
let array1 = [];
let array2 = [];
for (let i = 0; i < myName.length; i++) {
  array1.push(myName[i]);
}
for (let i = 0; i < lastName.length; i++) {
  array2.push(lastName[i]);
}
let array3 = array1.concat(array2);
console.log(array3);
