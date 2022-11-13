//// NESTED Objects In JavaScript
var obj = {
  studentId: 1,
  studentName: "Jhone",
  adress: {
    city: "rawalpndi",
    country: "Paki",
    uniAdd: {
      uniFun() {
        return this.studentId;
      },
      city: "Islamabad",
      country: "Pak",
      streetAdd: {
        streetNo: "2B2",
        apartment: 2,
      },
    },
  },
};

console.log(
  "Nested Object In JavaScript : ",
  obj.adress.uniAdd.streetAdd.apartment
);

console.log("Concate String : ", obj.adress.uniAdd.uniFun());
