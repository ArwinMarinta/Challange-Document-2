const getAngkaTerbesarKedua = (dataNumber) => {
  if (typeof dataNumber == "undefined") {
    return "Error : Paramter tidak terdeteksi!!";
  } else if (!Array.isArray(dataNumber)) {
    return "Error : data tidak berbentuk array!!";
  } else if (dataNumber.length < 2) {
    return "Error : panjang array tidak lebih dari 2 angka";
  }

  const urutData = dataNumber.sort((a, b) => b - a);
  const angkaKedua = urutData[1];
  return angkaKedua;
};

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
