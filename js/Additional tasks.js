// TASK 1: Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

const isNegativeNumber = Number(prompt("Input number"));

if (isNegativeNumber < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is not negative");
}

// TASK 2: Дано число. Проверьте, четное оно или нет.

const isEvenNumber = 16;

if (isEvenNumber % 2 === 0) {
  console.log("true");
} else {
  console.log("false");
}
