const form = document.querySelector("form");
const entry = document.querySelector("#entry");
const totalToShow = document.querySelector("#total");
const progressTotal = document.querySelector("#progressTotal");
const averageToShow = document.querySelector("#average");
const highToShow = document.querySelector("#high");
const progressCircle = document.querySelector("#progressCircle");

let entries = [];
let goal = 25;
const entriesWrapper = document.querySelector("#entries");
document.querySelector("#target").innerText = goal;

function addNewEntry(newEntry) {
  entriesWrapper.removeChild(entriesWrapper.firstElementChild);
  let listItem = document.createElement("li");
  let listValue = document.createTextNode(newEntry);
  listItem.appendChild(listValue);
  entriesWrapper.appendChild(listItem);
}

function reducer(total, currentValue) {
  return total + currentValue;
}

function calculateTotal() {
  const totalValue = entries.reduce(reducer).toFixed(1);
  totalToShow.innerText = totalValue;
  progressTotal.innerText = totalValue;
}

function calculateAverage() {
  const average = (entries.reduce(reducer) / entries.length).toFixed(1);
  averageToShow.innerText = average;
}

function weekHigh() {
  const high = Math.max(...entries);
  highToShow.innerText = high;
}

function calculateGoal() {
  const totalValue = entries.reduce(reducer).toFixed(1);
  const completed = totalValue / (goal / 100);
  if (completed > 100) completed === 100;
  progressCircle.style.background = `conic-gradient(rgb(82, 6, 126) ${completed}%, rgb(230,225,225) ${completed}% 100% )`;
}

form.onsubmit = function handleSubmit(event) {
  event.preventDefault();
  let entryValue = Number(entry.value);
  if (!entryValue) return;
  form.reset();
  entries.push(entryValue);
  addNewEntry(entryValue);
  calculateTotal();
  calculateAverage();
  weekHigh();
  calculateGoal();
};

console.log(entries);
