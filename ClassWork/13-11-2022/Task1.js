//// Find Unique Highest No. From Multiple Arrays in JavaScript

function getuniqueMax(params) {
  let bigNumber = 0;

  //let variable = params.flat()
  // console.log("",)

  params.forEach(function (element) {
    let nonRepeat = element.filter(
      (ele) => element.filter((el) => el == ele).length === 1
    );
    let HighestNo = Math.max(...nonRepeat);
    //bigNo = Math.max(HighestNo,bigNo)
    if (bigNumber < HighestNo) {
      bigNumber = HighestNo;
    }
  });
  return bigNumber;
}

console.log([
  [1, 2, 3, 4, 1, 2, 5],
  [2, 1, 3, 4, 2, 6, 4],
  [3, 1, 4, 7, 2, 7],
]);

console.log(
  "NonRepeating MaxVale : ",
  getuniqueMax([
    [1, 2, 3, 4, 1, 2, 5],
    [2, 1, 3, 4, 2, 6, 4],
    [3, 1, 4, 7, 2, 7],
  ])
);
