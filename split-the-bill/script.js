let main = document.querySelector("main");
let billInput = document.querySelector("#bill");
let tipInput = document.querySelector("#tipInput");
let split = document.querySelector("#split");
let tipPercent = document.querySelector(".tipPercent");
let tipValue = document.querySelector("#tipValue");
let total = document.querySelector("#total");
let splitValue = document.querySelector("#splitValue");
let billEach = document.querySelector("#billEach");
let tipEach = document.querySelector("#tipEach");

function format(itemValue) {
  itemValue = Math.ceil(itemValue * 100) / 100;
  itemValue = itemValue.toFixed(2);
  return itemValue + "€";
}

function formatSplit(itemValue) {
  if (itemValue === "1") return itemValue + " person";
  return itemValue + " people";
}

main.oninput = function update() {
  let bill = Number(billInput.value);
  let tipsTotal = bill * (tipInput.value / 100);
  let newTipEach = tipsTotal / split.value;
  let newBillEach = (bill + tipsTotal) / split.value;

  tipPercent.innerHTML = tipInput.value + "%";
  tipValue.innerHTML = format(tipsTotal);
  total.innerHTML = format(bill + tipsTotal);
  splitValue.innerHTML = formatSplit(split.value);
  billEach.innerHTML = format(newBillEach);
  tipEach.innerHTML = format(newTipEach);
};
