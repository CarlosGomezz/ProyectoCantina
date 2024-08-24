<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <style>@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');</style> -->
    <link rel="stylesheet" href="css/estils.css">
    <title>Cantina Pedralbes</title>
    <link rel="stylesheet" href="css/estils.css">
    <script src="js/utils.js"></script>

</head>
<body>
    <?php include_once 'header.php';?>
    <br><br>
    <div class="informacioIndex">
        <div class = "is-informacio-cantina">
        <h1 class="title">Benvinguts a la cantina de l'Institut Pedralbes</h1>
            <p class="informacioCantina has-text-justified">
                L’Institut Pedralbes disposa de cantina en funcionament de dilluns a divendres.
                <br>A més, ofereix servei de menjador al migdia, tant per a l’alumnat com per al professorat. 
                <br>Aquest servei de menjador és portat per una empresa familiar amb més de 30 anys d’experiència en el sector.<br><br>
            </p>
        </div>

        <img class="imatgeInstitut" style="width:850px; height:800px;" src="https://www.institutpedralbes.cat/wp-content/uploads/2022/09/Menu_SET_OCT_22.png" alt="Institut Pedralbes">

        <hr>
        <div class="botonsIndex">
            <button class="button is-medium is-info is-outlined" onclick="window.location.href='menu.php'">COMPRAR</button>
            <button class="button is-medium is-info is-outlined" onclick="window.location.href='admin/menuAdmin.php'">ADMIN</button>
        </div>
        
    </div>
    <hr>
    <?php include_once 'footer.php';?>
</body>
</html>