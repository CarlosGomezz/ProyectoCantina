<!DOCTYPE html>
<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/estils.css">
    <script src="../js/utils.js"></script>
    <title>Menú Admin</title>
</head>
 
<body>
    <?php
        include_once("../config.php");
        include_once ('headerAdmin.php');
    ?>
    <script>
        carregarMenuBBDD();
    </script>

        <div class="pantallaAdministracio">

            <h1 class ="title has-centered-text">COMANDES</h1>
            <div id = "llistatComandesBBDD"></div>
            <br>
            <button class="button is-medium is-info is-outlined" id = "enviarComandesFinalitzades" onlick = "enviarCompletades()">Marcar com completats</button>
            <br><br><br>
            <h1 class='title'>PRODUCTES</h1>
            <div class="is-checkradio is-info is-circle" id = "llistatProductesBBDD"></div>

        </div>
 
     <?php include_once ('../footer.php');?>
</body>
 
</html>
