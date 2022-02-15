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
