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
// const array = Array(16).fill(null);
// const listGallery = document.querySelector(".js-list");

// const makeLi = (el, idx) => {
//   const li = document.createElement("li");
//   li.classList.add("item");
//   li.textContent = "...";
//   li.dataset.index = idx + 1;
//   return li;
// };

// const newArray = array.map(makeLi);

// listGallery.append(...newArray);

// const changeTextArea = (event) => {
//   if (event.target.tagName !== "LI") {
//     return;
//   }

//   event.target.textContent = event.target.dataset.index;
// };
// listGallery.addEventListener("click", changeTextArea);

/*
? Існує форма з одним інпутом, куди вводиться текст. І є чекбокс.
   ? Поки чекбокс не натиснутий, кнопка на формі неактивна.
   ? Натисканням Enter в інпуті або натисканням на кнопку Add, в список нижче, додається todo-нотатка.
   ? Очистити інпут
   ? Прибрати перезавантаження, звертатися через форму (elements) та ім'я інпуту
   ? При натисканні на todo-замітку у списку, вона стає виконаною, тобто. текст закреслюється (клас complete)
   ? Чекбокс при додаванні нотатки знову має стати не вибраним, а кнопка знову недоступною
   ? Додати кнопку Видалити на кожну нотатку (+функціонал видалення)
*/
// const form = document.querySelector("form");
// const input = document.querySelector(".input__text");
// const listToDo = document.querySelector(".todo-list");
// const checkboxConfirm = document.querySelector(".checkbox");
// const btn = document.querySelector("button");

// const onFormSubmit = (event) => {
//   event.preventDefault();

//   form.reset();
// };
// form.addEventListener("submit", onFormSubmit);

// const onInputChange = (event) => {
//   // console.log(event.currentTarget.value);
//   const li = document.createElement("li");
//   const btnlist = document.createElement("button");
//   btnlist.textContent = "delete";
//   li.textContent = event.currentTarget.value;
//   li.append(btnlist);
//   listToDo.append(li);
//   btn.disabled = true;

//   li.addEventListener("click", onClickLiItem);
//   function onClickLiItem() {
//     // console.log(event.target);
//     li.classList.toggle("complete");
//     btnlist.addEventListener("click", deleteEl);

//     function deleteEl() {
//       li.remove();
//     }
//   }
//   form.reset();
// };

// const onChangeConfirm = (event) => {
//   // console.log(event.currentTarget.checked);
//   btn.disabled = !event.currentTarget.checked;
// };
// checkboxConfirm.addEventListener("change", onChangeConfirm);
// input.addEventListener("change", onInputChange);
/*
? Є сині прямокутники.
? 1) При натисканні на прямокутник він повинен змінювати колір з синього на жовтий, з жовтого на синій (клас block_active).
? 2) При натисканні на прямокутник, він стає жовтим.
?    При цьому якщо є вже жовтий квадрат, то він стає синім.
?    Так можна кликати на будь-який квадрат, він стає жовтим, а старий жовтий квадрат назад синім і тд.
? 3) Внизу таблиці є кнопка "змінити кольори".
?    При її натисканні всі кольори клітин змінюються на протилежні.
*/
const container = document.querySelector(".container");
const containerElemAll = document.querySelectorAll(".js-block");
const btnChangeColorAll = document.querySelector(".reverse");

container.addEventListener("click", onClickChangeColor);

function onClickChangeColor(event) {
  if (event.target.tagName !== "DIV") {
    return;
  }

  const activeBlock = container.querySelector(".block_active");
  console.log("~ activeBlock", activeBlock);
  if (activeBlock) {
    activeBlock.classList.remove("block_active");
  }

  event.target.classList.add("block_active");
}

btnChangeColorAll.addEventListener("click", onClickChangeAllColors);
function onClickChangeAllColors() {
  const active = [...containerElemAll].filter((el) =>
    el.classList.contains("block_active")
  );
  const unActiv = [...containerElemAll].filter(
    (el) => !el.classList.contains("block_active")
  );
  active.forEach((element) => {
    element.classList.remove("block_active");
  });
  unActiv.forEach((element) => {
    element.classList.add("block_active");
  });
}
