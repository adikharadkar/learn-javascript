let myParagraph = document.createElement("p");
let myText = document.createTextNode("Text added by JS");
let body = document.querySelector("body");
myParagraph.appendChild(myText);
body.appendChild(myParagraph);

// END

// START
const str1 = "This is";
const str2 = "Javascript";
const str3 = str1 + str2;
console.log(str3.length);
// END

// START
const month = "January";
const year = 2016;
const date = 1;
const whole = `0${date}-${month}-${year}`;
console.log(whole);
