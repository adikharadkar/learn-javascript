// console.table() is used to display data in form of table.
// The method takes 1 mandatory argument i.e. "data", which must be an array or an object.
// Each element in the array becomes a row in the table.
// The first column of a table is labelled as an index.
// For objects, index will be the property name and for array, index are the actual index of array elements.

const arr = ["Audi", "Mercedes", "BMW", "Lamborghini", "Ferrari", "Tesla"];
console.table(arr);

const obj = {
  name: "Aditya",
  age: 21,
};
console.table(obj);
