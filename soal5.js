const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduct: "Pulang-Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduct: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002921",
    namaProduct: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002421",
    namaProduct: "Pulang-Pergi",
    penulis: "Tere Liye",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const getInfoPenjualan = (dataPenjualan) => {
  //Total Modal
  const totalModal = dataPenjualan.reduce((total, product) => {
    return total + product.hargaBeli * (product.totalTerjual + product.sisaStok);
  }, 0);
  //total Keuntungan
  const totalKeuntungan = dataPenjualan.reduce((total, product) => {
    return total + (product.hargaJual - product.hargaBeli) * product.totalTerjual;
  }, 0);
  //Persentasi ke Untungan
  const persentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(0) + "%";

  //produk Buku Terlaris
  const produkBukuTerlaris = dataPenjualan.reduce((terlaris, product) => {
    if (product.totalTerjual > terlaris.totalTerjual) {
      return product;
    } else {
      return terlaris;
    }
  }, dataPenjualan[0]);

  // penulis terlaris
  // const penulisTerlaris = dataPenjualan.reduce((penulis, product) => {
  //   if (product.totalTerjual > penulis.totalTerjual) {
  //     return product;
  //   } else {
  //     return penulis;
  //   }
  // });

  //format ke rupiah
  const rupiahFormat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return {
    totalKeuntungan: rupiahFormat.format(totalKeuntungan),
    totalModal: rupiahFormat.format(totalModal),
    persentaseKeuntungan,
    produkBukuTerlaris: produkBukuTerlaris.namaProduct,
    penulisTerlaris: produkBukuTerlaris.penulis,
  };
};

console.log(getInfoPenjualan(dataPenjualanNovel));
