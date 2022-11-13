////High-Order-Functions In JavaScript
//// Function in params(function) => return function

const radius = [2, 3, 5, 6];

const calculateArea = () => {
  let area = [];
  for (let i = 0; i < radius.length; i++) {
    area.push(radius[i] * radius[i] * Math.PI);
  }
  return area;
};
const calculateCircumference = () => {
  let area = [];
  for (let i = 0; i < radius.length; i++) {
    area.push(radius[i] * radius[i] * Math.PI);
  }
  return area;
};
const calculateDiameter = () => {
  let area = [];
  for (let i = 0; i < radius.length; i++) {
    area.push(radius[i] * radius[i] * Math.PI);
  }
  return area;
};

console.log(calculateArea);
console.log(calculateCircumference);
console.log(calculateDiameter);
