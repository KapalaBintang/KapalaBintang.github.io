<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style3.css" />
  </head>
  <body>
    <?php 
include "koneksi.php";

$sql = mysqli_query($koneksi, "select * from abdulaziz where kobar='$_GET[kobar]'");
$data=mysqli_fetch_array($sql);


?>

    <div class="container">
      <div class="add">
        <h3>Barang Update</h3>

        <form action="" method="post">
          <table>
            <tr>
              <td width="120">Kode Barang</td>
              <td><input type="text" name="kobar" value="<?php echo $data['kobar'];?>" /></td>
            </tr>
            <tr>
              <td>Nama Barang</td>
              <td><input type="text" name="nabar" value="<?php echo $data['nabar'];?>" /></td>
            </tr>
            <tr>
              <td>Jumlah</td>
              <td><input type="text" name="jumlah" value="<?php echo $data['jumlah'];?>" /></td>
            </tr>
            <tr>
              <td>Harga</td>
              <td><input type="text" name="harga" value="<?php echo $data['harga'];?>" /></td>
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
include "koneksi.php";

if(isset($_POST['proses'])){
mysqli_query($koneksi, "update abdulaziz set  
nabar = '$_POST[nabar]',
jumlah = '$_POST[jumlah]',
harga = '$_POST[harga]'
where kobar='$_GET[kobar]'");

echo "";
 echo "<meta http-equiv=refresh content=2;URL='tampil_edit.php'>"; } ?>
  </body>
</html>
