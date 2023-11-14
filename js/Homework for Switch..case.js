// TASK 1: Запитати у користувача номер дня тижня та вивести відповідну повну рядкову назву (наприклад, якщо користувач вводить 7 – виводиться повідомлення "неділя").
// Передбачити обробку помилкового введення номера дня тижня (default).

const numberDay = Number(prompt("Input number of the day of the week"));

switch (numberDay) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("You must enter a number from 1 to 7");
    break;
}

// TASK 2: У змінній day лежить якесь число з інтервалу від 1 до 31. Визначте, до якої декади місяця потрапляє це число (до першої, другої чи третьої).

const decadeNumber = 29;

switch (decadeNumber) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    console.log("First decade");
    break;
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
  case 20:
    console.log("second decade");
    break;
  case 21:
  case 22:
  case 23:
  case 24:
  case 25:
  case 26:
  case 27:
  case 28:
  case 29:
  case 30:
    console.log("third decade");
    break;
}
