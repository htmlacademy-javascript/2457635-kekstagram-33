
// Функция для проверки длины строки.

const isLessOrEqual = (string, length) =>
string.length <= length //проверка через if

console.log(isLessOrEqual('проверяемая строка', 20));
console.log(isLessOrEqual('проверяемая строка', 18));
console.log(isLessOrEqual('проверяемая строка', 10));

//Функция для проверки, является ли строка палиндромом.
//варианты решений

const isPolindrom = (string) => {
const tempString = string.toLowerCase();
let reverseString = '';
for(let i = tempString.length - 1; i >= 0; i--) {
  reverseString += tempString.at(i);
}

return tempString === reverseString;
}

console.log(isPolindrom('довод'));
console.log(isPolindrom('топот'));
console.log(isPolindrom('кекс'));

// const isPol = (string) => {
//   const tempString = string
//   .toLowerCase() // сторка переводится в нижний регистр
//   .replaceAll(' ', ''); //заменяем все пробелы на пустой символ
//   let reverseString = '';
//   for(let i = tempString.length -1; i >= 0; i--) {
//     reverseString += tempString.at(i);
//   }

//   return tempString === reverseString;
//   }

// console.log(isPol('Лёша на полке клопа нашёл'));

const isPal = function (string) {
  string = (string.replaceAll(' ','')).toLowerCase();
  let testString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    testString += string[i];
  }
  console.log(testString);
  return testString === string;
}
console.log(isPal('Лёша на полке клопа нашёл')); //true

//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа

const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }

let result = '';
for (let i = 0; i < string.length; i++ ){
  if(!Number.isNaN(parseInt(string.at(i), 10))) {
    result+=string.at(i)
  }
}
return parseInt(result, 10);
}

console.log(extractNumber('2023 год')); // 2023
console.log(extractNumber('ECMAScript 2022')); // 2022
console.log(extractNumber('1 кефир, 0.5 батона')); // 105
console.log(extractNumber('агент 007')); // 7
console.log(extractNumber('а я томат')); // NAN
console.log(extractNumber(''));// NAN

console.log(extractNumber(2023)); // 2023
console.log(extractNumber(-1)); // 1
console.log(extractNumber(1.5));// 15


