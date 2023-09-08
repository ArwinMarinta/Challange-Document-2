const getAngkaTerbesarKedua = (dataNumber) => {
  //Mengecek kondisi jika parameter tidak terdeteksi maka akan mengembalikan "Error : Paramter tidak terdeteksi!!"
  if (typeof dataNumber == "undefined") {
    return "Error : Paramter tidak terdeteksi!!";
    //Mengecek kondisi jika datanumber bukan berbentuk array menggunakan method Array.isArray() makan akan mengembalikan "Error : data tidak berbentuk array!!"
  } else if (!Array.isArray(dataNumber)) {
    return "Error : data tidak berbentuk array!!";
    //Mengecek kondisi jika dataNumber kurang lebih dari 2 maka akan mengembalikan "Error : panjang array tidak lebih dari 2 angka"
  } else if (dataNumber.length < 2) {
    return "Error : panjang array tidak lebih dari 2 angka";
  }

  //Membuat sebuah variabel untuk mengurutkan data menggunakan method sort dari angka besar ke kecil
  const urutData = dataNumber.sort((a, b) => b - a);
  //Mengambil array ke dua dari data yang telah di urutkan
  const angkaKedua = urutData[1];
  return angkaKedua;
};

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
