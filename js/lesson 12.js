// * ------ Lesson 12. JS. Part 1
// ? if...else; Оператори порівняння; Скорочена NF Розширена формИ if; Умовні (булевські) операції; Цикл while; Цикл з лічильником for

// ! if...else

// if (умова) {
//   гілка true;
// } else {
//   гілка false;
// }

// * Булевські змінні імунуємо з is...

const isLogged = false;

if (isLogged) {
  console.log("You are logged in");
} else {
  console.log("Try again");
}

/* TASK 1: Задана змінна
 const isEnoughMoney = true;
 Якщо грошей достатньо, вивести “Операцію схвалено)”
 Якщо недостатньо, то вивести “Операцію відхилено(” */

const isEnoughMoney = true;

if (isEnoughMoney) {
  console.log("Операцію схвалено)");
} else {
  console.log("Операцію відхилено(");
}

// TASK 2: Перевірити, чи скінченне число ввів користувач, і видати відповідне повідомлення.

// * Number.is... - це для перевірки, напр., Number.isFinite - чи скінченне число чи ні

const inputValue = Number(prompt("Input number"));

if (Number.isFinite(inputValue)) {
  console.log("number");
} else {
  console.log("not a finite number");
}

// ! Оператори порівняння

const age = 18;

console.log("age > 18", age > 18);
console.log("age < 18", age < 18);
console.log("age >= 18", age >= 18);
console.log("age <= 18", age <= 18);

// * Нестрога рівність / нерівність - ПОГАНО!
console.log("age == 18", age == 18);
console.log("age == '18'", age == "18");

// * (!=) - не дорівнює
console.log("age != 18", age != 18);
console.log('age != "18" :>> ', age != "18");

// Строга рівність / нерівність
console.log("age === 18", age === 18);
console.log("age === '18'", age === "18");
console.log("age !== 18 :>> ", age !== 18);
console.log('age !== "18" :>> ', age !== "18");

// TASK 3: Якщо користовач повнолітній, то привітати, якщо ні - то доступ заборонений

const userAge = Number(prompt("Input your age"));

if (userAge >= 18) {
  console.log("You're welcome!");
} else {
  console.log("You're not 18!");
}

// ! Скорочена форма if

/* if (умова) {
   гілка true;
  } */

// TASK 4: При вході перевірити, чи користувач повнолітній
// Якщо ні - то видати попередження про обмежений доступ
// Вивести привітання

const userAge2 = Number(prompt("Input your age"));

if (userAge2 < 18) {
  console.log("Обмежений доступ!");
}

console.log("Wellcome!");

// TASK 5: если пользователь несовершеннолетний, то "Wellcome"
// иначе если сертификат есть, то "Wellcome"
//       иначе вакцинироваться

const userAgeage3 = 18;
const isVactinated = true;

if (userAgeage3 < 18) {
  console.log("Wellcome)");
} else {
  if (isVactinated) {
    console.log("Wellcome)");
  } else {
    console.log("Please go to vactination");
  }
}

// ! Розширена форма if

// if (умова) {
//   гілка true;
// } else if (умова) {
//   гілка ;
// } else if (умова) {
//   гілка ;
// } else {
//   гілка false;
// }

if (userAgeage3 < 18) {
  console.log("Wellcome");
} else if (isVactinated) {
  console.log("Wellcome");
} else {
  console.log("Please go to vactination");
}

// TASK 6: Ввести 2 числа. Вивести з них більше
// Ввести 2 числа. Вивести що вони рівні, а якщо ні, то більше з них
// const num1 = Number(prompt("Введіть перше число"));
// const num2 = Number(prompt("Введіть друге число"));

if (num1 > num2) {
  console.log("Більше число >>", num1);
} else if (num1 < num2) {
  console.log("Більше число >>", num2);
} else {
  console.log("Вони еквівалентні", userInput1 + " = " + userInput2);
}

// MY TASKS

// TASK 1: Перевірка на парність
const num3 = 15;

if (num3 % 2 === 0) {
  console.log("Super!");
} else {
  console.log("not");
}

/* TASK 2: Визначення найбільшого числа:

Запитайте користувача про три числа.
Використовуючи умовний оператор if і else, знайдіть і виведіть найбільше з цих трьох чисел у консоль. */

const userNumber1 = Number(prompt("Input number 1"));
const userNumber2 = Number(prompt("Input number 2"));
const userNumber3 = Number(prompt("Input number 3"));

const maxNumber = Math.max(userNumber1, userNumber2, userNumber3);

if (userNumber1 === userNumber2 && userNumber2 === userNumber3) {
  console.log("Всі числа рівні");
} else {
  console.log("Найбільше число: " + maxNumber);
}

// * ------ Lesson 12. JS. Part 2

// ! Умовні (булевські) операції

// умова І умова   - умова && умова
// умова АБО умова - умова || умова
// НЕ умова        - !умова

const age2 = 19;
const isVactinated2 = true;

if (age2 < 18 || isVactinated2) {
  console.log("Wellcome!");
} else {
  console.log("Go to vactinated");
}

// * Щоб згрупувати виводи console.group("Таблиця істинності &&:");
// * Щоб закрити групування console.groupEnd();

console.group("Таблиця істинності &&:");

console.log("true && true :>> ", true && true); // => true, якщо всі true
console.log("false && false :>> ", false && false);
console.log("true && false :>> ", true && false);
console.log("false && true :>> ", false && true);

console.groupEnd();

console.group("Таблиця істинності ||:");

console.log("true || true :>> ", true || true);
console.log("false || false :>> ", false || false); // => false, якщо всі false
console.log("true || false :>> ", true || false);
console.log("false || true :>> ", false || true);

console.groupEnd();

console.group("Таблиця істинності !:");

console.log("!true :>> ", !true);
console.log("!false  :>> ", !false);

console.groupEnd();

// TASK 1: Вивести нагадування про знижку, якщо парне число випало на п'ятницю

const dayOfWeek = "friday";
const dataOfDay = 15;

if (dayOfWeek === "friday" && dataOfDay % 2 === 0) {
  console.log("Discount reminder");
}

// TASK 2: Вивести інфо про знижку, якщо людина пенсійгого віку або має неповнолітню дитину

const personAge = 60;
const childAge = 18;

if (personAge >= 60 || childAge < 18) {
  console.log("You have a discount!");
}

// TASK 3: якщо неповнолітній, то обмежити доступ

const isAdult = false;

// isAdult !== true, isAdult === false
if (!isAdult) {
  console.log("Доступ обмежено");
}

// * falsy-значення: 0, null, undefined, '', false, NaN

// * if (якщо тут не falsy-значення) {
//  то виведи ось це:  'ok';
// }

const value = "";

if (value !== undefined || value !== null || value !== "") {
  console.log("ok");
}

// АБО

if (value) {
  console.log("ok");
}

// TASK 4: перевітири, чи число є 0 чи ні

const a = 0;

if (a) {
  console.log("no 0");
} else {
  console.log(0);
}

/*
* isNaN - це не число
          виникає коли ми до Number перетворюємо щось некореткне (напр.,рядок)
          тобто, з нечисла отримати число

  *  Чому NaN != NaN ?

    Наприклад,

      Number('sdhytrujy') = NaN
      Number('awwwr685ty+efa') = NaN

  *    Вони обидва NaN, але ж самі рядки різні. Тому ми не можемо порівнювати NaN
*/

/*
 * Якщо ми число перевіряємо на NaN, то викор. Number.isNaN()
 * Якщо потрібно перевірити серед усіх типів, то викор. isNaN()
 */

// TASK 5: Перевірити, що прийшло число і воно не NaN

const value2 = "dgdgdfg";

if (typeof value === "number" && !Number.isNaN(value)) {
  console.log("number not NaN");
}

// * ------ Lesson 12. JS. Part 3

/*
* Цикли while, for
   потрібні, коли виконується декілька однотипних операцій, напр.:

      console.log('Пройти прямо');
      console.log('Повернути наліво');

      console.log('Пройти прямо');
      console.log('Повернути наліво');

      console.log('Пройти прямо');
      console.log('Повернути наліво');

      console.log('Пройти прямо');
      console.log('Повернути наліво');
   */

// ! Цикл while

// while (умова) {
//   тіло циклу
// }

// одне виконання тіла циклу -- ітерація
// i - змінна ціклу
// змінна цикла має змінюватися, щоб досягти умови закінчення

let i = 1;
const limit = 4;

console.group("Square");
while (i++ <= limit) {
  console.log("Пройти прямо");
  console.log("Повернути наліво");
}
console.groupEnd();

// TASK 1: У користувача є книга з pageCount сторінок    5
// 1) Вивести номери сторінок з 1ї по останню          1 2 3 4 5

let currentPage = 1;
const pageCount = 5;

while (currentPage <= pageCount) {
  console.log(currentPage++);
}

// 2) Вивести парні номери сторінок по останню 2 4

if (currentPage % 2 !== 0) {
  currentPage++;
}

while (currentPage <= pageCount) {
  console.log(currentPage);
  currentPage += 2;
}

/* TASK 2: Користувач вводе значення, поки не введе коректне число
Вивести квадрат цього числа */

let userValue = prompt("Input number");

while (!Number.isFinite(Number(userValue)) || userValue === "") {
  userValue = prompt("You input wrong number. Input correct number");
}

console.log(Math.pow(userValue, 2));

// * Коли ми не знаємо точну кіл-сть ітерацій викор. while, коли знаємо викор. цикл for

// ! Цикл з лічильником for

// * лічильник - це змінна циклу
/*
* for (ініціалізація лічильника; умова; зміна лічильника){
  тіло циклу
 }
*/

// 0 (ініціалізація лічильника) виконується 1 раз до циклу
// 1 (умова продовження циклу)  якщо умова істинна, то виконуємо тіло циклу 2, інакше вихід
// 2 (тіло циклу)               виконується, якщо умова 1 істинна
// 3 (зміна лічильника)         виконується після кожної ітерації. Потім перехід на 1

//             0                       1                   3
for (let currentPage = 1; currentPage <= pageCount; currentPage++) {
  console.log(currentPage); // 2
}

// TASK 3: вивести номери сторінок з останньої по 1

const pageCount2 = 5;

for (let currentPage2 = pageCount2; currentPage2 >= 1; currentPage2--) {
  console.log(currentPage2);
}

// TASK 4: розрахувати суму чисел від 1 до 5 ( 1+2+3+4+5 )

let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}

console.log("sum :>> ", sum);

// TASK 5: Вивести числа від 2 до 16 парні

if (currentPage % 2 !== 0) {
  currentPage++;
}

while (currentPage <= pageCount) {
  console.log(currentPage);
  currentPage += 2;
}

for (let j = 2; j <= 16; j += 2) {
  console.log(j);
}

// TASK 6: Розрахувати добуток чисел від 1 до 15 непарні

let mult = 1;
for (let i = 1; i <= 15; i += 2) {
  mult *= i;
}
console.log("mult :>> ", mult);

// * ------ Lesson 12. HOMEWORK

// TASK 1: Запитати змінну у користувача. Якщо змінна дорівнює числу 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

const userNumber4 = Number(prompt("Введіть число 10"));

if (userNumber4 === 10) {
  console.log("Вірно!");
} else {
  console.log("Не вірно!");
}

/* TASK 2: Напишіть дві перевірки.
Якщо змінна test дорівнює true, виведіть 'Вірно', інакше виведіть 'Невірно'.
Якщо змінна test не дорівнює true, то виведіть 'Вірно', інакше виведіть 'Невірно'
Перевірте роботу скрипта при test, що дорівнює true, false. */

const test = false;

if (test) {
  console.log("Невірно");
} else if (!test) {
  console.log("Вірно");
} else {
  console.log("Невірно");
}

/* TASK 3: Обчислити суму покупки з урахуванням знижки. 
Знижка 3% надається, якщо сума покупки більша за 500 грн., а знижка 5% - якщо сума покупки більша за 800 грн. 
Суму покупки вводить користувач.*/

const purchaseAmount = Number(prompt("Введіть суму покупки"));

if (purchaseAmount > 500 && purchaseAmount < 801) {
  console.log("Discount 3% :", (purchaseAmount / 100) * 3);
} else if (purchaseAmount > 800) {
  console.log("Discount 5% :", (purchaseAmount / 100) * 5);
} else {
  console.log("No discount");
}

// Таски на цикли.
// Кожне завдання вирішити циклами while, for.

// TASK 4: Виведення чисел від 25 до 0 (порядок зменшення).

let allNumber = 0;

// Цикл while
console.group("Цифри від 25 до 0 за доп.while");
while (allNumber <= 25) {
  console.log(allNumber);
  allNumber++;
}
console.groupEnd();

// Цикл for

console.group("Цифри від 25 до 0 за доп.for");
for (allNumber2 = 0; allNumber2 <= 25; allNumber2++) {
  console.log(allNumber2);
}
console.groupEnd();

// TASK 5: Виведення чисел від 10 до 50, які кратні 5.
console.group("від 10 до 50, які кратні 5 за доп.while");

let numbers = 10;
while (numbers <= 50) {
  if (numbers % 5 === 0) {
    console.log("", numbers);
  }
  numbers += 5;
}
console.groupEnd();

console.group("від 10 до 50, які кратні 5 за доп.for");
for (let numbers2 = 10; numbers2 <= 50; numbers2 += 5) {
  if (numbers2 % 5 === 0) {
    console.log("", numbers2);
  }
}
console.groupEnd();

// TASK 6: Знайти суму чисел в межах від 1 до 100.
