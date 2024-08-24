<?php 
include_once("../config.php");
// Check connection
if ($conn->connect_error) {
    die("Connexió fallida: " . $conn->connect_error);
}
$i = 0;
$sql = "SELECT * FROM COMANDA WHERE comandaCompletada = 0";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        $idComanda = $row["idComanda"];
        $dataComanda = $row["dataComanda"];
        $comandaCompletada = $row["comandaCompletada"];
        $idUsuari = $row["idUsuari"];
        $dadesComanda = ['dataComanda' => $dataComanda, 'comandaCompletada' => $comandaCompletada];
        $arr_enviar[$i] = array('idComanda' => $idComanda, 'dadesComanda' => $dadesComanda);
        $i++;
    }
} else {
    echo "0 resultats";
}
$conn->close();
echo json_encode($arr_enviar);
?>