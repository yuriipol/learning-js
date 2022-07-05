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
const allTeg = document.querySelectorAll(".text");
allTeg.forEach((el) => {
  el.textContent = el.textContent + el.tagName.toLocaleLowerCase();
});

/*
? ЗАВДАННЯ №3
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
const olList = document.querySelector("ol");

const newLi = document.createElement("li");
newLi.textContent = "Soft Skills";

olList.append(newLi);
