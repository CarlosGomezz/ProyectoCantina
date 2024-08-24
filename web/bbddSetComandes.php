<?php
    include_once("config.php");
    $gestioComanda = json_decode($_POST["dadesBBDD"]);
    $idUsuari = $gestioComanda -> usuari -> idUsuari;
    $nomUsuari = $gestioComanda -> usuari -> nomUsuari;
    $correuUsuari = $gestioComanda -> usuari -> correu;
    $telefonUsuari = $gestioComanda -> usuari -> telefon;
    $liniesComanda = $gestioComanda -> comanda;

    if ($conn->connect_error) {
        die("Connexió fallida: " . $conn->connect_error);
    }

    //Comprovar si l'usuari ja està insertat.
    if ($idUsuari != -1) {
        $sqlInsertarUsuari = "UPDATE USUARI SET nomUsuari = '$nomUsuari', telefonUsuari = $telefonUsuari, correuUsuari = '$correuUsuari' WHERE idUsuari = $idUsuari";
    } else {
        $sqlInsertarUsuari = "INSERT INTO USUARI (nomUsuari, telefonUsuari, correuUsuari) VALUES ('$nomUsuari', '$telefonUsuari', '$correuUsuari')"; 
    }
    $resultInsertarUsuari = $conn->query($sqlInsertarUsuari);
    $idUsuari = $conn->insert_id;
    
    //Insertar Comanda a la BBDD
    $sqlInsertarComanda = "INSERT INTO COMANDA (idUsuari) VALUES ($idUsuari)";
    $resultInsertarComanda = $conn->query($sqlInsertarComanda);
    $idComanda = $conn->insert_id;

    //Insertar les línies de la comanda
    for ($i=0; $i < count($liniesComanda); $i++) { 
        $qttProductes = $liniesComanda[$i] -> numProductes;
        $idProducte = $liniesComanda[$i] -> idProducte;
        $sqlInsertarLiniaComanda = "INSERT INTO LINIA_COMANDA (idComanda, idProducte, numUnitats, preuUnitari) VALUES ('$idComanda', '$idProducte', '$qttProductes', (SELECT preuProducte FROM PRODUCTE WHERE idProducte = $idProducte))";
        $resultInsertarLinia = $conn->query($sqlInsertarLiniaComanda);
    }

    $conn->close();
    $arrayEnviar = array($idComanda, $idUsuari);
    echo json_encode($arrayEnviar);
    //die();
?>