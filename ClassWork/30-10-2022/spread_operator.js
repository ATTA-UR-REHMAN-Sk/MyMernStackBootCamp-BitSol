// const arr = ["a", "b", "c", "d"];
// // console.log("🚀 ~ file: spread_operator.js ~ line 4 ~ arr", arr);

// let another = [arr, "Maab", "Ali", "wasif"];
// // console.log("🚀 ~ file: spread_operator.js ~ line 4 ~ another", another);

// let concat = [...arr, another];
// console.log("🚀 ~ concated array", concat);

const abc = {
  a: "a",
  b: "b",
  c: { d: "d" },
};
const { b, ...re } = abc;
console.log(b);
console.log(re);
