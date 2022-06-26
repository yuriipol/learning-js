"use strict"; // строгий JS

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

/*Перебираем массив с помощью цикла for of (если не нужен доступ доступ к счетчику итерации i)*/
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

/*Перебираем строку с помощью цикла for of (если не нужен доступ доступ к счетчику итерации i)*/
// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

/* Будем искать имя клиента в массиве имен,
если нашли - прервем цикл, так как нет смысла 
искать дальше, имена у нас уникальные */
// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = "Клиента с таким именем нету в базе данных!";
// }

// console.log(message); // "Клиент с таким именем есть в базе данных!"

/*Используем цикл для вывода только чисел больше определенного значения.*/
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

/* Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
 и управление передаётся на следующую итерацию.*/
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

/* Рассмотрим пример использования arguments в функции, которая умножает любое количество аргументов */
function multiply() {
  let total = 1;

  for (const argument of arguments) {
    total *= argument;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120
