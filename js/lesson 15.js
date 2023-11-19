// * ------ Lesson 15. JS. Part 2
// * Створення масиву; Копіювання масивів; Методи масивів;

// ! Створення масиву

const arr1 = []; // Синтаксичний цукор
const arr2 = new Array();

const numbers = [1, 2, 3, 4];

// numbers[i] - доступ до елемента під номером i
// numbers.length - довжина масива

console.log(numbers[2]);
console.log(numbers.length);

const usersList = [
  //іменування у множинні
  { id: 1, name: "Test" },
  { id: 2, name: "Ivo" },
];

console.log(usersList);

// TASK 1: написати функцію для виводу елементів масиву

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArray(numbers);

// TASK 2: написати функцію для обчислення суми елементів масиву

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray(numbers));

//! Копіювання масивів

const arr4 = numbers; // погано, бо копіюється посилання

const arr5 = Array.from(numbers); // ok

const arr6 = [...numbers]; // ok

//! Методи масивів

//! Додавання та видалення

numbers.push(5); //* додає елемент у кінець масиву

numbers.pop(); //* повертає і видаляє останній елемент

//* shift i unshift використовувати в крайніх випадках!

numbers.unshift(10); //* додати на перше місце елемент

numbers.shift(); //* повертає і видаляє перший елемент

//! Копіювання

//* slice - копіювання вказаної частини масиву

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals);

console.log(animals.slice(2)); //* копіює все, починаючи від вказаного елемента
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4)); //* копіює все, починаючи ВІД і ДО елемента
// Expected output: Array ["camel", "duck"]

// TASK 3: ввести з консолі n елемнтів масиву

// function inputArray(n) {
//   const arr = [];

//   for (i = 0; i < n; i++) {
//     arr.push(Number(prompt("Input item")));
//   }
//   return arr;
// }

// console.log(inputArray(5));

// TASK 4: скопіювати однозначні числа

const arr10 = [10, 15, 2, 3, 5, 122, 155];

console.log(arr10.slice(2, 5));
console.log(arr10.slice(2, -2)); //* -2 - цн рахується з кінця масиву

// TASK 5: видалити з arr10 5-ку

const arr11 = arr10.splice(4, 1); //* arr11 повертає масив, що містить видалені елементи
console.log(arr11);

// АБО
// arr10.splice(4,1)

//! Конкатенація масивів
//* створює новий масив та у нього повертає результат конкатенації

const arr12 = [1, 2, 3, 4, 5];
const arr13 = [6, 7, 8, 9, 10];

const arr14 = arr12.concat(arr13);
console.log(arr14);

//! Перебір масиву

//* for...in - перебирає властивості (ключі)

for (const key in arr14) {
  console.log(`${[key]}: ${arr14[key]}`);
}

//* for...of - перебирає значення

for (const item of arr14) {
  console.log(item);
}

// TASK 6: перебрати за допомогою for..of масив

const usersList2 = [
  //іменування у множинні
  { id: 1, name: "Test" },
  { id: 2, name: "Ivo" },
];

for (const user of usersList2) {
  // user (iterator) - називаємо так, щоб було зв'язано з тим, що ми перебираємо
  console.log(user);
}
