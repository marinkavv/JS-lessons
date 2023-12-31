// ! Homework: JS. Functions

// 0) Реалізувати функцію isWorkingAgePerson, яка буде перевіряти, чи працездатного людина віку (від 16 до 65). Функція приймає в якості параметра вік людини і повертає значення булевського типу.
// Очікуваний результат:
// isWorkingAgePerson(20); // true
// isWorkingAgePerson(4); // false
// isWorkingAgePerson(88); // false

// 1) *Реалізувати функцію, яка приймає число і повертає булевське значення, чи воно просте (просте число ділитися без залишку тільки на себе і на одиницю).

// 2) Реалізувати функцію checkMultiplicity, яка приймає два числа і перевіряє, чи ділиться перше на друге націло (без залишку):
// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false

// 3) Перевірка можливості існування трикутника. Реалізувати функцію, яка приймає довжини трикутника; функція повертає true, якщо треугольник можливий, і false, якщо ні (див. умови існування трикутника).

// 4) Реалізувати функції розрахунку площі (або поверхні) наступної фігури (тіла): трикутника, прямокутника (або конуса, паралелепіпеда) в залежності від переданих розмірів фігури. Функція повинна повернути обчислене значення. Мінімум для однієї фігури на вибір.

// 2 функції на вибір реалізувати у форматі функціонального виразу (function expression).

// Буде плюсом використовувати JSDoc (на вибір 2 функції).

// ! Homework: JS. Objects

// 1. Створити об'єкт customer, що містить такі властивості:

const customer = {
  firstName: "Maria", // ім'я,
  lastName: "Sorokina", // прізвище,
  email: "sorokina@gmail.com", // електронна адреса,
  password: "qwerty", // password,
  phoneNumber: "+380000000000", // номер телефона,
  address: "Lviv, Shevchenka 3/10", // адреса (є рядком або *об'єктом з властивостями місто, вулиця, дім, квартира) ;
  outputAddress() {
    return `${this.address}`; // метод виведення адреси,
  },
  changePhoneNumber(newPhoneNumber) {
    return (this.phoneNumber = newPhoneNumber); // метод зміни номера телефону
  },
};

console.log(customer.outputAddress());
console.log(customer.phoneNumber);
console.log(customer.changePhoneNumber("+380999999999"));

// Додати об'єкту властивість isMale (для позначення статі, true - male, false - female).
// Видалити у об'єкта властивість адреса.

// Зробити копії об'єкту customer двома різними способами.

// 2. Перебрати і вивести властивості об'єкту cat
// {
//     name: 'Murka',
//     color: 'black',
//     isMale: false,
//     isFurnitureDemage: true,

// }
// циклом for..in.

// 3. Створити функцію-конструктор для створення об'єктів книг з властивостями:
// автор,
// назва,
// рік видання,
// видавництво (рядок або *об'єкт з властивостями місто, назва),
// ціна.
//    Передбачити методи:
// для обчислення віку книги (у роках),
// для зміни ціни книги.
