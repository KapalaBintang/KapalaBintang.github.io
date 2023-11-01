// comp memilih

var ulang = true;
while (ulang) {
  var comp = Math.floor(Math.random() * 10) + 1;
  for (i = 3; i >= 1; i--) {
    console.log(comp);
    var p = prompt("Pilih angka 1-10. Anda hanya punya " + i + " kesempatan.");
    hasil = "";
    if (p == comp) {
      hasil = "sama";
      i = 0;
    } else if (p > comp) {
      hasil = "terlalu besar";
    } else if (p < comp) {
      hasil = "terlalu rendah";
    } else if ((p = "" || p.false)) {
      hasil = "bukan angka";
    } else {
      hasil = "bukan angka yang diminta";
    }

    alert("Angka yang anda pilih adalah " + p + " dan angka yang anda pilih " + hasil);
  }
  alert("Computer memilih angka " + comp + ".\n jangan bersedih yah kalau kamu kalah <:");
  ulang = confirm("Mau coba lagi?");
}
