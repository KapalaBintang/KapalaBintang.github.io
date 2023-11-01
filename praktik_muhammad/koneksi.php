<?php
//variabel
$host = "localhost";
$user = "root";
$pass = "";
$db = "db_terserah";

$koneksi=mysqli_connect($host,$user,$pass);
if ($koneksi){
	$buka=mysqli_select_db($koneksi,$db);
	echo "";
		if (!$buka) {
			echo " ";
		}
}else{
	echo " ";
}	
?>
