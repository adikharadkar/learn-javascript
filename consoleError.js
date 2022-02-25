// The console.error() method outputs an error message to the console.
// The error() method of the console object is used to output the error in the console.
// You can output error message or some object using console.error().

const num = 23;
const str = "23";

if (num !== str) {
  console.error(`${num} is not equal to ${str}`);
} else {
  console.log(`${num} is equal to ${str}`);
}
