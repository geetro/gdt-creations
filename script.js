const h2 = document.createElement("h2");
h2.textContent = "Southern Illinois Sequoia";

document.querySelector("body").appendChild(h2);


const myImg = document.getElementById('myImg');
const myButton = document.getElementById('myButton');

document.querySelector("body").appendChild(myImg);
document.querySelector("body").appendChild(myButton);

function clickAlert() {  
  if (myImg.src.endsWith("2_yr_sequoia.jpg")) {
      myImg.src = "./images/dormant_sequoia.jpg";
      alert('This is a 2 year old sequoia!');
  } else {
      myImg.src = "./images/2_yr_sequoia.jpg";
      alert('This is a domant 2 year old sequoia!');
  }
}
myButton.addEventListener('click', clickAlert);