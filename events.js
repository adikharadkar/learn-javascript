const button = document.querySelector("button");
const body = document.querySelector("body");
const alertEvent = () => {
  alert("Button was clicked!");
};
const consoleEvent = () => {
  console.log("Button was clicked!");
};
button.addEventListener("click", alertEvent);
button.addEventListener("click", consoleEvent);
button.addEventListener("mouseenter", () => {
  console.log("OnMouseEnter");
  body.style = "background-color:red";
});
button.addEventListener("mouseleave", () => {
  body.style = "background-color: yellow";
});

const form = document.querySelector("form");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (firstName.value == "") {
    console.log("Please enter first name");
  }
  if (lastName.value == "") {
    console.log("Please enter last name");
  }
});
