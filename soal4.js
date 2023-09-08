const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalPenjualan: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalPenjualan: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalPenjualan: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalPenjualan: 90,
  },
];

const hitungTotalPenjualan = (dataPenjualan) => {
  return (dataPenjualan = dataPenjualan.reduce((total, product) => {
    return total + product.totalPenjualan;
  }, 0));
};

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));
