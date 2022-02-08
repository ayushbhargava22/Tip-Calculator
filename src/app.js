// selecting elements
const billAmount = document.querySelector(".bill-amount");
const tipAmount = document.querySelector(".tip-selection");
const peopleValue = document.querySelector(".person-input");
const submitBtn = document.querySelector(".submit-btn");
const AmountPerPerson = document.querySelector(".amount-value-person");
const tipPerPerson = document.querySelector(".tip-value-person");
const resetBtn = document.querySelector(".reset-btn");

submitBtn.addEventListener("click", calculateResult);

let data;
const tip = (e) => {
  data = e.target.textContent;
  return data;
};
tipAmount.addEventListener("click", tip);

function calculateResult(e) {
  e.preventDefault();
  const billAm = parseInt(billAmount.value);
  const tipAm = parseInt(data);
  const people = parseInt(peopleValue.value);

  let tipTotal = (billAm * tipAm) / 100;
  let tipPerPersonValue = tipTotal / people;
  let totalAmount = billAm + tipTotal;
  let AmountPerPersonValue = totalAmount / people;

  AmountPerPerson.innerHTML = `$${tipPerPersonValue.toFixed(2)}`;
  tipPerPerson.innerHTML = `$${AmountPerPersonValue.toFixed(2)}`;
}

//reset btn
resetBtn.addEventListener("click", reset);
function reset() {
  billAmount.value = "";
  peopleValue.value = "1";
  AmountPerPerson.innerHTML = "$0.00";
  tipPerPerson.innerHTML = "$0.00";
}
