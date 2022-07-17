/*
! task 1 PROMISE
 */
//? First step
// console.log("Первый лог обращения!!!");
// const list = fetch("https://api.sampleapis.com/beers/ale");
// console.log("Ура все получили!");
// console.log("Beers -->", list);
//? Second step
// const listPromise = fetch("https://api.sampleapis.com/beers/ale");
// listPromise.then((data) => {
//   console.log(data);
// });
//? Third step
// const listPromise = fetch("https://api.sampleapis.com/beers/ale");
// listPromise
//   .then((data) => data.json())
//   .then((beers) => {
//     console.log(beers);
//   });
//? Fourth step
// const listPromise = fetch("https://api.sampleapis.com/beers/ale");
// listPromise
//   .then((data) => data.json())
//   .then((beers) => beers)
//   .catch((error) => console.log("Ошибка!-->>", error));
//? CREATE PROMISE STEP1
// const beers = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(Error("Ваше пиво подано АЛКАШ!!!"));
//   }, 2000);
// });

// beers.then((data) => console.log(data)).catch((err) => console.log(err));
//? Создадим функцию, которая будет передавать id и возвращать обьект одного члена компании,
//? но будет его менять, расширяя coofee: {все характеристики кофе}
// const company = [
//   { name: "Yurii", id: 111, coffee: "Latte" },
//   { name: "Oleksandr", id: 222, coffee: "Espresso" },
//   { name: "Maksim", id: 333, coffee: "Cappucino" },
// ];
// const getCofee = (name) => {
//   const coffePromise = fetch("https://api.sampleapis.com/coffee/hot");
//   return coffePromise
//     .then((data) => data.json())
//     .then((list) => {
//       const coffee = list.find((el) => el.title === name.coffee);
//       return {
//         ...name,
//         coffee,
//       };
//     });
// };

// const getCompanyMember = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const name = company.find((res) => res.id === id);
//       if (name) {
//         resolve(name);
//       } else {
//         reject(Error("Член компании не найден!"));
//       }
//     }, 2000);
//   });
// };

// getCompanyMember(222)
//   .then((data) => getCofee(data))
//   .then((newName) => console.log(newName))
//   .catch((error) => console.log(error));
//? Если мы ожидаем данные от двух и более промисов

// const makeCoffee = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Coffee complite!");
//     }, 2000);
//   });
// };

// const makeToast = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Toast complite!");
//     }, 3000);
//   });
// };

// const coffeePromise = makeCoffee();
// const toastPromise = makeToast();

// coffeePromise.then((data) => console.log(data));
// toastPromise.then((data) => console.log(data));
// //!или еще так
// Promise.all([coffeePromise, toastPromise]).then(
//   ([coffeePromise, toastPromise]) => console.log(coffeePromise, toastPromise)
// );
//? 2 промиса через fetch

// const beersPromise = fetch("https://api.sampleapis.com/beers/ale");
// const winesPromise = fetch("https://api.sampleapis.com/wines/reds");

// Promise.all([beersPromise, winesPromise]).then((data) => {
//   return Promise.all(data.map((el) => el.json())).then((finalData) =>
//     console.log(finalData)
//   );
// });

const array = [{ name: "English", population: 345 }];

const getname = (array) => {
  return array.map((el) => el.name);
};
console.log(getname(array));
