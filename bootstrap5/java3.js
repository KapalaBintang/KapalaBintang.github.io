var p = prompt("Pilih : 1 - 10 ");

//menangkap pilihan komputer
//membangkitkan bilangan random
var comp = Math.floor(Math.random() * 10) + 1;

var hasil = " ";
//menentukan rules

for (i = 2; i >= 1; i--) {
  if (p == comp) {
    hasil = "BENAR";
    break;
  } else if (p > comp) {
    hasil = "TERLALU BESAR";
  } else if (p < comp) {
    hasil = "TERLALU RENDAH";
  } else {
    hasil = "anda salah memasukkan angka";
  }
  alert("jawaban : " + hasil);

  for (j = 1; j >= 1; j--) {
    p = Number(prompt("kamu punya " + i + " lagi"));
  }
}
//tampilkan hasil
alert("Kamu memilih : " + p + " dan komputer memilih : " + comp + "\n maka hasilnya : " + hasil);
