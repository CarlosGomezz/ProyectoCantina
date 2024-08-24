<?php
include_once("config.php");

$tableName = "PRODUCTE";
$i = 0;
$horari = $_GET['horari'];
date_default_timezone_set('Europe/Madrid');

//Verifiquem l'hora també en el servidor.
if (date("h") > 11) {
    $horari = 'tarda';
} else if (date("h") < 11) {
    $horari = 'mati';
} else {
    if (date("i") <= 30) {
        $horari = 'mati';
    } else {
        $horari = 'tarda';
    }
}
// Check connection
if ($conn->connect_error) {
    die("Connexió fallida: " . $conn->connect_error);
}
$sql = "SELECT * FROM $tableName WHERE horariProducte = '$horari' OR horariProducte = 'ambdos'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        $idProducte = $row["idProducte"];
        $nomProducte = $row["nomProducte"];
        $descripcioProducte = $row["descripcioProducte"];
        $preuProducte = $row["preuProducte"];
        $tipusProducte = $row["tipusProducte"];
        $urlImatge = $row["urlImatge"];
        $horariProducte = $row["horariProducte"];
        $dadesProducte = ['nomProducte' => $nomProducte, 'descripcioProducte' => $descripcioProducte, 'preuProducte' => $preuProducte, 'tipusProducte' => $tipusProducte, 'urlImatge' => $urlImatge, 'horariProducte' => $horariProducte];
        $arr_enviar[$i] = array('idProducte' => $idProducte, 'dadesProducte' => $dadesProducte);
        $i++;
    }
} else {
    echo "0 results";
}
$conn->close();
echo json_encode($arr_enviar);