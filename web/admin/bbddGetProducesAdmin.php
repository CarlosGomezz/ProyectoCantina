<?php 
include_once("../config.php");
// Check connection
if ($conn->connect_error) {
    die("Connexió fallida: " . $conn->connect_error);
}
$i = 0;
$sql = "SELECT * FROM PRODUCTE";
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
    echo "0 resultats";
}
$conn->close();
echo json_encode($arr_enviar);
?>