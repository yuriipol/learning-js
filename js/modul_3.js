"use strict"; // строгий JS

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     let indexpotion = -1;
//     for (let i = 0; i <= this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (potion.name === potionName) {
//         indexpotion = i;
//         break;
//       }
//     }
//     if (indexpotion === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }
//     this.potions.splice(indexpotion, 1);
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };
// // console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 520 }));
// // console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.potions);
function addOverNum(num1, ...args) {
  let total = 0;

  for (const arg of args) {
    if (num1 < arg) {
      total += arg;
    }
  }

  return total;
  // Change code above this line
}
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
