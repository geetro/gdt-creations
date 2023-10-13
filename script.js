const h2 = document.createElement("h2");
h2.textContent = "Southern Illinois Sequoia";

document.querySelector("body").appendChild(h2);


const myImg = document.getElementById("myImg");
const myButton = document.getElementById("myButton");

function clickAlert() {
if (myImg.src.endsWith("./images/2_yr_sequoia.jpg")) {
    myImg.src = "./images/dormant_sequoia.jpg";
} else {
    myImg.src = "./images/2_yr_sequoia.jpg";
}
}
myButton.addEventListener('click', clickAlert);


/*
// JavaScript code
const myImg = document.getElementById("myImg");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
  if (myImg.src.endsWith("image1.jpg")) {
    myImg.src = "image2.jpg";
  } else {
    myImg.src = "image1.jpg";
  }
});*/