<!DOCTYPE html>
<html lang="ca">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/estils.css">
    <script src="../js/utils.js"></script>
    <title>Cantina Pedralbes</title>

</head>

<body>
    <?php
    include_once("../config.php");
    include_once("headerAdmin.php");
    ?>
    <script>
        carregarEditarProducte()
    </script>
    <h1 class="title">Producte</h1>
    <div id="producteAEditar"></div>
    <hr>
    <div id="editarProducte">
        <fieldset class="fieldset">
            <legend class="dadesProducte">EDITAR PRODUCTE</legend>
            <div class="has-icons-left has-icons-right has-addons">
                <label for="nomProducte">Nom producte:</label><br>
                <input class="input" type="text" id="nomProducte" class="nomProducte" placeholder="Escriu el nom del prodcute"><br>
                <div id="errorNomProducte"></div>
                <br>
                <label for="descripcio">Descripció:</label><br>
                <input class="input" type="text" id="descripcio" placeholder="Descripció del producte"><br>
                <div id="errorDescripcioProducte"></div>
                <br>
                <label for="preuUnitari">Preu per unitat:</label><br>
                <input class="input" type="number" id="preuUnitari" placeholder=""><br>
                <div id="errorPreuIncorrecte"></div>
                <br>
                <td>Tipus</td>
                <select name="tipus" id="tipus">
                    <option value="beguda">Beguda</option>
                    <option value="menjar">Menjar</option>
                </select><br>
                <br>
                <label for="urlImatge">URL imatge:</label><br>
                <input class="input" type="text" id="urlImatge" placeholder="URL de la imatge"><br>
                <div id="errorUrlIncorrecte"></div>
                <br>
                <td>Horari</td>
                <select name="horari" id="horari">
                    <option value="mati">Matí</option>
                    <option value="tarda">Tarda</option>
                    <option value="ambdos">Ambdós</option>
                </select><br>
                <br>
            </div>
    </div>
    <button class="button is-medium is-info is-outlined" id="submitBtn" name="submitBtn" onclick="editarProducteSeleccionat()">Editar</button>
    </fieldset>
    </div>
    <button class="button is-medium is-info is-outlined" onclick="window.location.href='menuAdmin.php';">Tornar</button>
    </div>
    <hr>
    <?php include_once('../footer.php'); ?>
</body>

</html>