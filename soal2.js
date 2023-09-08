const checkTypeNumber = (givenNumber) => {
  //Mengecek kondisi jika parameter tidak terdeteksi maka akan mengembalikan "Error : Bro where is the parameter?"
  if (typeof givenNumber == "undefined") {
    return "Error : Bro where is the parameter?";
    //Mengecek kondisi jika parameter type nya buka number makan akan mengembalikan "Error : Invalid data type"
  } else if (typeof givenNumber !== "number") {
    return "Error : Invalid data type";
    //Mengecek jika parameter nya berisi angka jika habis di bagi 2, maka akan mengembalikan "Genap"
  } else if (givenNumber % 2 === 0) {
    return "Genap";
    //Mengecek angka jika tidak habis di bagi 2 maka akan mengembalikan nilai "Ganjil"
  } else {
    return "Ganjil";
  }
};

console.log(checkTypeNumber(3)); //Ganjil
console.log(checkTypeNumber(10)); // Genap
console.log(checkTypeNumber("3")); // Error : Invalid data type
console.log(checkTypeNumber({})); //Error : Invalid data type
console.log(checkTypeNumber([])); //Error : Invalid data type
console.log(checkTypeNumber()); //"Error : Bro where is the parameter?"
