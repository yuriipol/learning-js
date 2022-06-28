"use strict"; // строгий JS

/* 
? 1.Дополни функцию makeMessage так, чтобы она 
? ожидала вторым параметром (параметр callback) 
? колбэк-функцию и возвращала ее вызов. Функция deliverPizza
? или makePizza будет передаваться как колбэк и ожидать 
? аргументом имя готовой доставляемой пиццы.
 */
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Ultracheese", deliverPizza));

/* 
? 2.Дополни второй вызов функции makePizza(pizzaName, callback), 
? передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), 
? которая логирует строку "Eating pizza <имя пиццы>".
*/
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, makePizza, onOrderError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return makePizza(pizzaName);
//     }
//     return onOrderError(
//       `There is no pizza with a name ${pizzaName} in the assortment.`
//     );
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// // pizzaPalace.order("Smoked", makePizza, onOrderError);
// // pizzaPalace.order("Four meats", makePizza, onOrderError);
// // pizzaPalace.order("Big Mike", makePizza, onOrderError);
// // pizzaPalace.order("Vienna", makePizza, onOrderError);
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

/*
? рефакторинг кода на новый цикл
 */

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   orderedItems.forEach(function (number) {
//     totalPrice += number;
//   });

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

/*
? рефакторинг кода на новый цикл
 */

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   // Change code above this line
//   return filteredNumbers;
// }
//
/*
? рефакторинг кода на новый цикл
 */

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function (number) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3, 4], [2, 4]));

/*
? СТРЕЛОЧНЫЕ ФУНКЦИИ
*/

/*
? Функция changeEven(numbers, value) принимает массив чисел numbers
? и обновляет каждый элемент, значение которого это чётное число, 
? добавляя к нему значение параметра value.

? Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла 
? массив чисел numbers, а создавала, наполняла и возвращала новый массив 
? с обновлёнными значениями.
*/
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       number = number + value;
//     }
//     newArray.push(number);
//   });
//   return newArray;

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }
//   // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// Change code below this line

/*
? Используя метод map() сделай так, чтобы в переменной titles 
? получился массив названий книг (свойство title) из всех объектов массива books.
*/

// const titles = books.map((book) => book.title);
// console.log(titles);

/*
? Дополни код так, чтобы в переменной allGenres был массив
? всех жанров книг (свойство genres) из массива books, а 
? в переменной uniqueGenres массив уникальных жанров - без повторений.
*/

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index
// );
// console.log(uniqueGenres);

/*
? Используя метод filter() дополни код так, чтобы:

? В переменной topRatedBooks получился массив кни
? рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
? В переменной booksByAuthor получился массив книг
? написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.
*/

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

// console.log(books);
// // console.log(topRatedBooks);
// console.log(booksByAuthor);

/*
? Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она 
? возвращала массив пользователей у которых цвет глаз (свойство eyeColor) 
? совпадает со значением параметра color.
*/
// Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   const newArray = users.filter(({ eyeColor }) => eyeColor === color);
//   return newArray;
// };
// Change code above this line
// console.log(
//   getUsersWithEyeColor(
//     [
//       {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//       },
//       {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//       },
//       {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//       },
//       {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//       },
//       {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//       },
//       {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//       },
//       {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//       },
//     ],
//     "blue"
//   )
// );

/*
? Дополни функцию getUsersWithAge(users, minAge, maxAge) так, 
? чтобы она возвращала массив пользователей, возраст которых (свойство age) 
? попадает в промежуток от minAge до maxAge.
*/
// Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//   const newArray = users.filter(({ age }) => age >= minAge && age <= maxAge);
//   return newArray;
// };
// Change code above this line

// console.log(
//   getUsersWithAge(
//     [
//       {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37,
//       },
//       {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34,
//       },
//       {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24,
//       },
//       {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21,
//       },
//       {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27,
//       },
//       {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38,
//       },
//       {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39,
//       },
//     ],
//     20,
//     30
//   )
// );

/*
? Дополни функцию getUsersWithFriend(users, friendName) так, 
? чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. 
? Массив друзей пользователя хранится в свойстве friends.
*/
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];
// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   const newArray = users.filter(({ friends }) => friends.includes(friendName));
//   return newArray;
// };
// // Change code above this line

// console.log(getUsersWithFriend(users, "Briana Decker"));

/*
? Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей 
? всех пользователей (свойство friends). У нескольких пользователей могут быть 
?одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.
*/
// Change code below this line
// const getFriends = (users) => {
//   const friendArray = users.flatMap((user) => user.friends);
//   const filteredFriendArray = friendArray.filter(
//     (friend, index, array) => array.indexOf(friend) === index
//   );
//   return filteredFriendArray;
// };
// // Change code above this line
// console.log(getFriends(users));

/*
? Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, 
? значение свойства isActive которых true.
*/
// const getActiveUsers = (users) => {
//   const activeUsersArray = users.filter(({ isActive }) =>
//     isActive ? true : false
//   );
//   return activeUsersArray;
// };

// console.log(getActiveUsers(users));

/*
? Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, 
? значение свойства isActive которых false.
*/
// const getInactiveUsers = (users) => {
//   const inactivUsersArray = users.filter(({ isActive }) =>
//     !isActive ? true : false
//   );
//   return inactivUsersArray;
// };
// console.log(getInactiveUsers(users));

/*
? Используя метод find() дополни код так, чтобы:

? В переменной bookWithTitle получился объект книги название которой (свойство title) 
? совпадает со значением переменной BOOK_TITLE.
? В переменной bookByAuthor получился объект книги автор который (свойство author) 
? совпадает со значением переменной AUTHOR.
*/
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);
// console.log(bookWithTitle);
// console.log(bookByAuthor);
/*
? Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, 
? почта которого (свойство email) совпадает со значением параметра email.
*/
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// // Change code below this line
// const getUserWithEmail = (users, email) =>
//   users.find((user) => user.email === email);
// // Change code above this line
// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));

/*
? Используя метод every() дополни код так, чтобы:

? В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
? В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
? В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
? В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
? В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
? В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.
*/
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => !(value % 2 === 0));

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(
//   (value) => !(value % 2 === 0)
// );

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => !(value % 2 === 0));

// console.log(eachElementInThirdIsEven);
// console.log(eachElementInSecondIsOdd);
/*
? Дополни функцию isEveryUserActive(users) так, чтобы она проверяла 
? все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.
 */
// const isEveryUserActive = (users) => users.every((user) => user.isActive);
// console.log(isEveryUserActive(users));

/*
? Используя метод some() дополни код так, чтобы:

? В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
? В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
? В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
? В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
? В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
? В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.
*/
//

/*
? Дополни функцию isAnyUserActive(users) так, чтобы она проверяла 
? наличие активных пользователей (свойство isActive) и возвращала true или false.
*/
// // Change code below this line
// const isAnyUserActive = (users) =>
//   users.some((user) => (user.isActive ? true : false));
// // Change code above this line

// console.log(isAnyUserActive(users));

/*
? Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. 
? Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.
*/
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, number) => acc + number);
// console.log(totalPlayTime);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

/*
? Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, 
? и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время 
? (свойство playtime) на количество игр (свойство gamesPlayed).
*/
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce(
//   (acc, player) => acc + player.playtime / player.gamesPlayed,
//   0
// );
// console.log(totalAveragePlaytimePerGame);

/*
? Дополни функцию calculateTotalBalance(users) так, чтобы она 
? считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.
*/
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];
// // Change code below this line
// const calculateTotalBalance = (users) =>
//   users.reduce((acc, user) => acc + user.balance, 0);
// // Change code above this line
// console.log(calculateTotalBalance(users));

/*
? Дополни функцию getTotalFriendCount(users) так, чтобы она 
? считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.
*/
// const getTotalFriendCount = (users) => {
//   const totalFriends = users.reduce(
//     (acc, user) => acc + user.friends.length,
//     0
//   );
//   return totalFriends;
// };
// console.log(getTotalFriendCount(users));

/*
? Дополни код так, чтобы в переменной ascendingReleaseDates 
? получилась отсортированная по возрастанию копию массива releaseDates, 
? а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.
*/
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();
// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);
