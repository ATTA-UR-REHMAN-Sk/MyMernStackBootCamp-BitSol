const users = [
  {
    firstName: "Mark",
    lastName: "Zuckerberg",
    age: 20,
  },
  { firstName: "Mark", lastName: "Zuckerberg", age: 38 },
  { firstName: "Mark", lastName: "Zuckerberg", age: 30 },
  { firstName: "Mark", lastName: "Zuckerberg", age: 38 },
];

// function getListOfFullNm(item) {
//   return [item.firstName, item.lastName].join("");
// }
// console.log(users.map(getListOfFullNm));

//////////////////////2////////////////////////

// const counts = {};
// users.forEach(function (users) {
//   counts[users.age] = (counts[users.age] || 0) + 1;
// });
// console.log(counts);

//////////////////////3///////////////////////

// let filterArr = users.filter((a) => a.age < 30);
// filterArr.forEach(function (element) {
//   console.log(element);
// });
//console.log("", filterArr);

/////////////////////////////
/////////////Simple <Sum>//////////
const arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let index = 0; index < arr.length; index++) {
  sum += arr[index];
}
console.log(" ", sum);

////////////////Sum with Reduce Method/////////////////////

let totalSum = arr.reduce((val, arrIndex) => {
  return (val += arrIndex);
}, 0);
console.log("🚀 ~ file: Task2.js ~ line 48 ~ console", totalSum);
