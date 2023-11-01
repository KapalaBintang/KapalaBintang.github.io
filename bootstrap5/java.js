// player memlih
var ulang = true;
while (ulang) {
  var p = prompt('Masukkan: "gunting","batu", atau "kertas"');

  // comp memiih
  var comp = Math.random();
  if (comp < 0.34) {
    comp = "gunting";
  } else if (comp > 0.35 && comp < 0.67) {
    comp = "batu";
  } else {
    comp = "kertas";
  }

  var hasil = "";
  // rules

  if (comp == p) {
    hasil = "sama!";
  } else if (p == "gunting") {
    if (comp == "batu") {
      hasil = "kalah!";
    } else {
      hasil = "menang!";
    }
  } else if (p == "batu") {
    if (comp == "kertas") {
      hasil = "kalah!";
    } else {
      hasil = "menang!";
    }
  } else if (p == "kertas") {
    if (comp == "batu") {
      hasil = "kalah!";
    } else {
      hasil = "menang!";
    }
  } else {
    hasil = "salah memasukkan nilai";
  }

  alert("anda memilih " + p + " dan computer memilih " + comp + " , anda " + hasil);

  ulang = confirm("Mau battle lagi?");
}
