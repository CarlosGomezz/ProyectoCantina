<?php
include_once("config.php");

$tableName = "COMANDA";
$idUsuari = $_GET['idUsuari'];
$i = 0;

// Check connection
if ($conn->connect_error) {
    die("Connexió fallida: " . $conn->connect_error);
}

$sql = "SELECT COUNT(*) FROM COMANDA WHERE DATE(dataComanda) = CURDATE() AND idUsuari = $idUsuari AND comandaCompletada=1";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$numResultats = $row["COUNT(*)"];


$conn->close();
echo json_encode($numResultats);
