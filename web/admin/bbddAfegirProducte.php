<?php 
include_once("../config.php");
$gestioProducte = json_decode($_POST["dadesBBDD"]);
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

$sql = "INSERT INTO PRODUCTE (nomProducte, descripcioProducte, preuProducte, tipusProducte, urlImatge, horariProducte) VALUES ('$nomProducte', '$descripcio', $preu, '$tipus', '$url', '$horari')";
$result = $conn->query($sql); 
echo($sql);
$conn->close();
echo json_encode("ok");
?>  