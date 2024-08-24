<?php 
include_once("../config.php");
// Check connection
if ($conn->connect_error) {
    die("Connexió fallida: " . $conn->connect_error);
}
$i = 0;
$idProducte = $_GET['idProducte'];
$sql = "DELETE FROM PRODUCTE WHERE idProducte = $idProducte";
$result = $conn->query($sql);
$conn->close();

if ($result) echo("ok");
else echo($sql);

?>
