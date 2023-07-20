let btn = document.querySelector(".btn");
let thanks = document.querySelector("#thanks");
let voting = document.querySelector("#voting");
let values = document.querySelectorAll(".value");
let rating = document.querySelector("#rating");

btn.addEventListener("click", clickedBtn);

values.forEach(value => {
  value.addEventListener("click", clickedValue);
});

function clickedBtn() {
  voting.style.display = "none";
  thanks.style.display = "flex";
}

function clickedValue(event) {
  let rateValue = event.target.innerHTML;
  rating.innerHTML = rateValue;
}
