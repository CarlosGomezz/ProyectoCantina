<?php 
include_once("../config.php");
$comandesCompletades = json_decode($_POST["comandesCompletades"]);
var_dump($comandesCompletades);
// Check connection
if ($conn->connect_error) {
    die("Connexió fallida: " . $conn->connect_error);
}

for ($i=0; $i < count($comandesCompletades); $i++) { 
    $idComanda = $comandesCompletades[$i];
    $sqlResultUpdate = "UPDATE COMANDA SET comandaCompletada = 1 WHERE idComanda = '$idComanda'";
    $resultUpdate = $conn->query($sqlResultUpdate);
}

$conn->close();
if ($resultUpdate)echo("ok");
else echo($sql);
?>  