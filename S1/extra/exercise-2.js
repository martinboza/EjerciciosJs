const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true }
];

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    let replaced = false;
    for (const fruit of fruits) {
      if (!foodSchedule.some(item => item.name === fruit) && !replaced) {
        foodSchedule[i].name = fruit;
        replaced = true;
      }
    }
  }
}

console.log(foodSchedule);
