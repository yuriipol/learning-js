"use strict"; // строгий JS
/*
? Выполни рефакторинг методов объекта pizzaPalace, расставив 
? отсутствующие this в местах обращения к свойствам и методам объекта.
*/
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };
/*
! выполянем рефакторниг кода
*/
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName); // добавил this к pizzas.includes
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName); //обавил this к checkPizza

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };
// console.log(pizzaPalace.order("Smoked"));

/*
? Перед увольнением разработчик сломал исходный код управления аккаунтами 
? пользователей нашего сервиса доставки еды. Выполни рефакторинг методов объекта customer, 
? расставив отсутствующие this при обращении к свойствам объекта.
? После объявления объекта мы добавили вызовы методов в той последовательности, в которой твой 
? код будут проверять тесты. Пожалуйста ничего там не меняй.
*/
/*
! выполянем рефакторниг методов обьекта
*/
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

/*
? Тестировщики нашли баги в коде сервиса хранения истории заказов еды. 
? Тебе необходимо исправить их, правильно расставив this в методах объекта historyService, 
? чтобы методы начали работать правильно.
*/
// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map((order) => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map((order) => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter((order) => order.email === email);
//   },
//   // Change code above this line
// };
// console.log(historyService.getOrdersLog());

/*
? Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.
*/
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;
// console.log(child.surname);

/*
? Измени код, построив цепочку прототипов так, чтобы 
? объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.
*/
const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
// Change code below this line

const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

// Change code above this line
console.log(child.heritage);

/*
? Используя ключевое слово class объяви класс Car с пустым телом.
*/
