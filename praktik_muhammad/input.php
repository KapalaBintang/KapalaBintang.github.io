<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
    <script src="https://unpkg.com/feather-icons"></script>
    <link rel="stylesheet" href="style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Ysabeau:wght@300&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div class="container">
      <div class="add">
        <h1>ADD DATA</h1>
        <form action="" method="post">
          <table>
            <tr>
              <td width="120">Kode Barang :</td>
              <td><input type="text" name="kobar" /></td>
            </tr>
            <tr>
              <td>Nama Barang :</td>
              <td><input type="text" name="nabar" /></td>
            </tr>
            <tr>
              <td>Jumlah Barang:</td>
              <td><input type="text" name="jumlah" /></td>
            </tr>
            <tr>
              <td>Harga Barang :</td>
              <td><input type="text" name="harga" /></td>
            </tr>
            <tr>
              <td></td>
              <td><input class="save" type="submit" name="proses" value="Simpan" /></td>
            </tr>
          </table>
        </form>
      </div>
    </div>

    <?php 
//hadir semua alias nihil 
include "koneksi.php";

if(isset($_POST['proses'])){
mysqli_query($koneksi, "insert into abdulaziz set  
kobar = '$_POST[kobar]',
nabar = '$_POST[nabar]',
jumlah = '$_POST[jumlah]',
harga = '$_POST[harga]'");

echo "";

}
 ?>
  </body>
</html>
