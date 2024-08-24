<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");
?>
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cantina Pedralbes</title>
    
</head>
<body>
    <?php include_once 'header.php';?>
    <hr>
    <div class ="infoError">
        <h3 class="title">ERROR DE COMPRA</h3>

        <h4 class="subtitle">Ja has realitzat la compra d'avui</h4>

        <button class="button is-medium is-info is-outlined" onclick="window.location.href='index.php'">ENRERE</button>
    </div>
    <hr>
    <?php include_once 'footer.php';?>
</body>
</html>