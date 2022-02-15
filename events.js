const button = document.querySelector("button");
const alertEvent = () => {
  alert("Button was clicked!");
};
const consoleEvent = () => {
  console.log("Button was clicked!");
};
button.addEventListener("click", alertEvent);
button.addEventListener("click", consoleEvent);
