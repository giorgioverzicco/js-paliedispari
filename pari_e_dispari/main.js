/* ===============================
  FUNCTIONS
=============================== */

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function isEven(n) {
  return n % 2 === 0 ? true : false;
}

function hasUserChoosenEven(userChoice) {
  return userChoice.toLowerCase() === "pari";
}

/* ===============================
  MAIN
=============================== */

let userChoice;
while (true) {
  if (userChoice && (userChoice.toLowerCase() === "pari" || userChoice.toLowerCase() === "dispari")) break;
  userChoice = prompt("Pari o Dispari?");
}

let userNumber;
do {
  userNumber = Number(prompt("Inserisci un numero tra 1 e 5:"));
} while (isNaN(userNumber) || userNumber < 1 || userNumber > 5);

const cpuNumber = getRandomNumber(1, 5);
const sum = userNumber + cpuNumber;

if ((isEven(sum) && hasUserChoosenEven(userChoice)) || (!isEven(sum) && !hasUserChoosenEven(userChoice))) {
  alert("Player ha vinto!");
} else {
  alert("CPU ha vinto!");
}
