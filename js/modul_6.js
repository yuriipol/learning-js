/*
? ЗАВДАННЯ №1
? 1. В списку елементів розмітки потрібно змінити значення контенту з Item на Пункт.
? 2. Тексту кожного елементу списка потрібно змінити колір на рандомний.
? 3. Виведіть під списком повідомлення з інформацією про к-сть елементів списку.
? <ul class="js-gallery">
?    <li>Item-1</li>
?    <li>Item-1</li>
?    <li>Item-1</li>
?    <li>Item-1</li>
?   <li>Item-1</li>
? </ul>

*/
// const ulList = document.querySelector(".js-gallery");
// const liList = ulList.querySelectorAll("li");

// //Завдання №1 та №2
// const liArray = [...liList];

// const changeLiText = liArray.forEach((el) => {
//   el.textContent = "Пункт";
//   el.style.color = getRandomHexColor();
// });

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// //Завдання 3
// const quantityLi = liList.length;
// //створюємо елемент в пам'яті та даємо йому клас
// const textQuantityLi = document.createElement("p");
// textQuantityLi.classList.add("text-quantity");
// //додаємо елемент в DOM після ul
// ulList.after(textQuantityLi);
// //додаємо запис в елементі р про кількість елементів li
// textQuantityLi.textContent = quantityLi;

/* 
? ЗАВДАННЯ №2
? <div class="wrapper">
?  <p>Hello world</p>
?  <p id="elem">Hello CSS</p>
?  <p class="first-elem js-first-elem">Hello HTML</p>
?  <p title="HELLO!">Hello JS</p>
? </div>

! querySelector
? Отримати посилання на кожен елемент р з div.wrapper по черзі, використовуючи різні селектори.

! querySelectorAll
? Отримати посилання на всі елементи 'р' за селектором тега.
? Перебрати їх та вивести в консоль.

! getElementById
? Отримати посилання елемент c id "elem".

! classList
? Даний елемент # elem.
? Отримати посилання на нього.
? Додайте йому класи 'blue' та 'bg-red'.
? Видаліть у нього клас bg-red
? Перевірте наявність у нього класу 'blue' та 'bg-red'

! style
? Даний елемент # elem.
? Задайте йому колір кольору tomato
? Додайте йому чорну межу шириною 5рх
*/
// // завданя 2.1
// const p1 = document.querySelector("p");
// console.log(p1);
// const p2 = document.querySelector("#elem");
// console.log(p2);
// const p3 = document.querySelector(".js-first-elem");
// console.log(p3);
// const p4 = document.querySelector('[title="HELLO!"]');
// console.log(p4);
// // завданя 2.2
// const allP = document.querySelectorAll("p");
// allP.forEach((el) => {
//   console.log(el);
// });
// // завданя 2.3
// const tegP = document.getElementById("elem");
// console.log("~ tegP", tegP);
// // завданя 2.4
// const pID = document.querySelector("#elem");
// pID.classList.add("blue", "bg-red");
// console.log(pID);
// pID.classList.remove("bg-red");
// console.log(pID);
// pID.classList.toggle("bg-red");
// console.log(pID);
// // завданя 2.5
// pID.style.color = "tomato";
// pID.style.border = "solid 5px black";
/*
? ЗАВДАННЯ №3
? <div class="text">My tag is -></div>
? text node
? <h1 class="text">My tag is -></h1>
? <p class="text">My tag is -></p>
? <span class="text">My tag is -></span>
? <h4 class="text">My tag is -></h4>

? Дано елементи з класом text.
? Отримайте посилання на всі ці елементи.
? Додайте кожному елементу на кінець назву його тега в нижньому регістрі.
*/
// const allTeg = document.querySelectorAll(".text");
// allTeg.forEach((el) => {
//   el.textContent = el.textContent + el.tagName.toLocaleLowerCase();
// });

/*
? ЗАВДАННЯ №4
? <ol>
?    <li>Html</li>
?    <li>Css</li>
?    <li>JS</li>
?   <li>React</li>
?    <li>Node</li>
? </ol>


? Даний ol. Вставте нову li з текстом 'Soft Skills' в кінець списку.
? Вставте перед списком заголовок із текстом 'Plan:'.
*/
// const olList = document.querySelector("ol");

// const newLi = document.createElement("li");
// newLi.textContent = "Soft Skills";

// olList.append(newLi);

/*
? ЗАВДАННЯ №5

?Є масив користувачів, вивести на сторінку картку кожного користувача з ім'ям, віком і кольором очей.
? Використовувати шаблонні рядки та insertAdjacentHTML / innerHTML
? Очистити список
<li>
  <h2>Moore Hensley</h2>
  <p>Age: 37</p>
  <span>Eye color: </span>
  <span style="background-color: blue"></span>
</li>
*/
const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    phone: "+1 (848) 556-2344",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    phone: "+1 (855) 582-2465",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 16,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    phone: "+1 (814) 593-3825",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    phone: "+1 (909) 547-2687",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 14,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    phone: "+1 (956) 512-2693",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    phone: "+1 (876) 411-2433",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 17,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    phone: "+1 (979) 504-2554",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
/*
<li>
  <h2>Moore Hensley</h2>
  <p>Age: 37</p>
  <span style="background-color: blue>Eye color: </span>
</li>
*/
const listGallary = document.querySelector(".gallary");

const makeGallary = ({ name, age, eyeColor } = {}) => {
  return `<li>
  <h2>${name}</h2>
  <p>Age: ${age}</p>
  <span style="background-color: ${eyeColor}">Eye color: ${eyeColor}</span>

</li>`;
};
const gallaryArray = users.map(makeGallary);
listGallary.insertAdjacentHTML("afterbegin", gallaryArray.join(""));

// listGallary.innerHTML = "";
