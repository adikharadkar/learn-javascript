class Person {
  name;
  age;
  dob;
  address;

  constructor(name, age, dob, address) {
    this.name = name;
    this.age = age;
    this.dob = dob;
    this.address = address;
  }
}

const people = [
  new Person("Aditya", 21, "27-June-2000", "Aurangabad"),
  new Person("Prasad", 21, "24-July-2000", "Aurangabad"),
];

console.log(people);
