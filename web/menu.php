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
    <script>
        carregarMenu();
    </script>
    <div class="principal">
        <div id="llistatProductes"></div>
        <div class="mostrarLlistatProductes">
            <h1 class="subtitle is-4 titolTicket">TICKET</h1>
        <div id="llistatProductesSeleccionats"></div>
        <div id="preuFinalCompra"></div>
        <script>renderTicket2()</script>
        <div class="botonComprar">
            <button style="text-align:center" class="button is-medium is-info is-outlined" value="Enviar" onclick="enviarFormulariCompra()">COMPRAR</button>          
        </div>
    </div>
    </div>
    <?php include_once 'footer.php'; ?>
</body>
    
</html>