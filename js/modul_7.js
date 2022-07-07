/*
? Інпут (input, focus, blur)

? Зробіть так, щоб
? - при фокусі на інпут його кордон ставав жовтим (клас .active)
? - при введенні в інпут введений текст потрапляв до абзацу під інпутом
? - при втраті фокусу перевіряємо текст в інпуті, і якщо він порожній, 
? фарбуємо кордон у червоний колір (клас .error),
? а якщо ні - просто забираємо жовту рамку.
*/

// const input = document.querySelector("input");
// const outputText = document.querySelector("b");

// input.addEventListener("focus", changeColor);
// input.addEventListener("keydown", addText);
// input.addEventListener("blur", examinationFn);

// function changeColor() {
//   input.classList.add("active");
// }
// function addText() {
//   outputText.textContent = input.value;
// }

// function examinationFn() {
//   if (input.value === "") {
//     input.classList.remove("active");
//     input.classList.add("error");
//   } else if (input.value !== "") {
//     input.classList.remove("error");
//     input.classList.add("active");
//   }
// }
/*
? Даний простий прихований popup з класом popup.
? При натисканні на кнопку показати popup (клас popup_open).
? При натисканні ESC приховати.
? Слухач ESC не повинен постійно висіти на window, а кнопка та слухач кліка повинні не діяти при відкритій модалці.
? Перевірити це в тілі функції-обробника.
*/
// const popup = document.querySelector(".popup");
// const btnPopup = document.querySelector(".open-popup-btn");

// btnPopup.addEventListener("click", showMassege);

// function showMassege() {
//   popup.classList.add("popup_open");
//   btnPopup.setAttribute("disabled", "disabled");
//   window.addEventListener("keydown", onEscPressKey);
// }
// function onEscPressKey(event) {
//   if (event.code === "Escape") {
//     popup.classList.remove("popup_open");
//     window.removeEventListener("keydown", onEscPressKey);
//     btnPopup.removeAttribute("disabled");
//   }
// }
/*
? Потрібно створити галерею з 16ти ел-ів розміром 4х4, динамічно
? додавши в ul.list ел-ти li.item з контентом "...".
? По кліку на елемент галареї потрібно перезаписати його контент значенням
? порядкового номера цього елемента.
*/
const array = Array(16).fill(null);
const listGallery = document.querySelector(".js-list");

const makeLi = (el, idx) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = "...";
  li.dataset.index = idx + 1;
  return li;
};

const newArray = array.map(makeLi);

listGallery.append(...newArray);

const changeTextArea = (event) => {
  if (event.target.tagName !== "LI") {
    return;
  }

  event.target.textContent = event.target.dataset.index;
};
listGallery.addEventListener("click", changeTextArea);
