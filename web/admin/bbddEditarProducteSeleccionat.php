<?php 
include_once("../config.php");
$gestioProducte = json_decode($_POST["dadesBBDD"]);
$id = $gestioProducte -> producte -> idProducte;
$nomProducte = $gestioProducte -> producte -> nomProducte;
$descripcio = $gestioProducte -> producte -> descripcio;
$preu = $gestioProducte -> producte -> preuUnitari;
$tipus = $gestioProducte -> producte -> tipusProducte;
$url = $gestioProducte -> producte -> urlImatge;
$horari = $gestioProducte -> producte -> horari;

// Check connection
if ($conn->connect_error) {
    die("Connexió fallida: " . $conn->connect_error);
}

$sql = "UPDATE PRODUCTE SET nomProducte = '$nomProducte', descripcioProducte = '$descripcio', preuProducte = $preu, tipusProducte = '$tipus', urlImatge = '$url', horariProducte ='$horari' WHERE idProducte = $id";
$result = $conn->query($sql); 
$conn->close();

if ($result)echo("ok");
else echo($sql);
?>  