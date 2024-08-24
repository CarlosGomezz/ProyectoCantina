<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/estils.css">
    <script src="js/utils.js"></script>
</head>

<body>
    <?php include_once 'header.php'; ?>
    <br>
    <div class="principal">
    
        <div class="resumCompra">
            <h1 class="subtitle is-4 titolTicket">RESUM DE LA COMPRA</h1>
            <div id="ticketFinal"></div>
            <div id = "preuFinalCompra"></div>
            <form action="menu.php" method="POST">
                <div class = botoEnrere>
                    <button class="button is-medium is-info is-outlined" type="submit" name="test">ENRERE</button>
                </div>
            </form>
        </div>
        <div id="registreUsuari">
            <fieldset class="fieldset">
                <legend class="dadesLogin">REGISTRE USUARI</legend>

                <div class="has-icons-left has-icons-right has-addons">
                    <label for="nom">Nom:</label><br>
                    <input class="input is-small" type="text" id="nom" class="nom" placeholder="Escriu el teu nom"><br>
                    <div id ="errorNom"></div>

                    <br>

                    <label for="correu">Correu:</label><br>
                    <div class="field has-addons">
                        <p class="control">
                            <input class="input" type="text" id="correu" placeholder="Your email">
                        </p>
                        <p class="control">
                            <a class="button is-static">
                                @inspedralbes.cat
                            </a>
                        </p>
                    </div>
                    <div id ="errorCorreu"></div>

                    <br>

                    <label for="telefon">Telèfon:</label><br>
                    <div class="field has-addons">
                        <p class="control">
                            <input class="input" type="text" id="telefon" placeholder="Telefon">
                        </p>
                        <p class="control">
                            <a class="button is-static">
                                +34
                            </a>
                        </p>
                    </div>
                    <div id ="errorTelefon"></div><br>
            </div>
                <button class="button is-samll is-info is-outlined" id="submitBtn" name="submitBtn">REGISTRAR</button>
            </fieldset>
        </div>   
        <script>validarFormulariUsuari()</script>
    </div>
    <?php include_once 'footer.php'; ?>
    <script>renderTicket()</script>

</body>

</html>