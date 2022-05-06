function isPalindrome(word) {
  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return word === reversedWord;
}

const word = prompt("Inserisci una parola:");
alert(isPalindrome(word) ? `${word} è una parola palindroma!` : `${word} non è una parola palindroma...`);
