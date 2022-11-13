////High-Order-Functions In JavaScript
//// Function in params(function) => return function

// const radius = [2, 3, 5, 6];

// const calculateArea = () => {
//   let area = [];
//   for (let i = 0; i < radius.length; i++) {
//     area.push(radius[i] * radius[i] * Math.PI);
//   }
//   return area;
// };
// const calculateCircumference = () => {
//   let area = [];
//   for (let i = 0; i < radius.length; i++) {
//     area.push(radius[i] * radius[i] * Math.PI);
//   }
//   return area;
// };
// const calculateDiameter = () => {
//   let area = [];
//   for (let i = 0; i < radius.length; i++) {
//     area.push(radius[i] * radius[i] * Math.PI);
//   }
//   return area;
// };

// console.log(calculateArea);
// console.log(calculateCircumference);
// console.log(calculateDiameter);

/////////New Way to perform this method
//radius1.map(calculate);

/// creare functional array
radious1 = [1, 3, 4, 6, 7];
const calculateCircumf = (params) => 2 * params * Math.PI;

Array.prototype.calculateCf = (formula, radiousArr) => {
  let output = [];
  for (let i = 0; i < radiousArr.length; i++) {
    output.push(formula(radiousArr[i]));
  }
  return output;
};
//radious1.calculateCf(calculateCircumf, radious1);

console.log(radious1.calculateCf(calculateCircumf, radious1));
