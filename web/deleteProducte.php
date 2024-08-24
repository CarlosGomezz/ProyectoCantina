<?php
//including the database connection file
include("config.php");

//getting id of the data from url
$idProducte = $_GET['idProducte'];
var_dump($idProducte);
//deleting the row from table
$result = mysqli_query($mysqli, "DELETE * FROM PRODUCTE WHERE idProducte=$idProducte");

//redirecting to the display page (index.php in our case)
//header("Location:gestionarIncidencies.php");
?>