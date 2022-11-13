var inpArr = [5, 4, 7, 8, "c", 4, "d"];
var newArr = [];

function arrayScan(inpArr) {
  for (let i = 0; i < inpArr.length; i++) {
    if (!isNaN(inpArr[i])) {
      newArr.push(parseInt(inpArr[i]));
      var checkar = newArr.length;
    } else if (inpArr[i] == "c") {
      if (newArr.length != 0) {
        newArr.pop();
      }
    } else if (inpArr[i] == "d") {
      if (newArr.length != 0) {
        let doubl = newArr[newArr.length - 1] * newArr[newArr.length - 1];
        newArr.push(doubl);
        // newArr.push(Math.pow(newArr[newArr]));
      }
    } else if (inpArr[i] == "+") {
      let add = newArr[newArr.length - 1] + newArr.push(add);
    }
  }
  return newArr.reduce((a, b) => a + b);
}

arrayScan(inpArr);
console.log("print inputed Arr : ", inpArr);
console.log("print New array : ", newArr);
