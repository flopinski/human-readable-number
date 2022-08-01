module.exports = function toReadable (number) {
  let result = 0;
  let tillNine = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

  let tillHundred = ['nAn', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number === 0) {return 'zero'}
  if (number <= 20) {return tillNine[number - 1]};
  if (number >= 21 && number <= 99 && number % 10 === 0) {return tillHundred[Math.floor(number / 10)]};
  if (number >= 21 && number <= 99 && number % 10 !== 0) {return `${tillHundred[Math.floor(number / 10)]} ${tillNine[number % 10 - 1]}`};
  if ((number >= 100) && (number % 100 === 0)) {return `${tillNine[Math.floor(number / 100 -1)]} hundred`};
  if (((number % 10) <= 19) && (number % 10) === 0 ) {return `${tillNine[Math.floor(number / 100 - 1)]} hundred ${tillHundred[number % 100 / 10]}`}
  if ((number % 100) <= 19 && (number % 10) >= 1 ) {return `${tillNine[Math.floor(number / 100 - 1)]} hundred ${tillNine[number % 100 -1]}`}


  if (number >= 100 && number % 100 >= 20) {
     return `${tillNine[Math.floor(number / 100 - 1)]} hundred ${tillHundred[Math.floor(number % 100 / 10)]} ${tillNine[number % 100 % 10 - 1]}`};
}

