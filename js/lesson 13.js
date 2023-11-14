// * ------ Lesson 13. JS. Part 1
// ? switch..case; Умовна операція (тернарна) ?: ; do..while; Шаблонний літерал; Вкладені цикли; Функції; Методи для рядків

// ! Оператор множинного вибору (switch..case)

// TASK 1: Реалізувати переведення оцінки за 12б систомою в 5б
// 12 - 5+
// 11 - 5
// 10 - 5-
// ... Mark < 5

const mark = 10;

if (mark === 12) {
  console.log("5+");
} else if (mark === 11) {
  console.log("5");
} else if (mark === 10) {
  console.log("5-");
} else {
  console.log("Mark < 5");
}

// switch..case

switch (mark) {
  case 12:
    console.log("5+");
    break;
  case 11:
    console.log("5");
    break;
  case 10:
    console.log("5-");
    break;
  default:
    console.log("Mark < 5");
}

// TASK 2: Користувач вводе 2 числа a, b - операцію ??? (*, /, +, -)
// Порахувати і вивести результат a ??? b
// '+', '-', ...
// В гілці default передбачити обробку некоретних введених користувачет операцій

const userNumber1 = Number(prompt("Введіть число a"));
const userNumber2 = Number(prompt("Введіть число b"));
const userSymbol = prompt("Введіть операцію для a ? b");

switch (userSymbol) {
  case "+":
    alert(userNumber1 + userNumber2);
    break;
  case "-":
    alert(userNumber1 - userNumber2);
    break;
  case "*":
    alert(userNumber1 * userNumber2);
    break;
  case "/":
    alert(userNumber1 / userNumber2);
    break;
  default:
    alert("Incorect operation");
}

// TASK 3: За введеним номером місяця вивести назву пори року
// 1, 2, 12 - winter
// ...

const userMonth = Number(prompt("Введіть номер місяця"));

switch (userMonth) {
  case 12:
  case 1:
  case 2:
    alert("Зима");
    break;
  case 3:
  case 4:
  case 5:
    alert("Весна");
    break;
  case 6:
  case 7:
  case 8:
    alert("Літо");
    break;
  case 9:
  case 10:
  case 11:
    alert("Осінь");
    break;
  default:
    alert("Incorect operation");
    break;
}

// ! Умовна операція (тернарна) ?:

// TASK 4: Знайти мінімальне з 2х чисел

const a = 15;
const b = 8;

let minAB = null;

if (a < b) {
  minAB = a;
} else {
  minAB = b;
}

console.log("minAB :>> ", minAB);

// або

let minAB2 = a < b ? a : b;

console.log("minAB2 :>> ", minAB2);

// TASK 5: Задано вік користувача
// Вивести повідомлення, що
// якщо користувач повнолітній, то він має повний доступ,
// янщо ні, то обмежений
// Використати умовний оператор

const userAge = 18;

console.log(
  userAge >= 18 ? "You have full access!" : "You don't have full access!"
);

//  ! Цикл з постумовою do..while

// постумова; min 1

// працює так: виконується тіло циклу, далі перевіряється умова (while),
// якщо вона true,то повертаємося і виконуємо нову ітерацію
// якщо ні - виходимо з циклу

// do {
//   body
// } while (condition)

// TASK 6: Користувач має ввести коректне число

let userNumber = null;

do {
  userNumber = Number(prompt("Input number"));
} while (!Number.isFinite(userNumber));

console.log(userNumber);

// TASK 7: Користувач має вводити результат 2+2*2 до тих пір, поки не введен правильну відповідь

let userAnswer = null;

do {
  userAnswer = Number(prompt("Введи рішення виразу 2+2*2"));
} while (userAnswer !== 6);

console.log(userAnswer);

// * ------ Lesson 13. JS. Part 2

// Example

const greeting = "Hello";
const userName = prompt("Input name");
console.log(greeting + ", " + userName);

// ! Шаблонний літерал `${ }`

console.log(`${greeting}, ${userName}`);

// ! Вкладені цикли

// TASK 8: Написати таблицю множення на 1, 2, 3
// 1*1=1
// 1*2=2
// 1*3=3
// ....
// 2*1=2
// 2*2=4
// 2*3=6

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    // console.log(i + "*" + j + "=" + i * j)};
    console.log(`${i}*${j}=${i * j}`);
  }
}

// TASK 9:
// Пользователь имеет 3 попытки ввести пароль
// Если пароль верен, то вывести "Пароль верен"
// Иначе "Пароль неверен"

let userPassword = "";
const PASSWORD = "qwerty";
const TRY_LIMIT = 3;
let currentTry = 1;

do {
  userPassword = prompt("Input Password").trim();
} while (userPassword !== PASSWORD && currentTry++ < TRY_LIMIT);

if (userPassword === PASSWORD) {
  console.log("Password correct");
} else {
  console.log("Password incorrect");
}

// * Оптимізований код до TASK 9

const PASSWORD2 = "qwerty";
const TRY_LIMIT2 = 3;
let userPassword2 = "";
let currentTry2 = 1;
let isPasswordCorrect = false;

do {
  isPasswordCorrect = prompt("Input Password").trim() === PASSWORD2;
} while (!isPasswordCorrect && currentTry2++ < TRY_LIMIT2);

console.log(`Password ${isPasswordCorrect ? "correct" : "incorrect"}`);

// * ------ Lesson 13. JS. Part 3

// ! Функції

// Повторне використання коду
// Одна функція - одна відповідальність

// Оголошення функції (function declaration)
// Функцію можна викликати як до, так і після оголошення
// functionName() - виклик функції

// * function functionName() {
// *  function body
// * }

function sayHello() {
  console.log("Hello");
}

sayHello();

// * Передача значень до функції

const userName2 = "Ivo";

function sayHelloToUser(name) {
  // * name - параметр, вважається локальною змінною функції
  // локальні змінні не видимі ззовні функції
  // ми проста, наче, "копіюємо"  userName2 у name (name === userName2), якщо це "примітивні" (рядки, числа і т.д.), а не об'єкти
  console.log(`Hello, ${name}`);
}

sayHelloToUser(userName2);

// * Повернення значень із функції

function sumAB(a, b) {
  const s = a + b;
  return s; // означає, що на місце виклику ф-ції поверни (підстав) s. Тобто const sum = s;
}

const sum = sumAB(4, 5);
console.log(sum);

// TASK 10: Написати ф-ю для розрахунку числа в степені 4: 5=>625; 2=>16

function powNumber4(a) {
  const powNum = Math.pow(a, 4);
  return powNum;
}

const retPowNum = powNumber4(5);
console.log(retPowNum);

// TASK 11: Написати функцію для розрахунку суми чисел від 1 (*m) до n
// 5   => 1+2+3+4+5 = 15

let userNum1 = Number(prompt("Input first number"));
let userNum2 = Number(prompt("Input second number"));

function sumBetweenTwoNumbers(funNum1, funNum2) {
  let sum = 0;

  for (let i = funNum1; i <= funNum2; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(
  `Сума від числа ${userNum1} до числа ${userNum2} =`,
  sumBetweenTwoNumbers(userNum1, userNum2)
);

// TASK 12: Написати функцію, яка повертає true для повнолітнього користувача,
// false - для неповнолітнього

const userAge2 = Number(prompt("Input your age"));

function isAdult(age) {
  return age >= 18;
}

console.log(`Your age: ${userAge2} =`, isAdult(userAge2));

// ! Методи для рядків

// TASK 13: Написати функцію, яка за рядком "Ivo Smith" сформує рядок з ініціалами ("IS")

const userName3 = prompt("Input your name to get initials");

function getInitials(userFullName) {
  const spaceIndex = userFullName.indexOf(" ");
  const initials =
    userFullName.substring(0, 1) +
    userFullName.substring(spaceIndex + 1, spaceIndex + 2);

  return initials;
}

console.log(`getInitials ${userName3}`, getInitials(userName3));

/* 
const str='asd asd'

* .indexOf знаходить положення символу у рядку та виводить номер
.indexOf('який символ хочемо знайти' (обов'язкова умова), починаючи з якого символу ми хочемо шукати (необов'язкова умова))

> str.indexOf('a')
< 0

* .substring - знаходить підрядок, починаючи, з певного символа

> str.substring(0,4)
< 'asd ' - верхню границю ми не враховуємо
         пробіл теж рахується, a=0, s=1, d=2, 'пробіл'=3
*/
