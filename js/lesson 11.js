// * ------ Lesson 11. JS. Intro. Part 2
// * ЗМІННІ; СТИЛІ ІМЕНУВАННЯ; Типи даних; Операції; Вбудовані функції; Скорочені записи операцій; Інкремент і декремент; Приведення типу; Приведення типу; Введення даних

console.log("Hello. world!"); //виведення в консоль
// alert("Hello. world!"); // виведення в модальне вікно

/*
БАГАТОСТРОКОВИЙ
КОМЕНТАР
*/

// ! ЗМІННІ

// let можна переприсвоювати
let a = 1;
console.log("a1 =", a);

a2 = a + 1;
console.log("a2 =", a2);

// const не можна переприсвоювати
/*але для уникнення випадкового переприсвоювання важливої інф-ї
рекомендується МАКСИМАЛЬНО вживати const*/

const pi = 3.14;
console.log("pi =", pi);

// var застарілий варіант

var a3 = 10;
console.log("a3 =", a3);

// ! СТИЛІ ІМЕНУВАННЯ
// lowetCamelCase
// UpperCamelCase
// PI, MATH_PI - для констант

/* Допустимі символи для іменування:
для першого символа: a-z, A-Z, _, $
для другого та ін. символа: a-z, A-Z, _, $, 0-9 */

// * ------ Lesson 11. JS. Типи даних

// * number
// 1, 22, -50, 10.5, 10e5, Infinity, -Infinity, 0 (+0, -0), NaN

const numberVariable1 = Infinity;
console.log("numberVariable1 :>> ", numberVariable1);

const numberVariable2 = NaN;
console.log("numberVariable2 :>> ", numberVariable2);

const numberVariable3 = 10.5;
console.log("numberVariable3 :>> ", numberVariable3);

console.log("10 / 0 :>> ", 10 / 0); // Infinity
console.log("10 / -0 :>> ", 10 / -0); // -Infinity
console.log('"abc" / 5 :>> ', "abc" / 5); // NaN - Not a Number
// Number.MAX_VALUE
// Number.MAX_SAFE_INTEGER

// * bigint

const bigintValue = 9999999999999999n;
console.log("bigintValue :>> ", bigintValue);

// * boolean - value: true, false

const boolValue = false;
console.log("boolValue :>> ", boolValue);

// * symbol
const symbolValue = Symbol();
console.log("symbolValue :>> ", symbolValue);

// undefined - value: undefined

// const undValue = undefined
let undValue;
console.log("undValue :>> ", undValue);

// * null - value: null - коли хочемо проініціалізувати змінну, але не знаємо конкретного значення

const nullValue = null;
console.log("nullValue :>> ", nullValue);

// * не примітив / object
const obj = {};

// * typeof значення
console.log("typeof 5 :>> ", typeof 5); // 'number'
console.log('typeof "5" :>> ', typeof "5"); // 'string'
console.log("typeof NaN :>> ", typeof NaN); // 'number'
console.log("typeof true :>> ", typeof true); // 'boolean'
console.log("typeof null :>> ", typeof null); // 'object'

// * ------ Lesson 11. JS. Операції. Перетворення типів
// ! Операції

const a1 = 1; // ініціалізація - присвоювання при оголошенні
const b1 = 2;

let c1 = null; // ініціалізація
c1 = a1 + b1; // присвоювання

console.log("c :>> ", c1);

console.log("1 + 2 =", 1 + 2);
console.log("1 - 2 =", 1 - 2);
console.log("1 * 2 =", 1 * 2);
console.log("1 / 2 =", 1 / 2);
console.log("1 % 2 =", 1 % 2); /* остача від ділення: 7/2 = 3 (1)/2
остача 1 - число непарне
остача 2 - число парне */

console.log("2 ** 2 =", 2 ** 2); // піднесення до степення

// ! Вбудовані функції
console.log("Math.sqrt(9) :>> ", Math.sqrt(9)); // корінь з числа
console.log("Math.abs(-10) :>> ", Math.abs(-10)); // модуль числа
// Math.pow(число, степінь) - піднесення до степення

// TASK 1: a = 3, b = 4; c - ?

const a4 = 3;
const b4 = 4;
const c = Math.sqrt(a4 ** 2 + b4 ** 2);

console.log("c =", c);

// TASK 2: a = 5, S - ?, P - ?

const squareSide = 5;
const areaOfSquare = Math.pow(squareSide, 2);
const perimeterOfSquare = squareSide * 4;

console.log("Площа квадрата =", areaOfSquare);
console.log("Периметр квадрата =", perimeterOfSquare);

// ! Скорочені записи операцій
let value = 10;
value += 20;
console.log("value =", value);

let value2 = 10;
value2 -= 5;
console.log("value2 =", value2);
// є аналогічні *=, /=

// ! Інкремент (збільшення на 1) і декремент (зменшення на 1)

/* Постфіксний інкремент i++
Спочатку повертається змінна, а потім відбувається дія (додавання) */
let i = 1;

console.log("i++ :>> ", i++);
console.log("i :>> ", i);

/* Інфіксний інкремент ++j
Спочатку відбувається дія (додавання), а потім виведення */
let j = 1;

console.log("++j :>> ", ++j);
console.log("j :>> ", j);

// Постфіксний декремент k--
let k = 1;

console.log(k--);
console.log("k = ", k);

// Інфіксний декремент --l
let l = 1;

console.log(--l);
console.log("l = ", l);

// Пріоритетність операцій
const result = 2 ** (3 ** 2); // 512

// ! Приведення типу (явне)
// Щоб привести щось до числа пишемо Number() та у дужках значення

// TASK 3: true, false, null, undefined, 55n, Symbol() до Number
console.log("true >>", Number(true));
console.log("false >>", Number(false));
console.log("null >>", Number(null));
console.log("undefined >>", Number(undefined));
console.log("55n >>", Number(55n));
// console.log("Symbol() >>", Number(Symbol()));

// Неявне приведення типів (приводяться різні типі) !Запам'ятати, що потрібно перевіряти типи
console.log("true + 10 :>> ", true + 10);

// ! Введення даних
const inputValue = Number(prompt("Введіть число:")); // 50
const result2 = inputValue + inputValue; // Без явного приведення типів: '50' + '50' = '5050'
console.log("result :>> ", result2);

// TASK 4: ввести 2 числа і вивести їх суму

const number1 = Number(prompt("Введіть перше число"));
const number2 = Number(prompt("Введіть друге число"));

console.log("Сумма двох чисел >>", number1 + number2);

// HONEWORK

// TASK 1: Створіть дві змінні a та b. Виведіть у консоль результат їх множення.
const a5 = 7;
const b5 = 3;
console.log("a5 * b5 =", a5 * b5);

// TASK 2: Створіть дві змінні c та d. Виведіть у консоль результат ділення першого на друге.
const c2 = 10;
const d = 2;
console.log("c2 / d =", c2 / d);

// TASK 3: Створіть дві змінні e та f. Виведіть у консоль результат додавання.
const e = 10;
const f = 10;
console.log("e + f =", e + f);

// TASK 4: Визначте змінні зі значеннями 11, true, "java script", "100" і виведіть їх в консоль
const num = 11;
const bool = true;
const string = "java script";
const string2 = "100";

console.log("num =", num);
console.log("bool =", bool);
console.log("string =", string);
console.log("string2 =", string2);

/* TASK 5: Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --
let num = 1;
num = num + 11;
num = num – 11;
num = num * 11;
num = num / 11;
num = num + 1;
num = num – 1; */

let num2 = 1;
console.log("num2 += 11  >>", (num2 += 11));
console.log("num2 -= 11  >>", (num2 -= 11));
console.log("num2 *= 11  >>", (num2 *= 11));
console.log("num2 /= 11  >>", (num2 /= 11));
console.log("num2 = num2++  >>", (num2 = ++num2));
console.log("num2 = num2--  >>", (num2 = --num2));

// Таски на prompt
// TASK 1: Запитати число у користувача, піднести його до квадрату і вивести результат.

const userNum = Number(prompt("Input a number"));

const result3 = Math.pow(userNum, 2);
alert(result3);

// TASK 2: Вивести середнє арифметичне двох чисел. Числа запитувати у користувача.

const userNum2 = Number(prompt("Введіть перше число"));
const userNum3 = Number(prompt("Введіть друге число"));

const arithmeticAverage = (userNum2 + userNum3) / 2;

console.log("arithmeticAverage =", arithmeticAverage);

// TASK 3: Перевести кількість хвилин на секунди та вивести результат. Число хвилин запитувати у користувача.

const userMinutes = Number(prompt("Введіть кількість хвилин"));

const convert = userMinutes * 60;

console.log("convert =", convert);

/* TASK 4: Створіть змінну greeting зі значенням 'Hello,' і оголосіть змінну userName. 
Запитайте ім'я користувача та внесіть це значення у змінну userName. Виведіть повідомлення з привітанням, 
наприклад, 'Hello, Vasya!'. (згадайте про конкатенацію) */

const greeting = "Hello, ";
const userName = prompt("Введіть ваше ім'я");

alert(greeting + userName);
