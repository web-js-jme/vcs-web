//TITLES + Labels
let headerText = document.getElementById("title");
headerText.innerHTML = "Book Flight Tickets";

headerText.style.color = "white";

//PLACEHOLDER

let priceInput = document.getElementById("priceInput");
let passengersInput = document.getElementById("passengersInput");
let luggagePrice = document.getElementById("luggauge-price");
let lugguageCount = document.getElementById(
  "luggaage-count-per-person"
);

priceInput.placeholder = "Price per flight";
passengersInput.placeholder = "Passengers count";
luggagePrice.placeholder = "Luggage price";
lugguageCount.placeholder = "Luggage count";

//Value count:
let input = document.getElementById("value");
let sum = 0;

// input.valueLabel = sum;
function calculatePrice() {
  console.log(priceInput.value, passengersInput.value, luggagePrice.value, lugguageCount.value)
  sum = priceInput.value * passengersInput.value + luggagePrice.value * lugguageCount.value;
  input.textContent = sum;
}
