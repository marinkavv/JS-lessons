// * ------ Lesson 14. JS. Part 1
// ? Значення за умовчуванням; JSDoc; Function expression; Чисті функції; Об'єкти (Доступ до властивостей; Методи, this); Типи-посилання (об'єкти) і типи-значення (примітиви); Цикл For...in; Функція-конструктор; Копіювання ЗНАЧЕННЯ об'єктів; Обчислювальні властивості

// ! значення за умовчуванням / типове значення

function power(base, pow = 4) {
  // pow = 4 - значення за умовчуванням, якщо користувач не передасть pow, то використається це значення
  return base ** pow;
}

console.log(power(10, 2));

// Реалізувати функцію для розрахунку добутку чисел від
// n1(=1) до n2
// 10, 12 => 10*11*12
// 3 => 1*2*3

/**
 * Multiplication from number funNum1 to number funNum2
 * @param {number} funNum2
 * @param {number} [funNum1]
 * @returns {number}
 */

function productOfNumbers(funNum2, funNum1 = 1) {
  let product = 1;

  for (let i = funNum1; i <= funNum2; i++) {
    product *= i;
  }

  return product;
}

console.log(productOfNumbers(4, 2));

// ! JSDoc

/**
 * Summ of two summand
 * @param {number} a - First summand
 * @param {number} b - Second summand
 * @returns {number} Sum of two numbers
 */

function sumAB(a, b) {
  return a + b;
}

sumAB(1, 5);

// ! Function expression
// Function expression можна викор. тільки після оголошення

// sumAB - ім'я функції - це просто змінна в якій лежить код ф-ції
// sumAB() - а якщо ім'я функції з дужками, то це виклик ф-ції

const power2 = function (base, pow = 4) {
  return Math.pow(base, pow);
};

console.log(power2(3, 4));

// ! Чисті функції

// * - це ф-ції, які:
// - детермінована ф-я - ф-я, яка при одних і тих самих значеннях параметрів повертає один і той самий результат
// - без побічних ефектів (мережеві запити, введення/виведення даних)

// недетермінована ф-я
function sum5(a) {
  return a + Math.random();
}
console.log("sum5(1) :>> ", sum5(1));
console.log("sum5(1) :>> ", sum5(1));

// недетермінована ф-я
function sum4(a) {
  return a + b;
}

let b = 10;
console.log("sum4(1) :>> ", sum4(1));

b = 15;
console.log("sum4(1) :>> ", sum4(1));

// * ------ Lesson 14. JS. Part 2

const firstName = "Test";
const lastName = "Testovich";
const email = "test@gmail.com";

// ! Об'єкти

// * Оголошення об`єкту
const obj1 = {}; // cинтаксичний цукор
const obj2 = Object();
const obj3 = new Object();

// властивості (key): рядки або Symbol()
const user = {
  // key: value,
  firstName: "Test", // firstName - це рядки
  lastName: "Testovich",
  email: "test@gmail.com",
  password: "qwerty",
};

console.log("user :>> ", user);
alert(user); // не вміє виводити об'єкти

// ! Доступ до властивостей
// (. - операція доступу до властивості)

// * Додавання властивості
user.age = 10;
console.log("user :>> ", user);

// * Читання властивості
console.log("user.email :>> ", user.email);

// * Видалення властивості
delete user.password;
console.log("user :>> ", user);

// TASK 1: Створити об'єкт машини (марка, модель, рік випуску, номер, колір)
// Переглянути об'єкт
// змінити колір
// видалити властивість рік випуску
// додати властивість ім'я/прізвище власника
// Переглянути об'єкт

const car = {
  marka: "Toyota",
  model: "Camry",
  year: 2020,
  serialNo: "AB1234CD",
  color: "gray",
};

console.log(car);
car.color = "red";
delete car.year;
car.ownerName = "Masha";

console.log(car);

const capibara = {
  superPower: "cute",
  countOfLegs: 3,
  countOfEyes: 2,
  favoriteThing: "sun and water",
};

capibara.type = "rat";
capibara.countOfLegs = 4;
delete capibara.favoriteThing;
console.log("capibara", capibara);

// ! Типи-посилання (об'єкти) і типи-значення (примітиви)

//  типи-значення:
const a2 = 5;
const b2 = 5;
console.log("a===b :>> ", a2 === b2);

const o1 = {};
const o2 = {};
console.log("o1===o2 :>> ", o1 === o2);

// * Типи-посилання:
// o1 і o3 посилаються на одне і теж місце в пам'яті, тому змінюючи одне, ми зніюємо і інше (об'єкти)

const o3 = o1;
console.log("o1===o3 :>> ", o1 === o3);

// ! Копіювання ЗНАЧЕННЯ об'єктів

// Перший запис (використовується не часто)
const user1 = Object.assign({}, user);
console.log(user1);

// Щоб перевірити чи скопіювалось ми порівнюємо
console.log(user === user1);

// Другий запис
const user2 = { ...user }; // копіюємо в user2 властивості з user
console.log(user2);

console.log(user === user2);

// ! Обчислювальні властивості

const prop = prompt("input prop");
const value = prompt("input value");

const obj = {
  prop: value,
};

console.log(obj);

// Що якщо ми хочемо щоб в об'єкті у властивостях були значення зі змінної?
// Тобто, у prop і value вклалися ті значення, які ми введемо.
// * Для цього потрібно властивість взяти у квадратні дужки []:

const obj4 = {
  [prop]: value, // Замість prop можемо писати що завгодно, напр., шаблонний літерал
};

console.log(obj4);

// ! Методи, this

const user3 = {
  // властивості
  firstName: "Test",
  lastName: "Testovich",
  email: "test@gmail.com",
  password: "qwerty",
  // методи
  // this - той, об'єкт, що стоїть перед крапкою при виклику метода
  // повний синтаксис:
  // getFullName: function () {
  //   return `${this.firstName} ${this.lastName}`;
  // },
  // changeEmail: function (newEmail) {
  //   this.email = newEmail;
  // },
  // * короткий синтаксис
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  changeEmail(newEmail) {
    this.email = newEmail;
  },
};

console.log(user3.getFullName());
user3.changeEmail("ghytru");
console.log(user3);

// TASK 2: Написати метод для зміни кольору машини

const car1 = {
  marka: "Toyota",
  model: "Camry",
  year: 2020,
  serialNo: "AB1234CD",
  color: "gray",
  changeColor(newColor) {
    return (this.color = newColor);
  },
  changeValue(valName, value) {
    this[valName] = value;
  },
};

car1.changeColor("red");
console.log(car1);

car1.changeValue("marka", "jhlih");
console.log(car1);

// * ------ Lesson 14. JS. Part 3

// ! Цикл For...in

// user[key] - вивести значення key для об'єкта user
// В key послідовно поміщаються значення всіх властивостей

for (const key in user) {
  console.log(user[key]);
}

// TASK 3: Використати for..in для car
// car[ім'я властивості] = значення

for (const key in car) {
  console.log(`Car ${key}: ${car[key]}`);
}

// ! Функція-конструктор

function User(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const user4 = new User("Yulia", "Sokolova", 15);
console.log(user4);

const user5 = new User("Test", "Testovich", 30);
console.log(user5);

console.log(user4.getFullName());
console.log(user5.getFullName());
