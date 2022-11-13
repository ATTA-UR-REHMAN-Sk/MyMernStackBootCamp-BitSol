////Anonmus Functions In JavaScript

// function five(p) {
//   return p ? p(5) : 5;
// }
// function two(p2) {
//   return p2 ? p2(2) : 2;
// }
// function times(p7) {
//   return (a) => {
//     return a * p7;
//   };
// }
// function add(p5) {
//   return (a) => {
//     return a + p5;
//   };
// }

// function f1(f1) {
//   return f1 ? f1(2) : 2;
// }
// function f2(f2) {
//   return f2 ? f2(2) : 2;
// }
// function f3(f3) {
//   return f1() + f2();
// }

// //five(7);
// console.log("result :", five(times(two())));
// console.log("result :", five(add(two())));
// console.log("Result : ", f3());

////Processural Functions flow
// var baseSalary = 30000;
// var OverTime = 12;
// var bonuses = 2000;

// function getWay(baseSalary, OverTime, bonuses) {
//   return baseSalary + OverTime * bonuses;
// }
// console.log("Result : ", getWay(50000, 12, 500));

////Object Functions IN JavaScript
// const EmploySalary = {
//   baseSalary: 20000,
//   Overtime: 12,
//   bonuses: 400,
//   getWay() {
//     return this.baseSalary + this.Overtime * this.bonuses;
//   },
// };

// //const Result = EmploySalary();
// console.log("Result Employ : ", EmploySalary.getWay());

////Inheritence Classes In JavaScript
class Parent {
  // var properties;

  constructor() {}
}
class child extends parent {
  constructor() {}
}
