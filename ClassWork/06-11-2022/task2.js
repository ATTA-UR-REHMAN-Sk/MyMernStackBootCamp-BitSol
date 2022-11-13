//Task
//1..Write a javascript program to check a credit card number.

//Task
//2..Write a javascript program to check.

// const validateCardNumber = (number) => {
//   //Check if the number contains only numeric value
//   //and is of between 13 to 19 digits
//   const regex = /^[0-9]+(-[0-9]+)+$/;
//   if (regex.test(number)) {
//     return true;
//   }
//   return false;

//   //return luohnCheck(number);
// };

// // const luhnCheck = (val) => {
// //   let checksum = 0; // running checksum total
// //   let j = 1; // takes value of 1 or 2

// //   // Process each digit one by one starting from the last
// //   for (let i = val.length - 1; i >= 0; i--) {
// //     let calc = 0;
// //     // Extract the next digit and multiply by 1 or 2 on alternative digits.
// //     calc = Number(val.charAt(i)) * j;

// //     // If the result is in two digits add 1 to the checksum total
// //     if (calc > 9) {
// //       checksum = checksum + 1;
// //       calc = calc - 10;
// //     }

// //     // Add the units element to the checksum total
// //     checksum = checksum + calc;

// //     // Switch the value of j
// //     if (j == 1) {
// //       j = 2;
// //     } else {
// //       j = 1;
// //     }
// //   }

// // console.log(validateCardNumber("213a-3338-3499-3338"));
