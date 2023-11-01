var penumpang = [];

var tambahPenumpang = function (namaPenumpang, Penumpang) {
  // tambah penumbang ketika kursi kosog
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      // Penumpang menaiki kursi kosong terlebih dahulu
      if (penumpang[i] == namaPenumpang) {
        console.log(namaPenumpang + " sudah ada didalam angkot");

        return penumpang;
      }
      // ada nama yang sama
      else if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      }
      // angkot penuh dan penumpang akan mengisis kursi yang paling ujung
      else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

// Function untuk menghapus penumpang
var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log("Angkot Masih kosong.");

    return penumpang;
  } else {
    for (i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;

        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + " tidak ada didalam angkot");

        return penumpang;
      }
    }
  }
};
