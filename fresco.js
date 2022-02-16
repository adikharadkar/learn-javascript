let myParagraph = document.createElement("p");
let myText = document.createTextNode("Text added by JS");
let body = document.querySelector("body");
myParagraph.appendChild(myText);
body.appendChild(myParagraph);
