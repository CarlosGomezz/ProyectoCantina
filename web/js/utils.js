var tevaCompra = [];
//OBJETO CON EL ID PRODUCTO Y CANT PRODUCTOS

var datos = [];
//JSON QUE DEVUELVE BD

var mapaProductes = [];
// tevaCompra ampliada


function setHorariActual() {
    let avui = new Date();
    let horaAvui = avui.getHours();
    let minutesAvui = avui.getMinutes();
    let horari;

    if (horaAvui > 11) {
        horari = 'tarda';
    } else if (horaAvui < 11) {
        horari = 'mati';
    } else {
        if (minutesAvui <= 30) {
            horari = 'mati';
        } else {
            horari = 'tarda';
        }
    }
    localStorage.setItem("horari", horari);
}

function carregarMenu() {
    setHorariActual();
    bbddComprovarDataCompra();
}

function bbddComprovarDataCompra() {
    let datos = [];
    let horariMenu;
    let idUsuari;
    let estatCompra;

    idUsuari = localStorage.getItem("idUsuari");
    fetch('./bbddComprovarDataCompra.php?idUsuari=' + idUsuari)
        .then((response) => response.json())
        .then((data) => {
            estatCompra = data;
            console.log(data);
            if (estatCompra == 0) {
                horariMenu = localStorage.getItem("horari");
                fetch('./bbddGetProductesUsuari.php?horari=' + horariMenu)
                    .then((response) => response.json())
                    .then((data) => {
                        datos = data;
                        setMapaDades(datos);
                        renderProductes(datos);
                    });
            } else {
                window.location.href = 'errorCompra.php';
            }
        });
}

function renderProductes(datos) {
    let htmlStr = "";
    for (let index = 0; index < datos.length; index++) {
        htmlStr += `<div class="mostrarMenu">`
        htmlStr += '<fieldset class="fieldset">';
        htmlStr += '<div class = "producte">';
        htmlStr += '<div class = "headerProducte">';
        htmlStr += `<img class = "imgProducte" src="${datos[index].dadesProducte.urlImatge}" alt="img">`;
        htmlStr += `<p class = 'nomProducte'>${datos[index].dadesProducte.nomProducte}</p>`;
        htmlStr += `<div class = "preuInput" id =${datos[index].idProducte}>`;
        htmlStr += `<p class = 'preuProducte'>${datos[index].dadesProducte.preuProducte}€</p>`;
        htmlStr += `<button class="restarProducte">-</button>`
        htmlStr += `<button class="afegirProducte">+</button>`
        htmlStr += `</div>`
        htmlStr += `</div>`;
        htmlStr += `</div>`;
        htmlStr += `</fieldset>`;
        htmlStr += `</div>`;
        htmlStr += `</div>`;

    }

    document.getElementById("llistatProductes").innerHTML = htmlStr;
    document.getElementById("llistatProductes").addEventListener("click", function (e) {
        setQttProd(e.target.parentElement.id);
        if (e.target.classList.contains("restarProducte")) {
            renderLlistat(e.target.parentElement.id, "restar");
            renderProductesSeleccionats();
        }
        if (e.target.classList.contains("afegirProducte")) {
            renderLlistat(e.target.parentElement.id, "sumar");
            renderProductesSeleccionats();
        }
    })
}

function setQttProd(idProducte) {
    let qttProducte = 0;

    for (let index = 0; index < tevaCompra.length; index++) {
        if (tevaCompra[index].idProducte == idProducte) {
            producteAModificar = index;
            qttProducte = tevaCompra[index].numProductes;
        }
    }
    console.log(qttProducte);
    return qttProducte;
}

function renderLlistat(id, operacio) {
    let producteAModificar = -1;
    let lineaComanda = {
        numProductes: 0,
        idProducte: -1,
    };

    if (localStorage.getItem("tevaCompra") != null) {
        tevaCompra = JSON.parse(localStorage.getItem("tevaCompra"));
    }

    producteAModificar = tevaCompra.length;
    for (let index = 0; index < tevaCompra.length; index++) {
        if (tevaCompra[index].idProducte == id) {
            producteAModificar = index;
            lineaComanda.numProductes = tevaCompra[index].numProductes;
        }
    }

    if (operacio == "sumar") {
        lineaComanda.numProductes = lineaComanda.numProductes + 1;
    } else {
        lineaComanda.numProductes = lineaComanda.numProductes - 1;
    }
    lineaComanda.idProducte = id;
    tevaCompra[producteAModificar] = lineaComanda;

    console.log(tevaCompra);
    let indexEsborrarTrobat = false;
    let i = 0;
    let indexEsborrar = -1;

    if (lineaComanda.numProductes <= 0) {
        while (!indexEsborrarTrobat) {
            if (tevaCompra[i].idProducte == id) {
                indexEsborrarTrobat = true;
                indexEsborrar = i;
            }
            i++;
        }
        tevaCompra.splice(indexEsborrar, 1);
    }
}

function setMapaDades(datos) {
    mapaProductes = new Map();

    for (let index = 0; index < datos.length; index++) {
        mapaProductes.set(datos[index].idProducte, datos[index].dadesProducte);
    }
}

function renderProductesSeleccionats() {
    let htmlStrPreuFinal = "";
    let preuFinalCompra = 0;
    let htmlStr = "";
    let tevaCompraLS = localStorage.getItem("tevaCompra");
    let tevaCompraParsejat = JSON.parse(tevaCompraLS);

    htmlStr += `<table class="table is-hoverable has-text-centered">
    <tr bgcolor='#CCCCCC'>
        <td style="font-weight:bolder">Unitats</td>
        <td style="font-weight:bolder">Producte</td>
        <td style="font-weight:bolder">Preu Unitari</td>
        <td style="font-weight:bolder">Preu Total</td>
    </tr>`;


    for (let index = 0; index < tevaCompra.length; index++) {
        let preuUnitat = mapaProductes.get(tevaCompra[index].idProducte).preuProducte * 1;
        let preuTotal = mapaProductes.get(tevaCompra[index].idProducte).preuProducte * tevaCompra[index].numProductes;
        preuFinalCompra += preuTotal;
        htmlStr += `<tr>`;
        htmlStr += `<td>${tevaCompra[index].numProductes} </td>`;
        htmlStr += `<td> ${mapaProductes.get(tevaCompra[index].idProducte).nomProducte} </td>`;
        htmlStr += `<td> ${preuUnitat.toFixed(2)} €</td>`;
        htmlStr += `<td> ${preuTotal.toFixed(2)} €</td>`;
        htmlStr += `</tr>`;
    }
    htmlStrPreuFinal += `Preu total: ${preuFinalCompra.toFixed(2)} €`;
    htmlStr += `</table>`;

    document.getElementById("preuFinalCompra").innerHTML = htmlStrPreuFinal;
    document.getElementById("llistatProductesSeleccionats").innerHTML = htmlStr;
    localStorage.setItem("preuFinalTicket", preuFinalCompra.toFixed(2));
    localStorage.setItem("tevaCompra", JSON.stringify(tevaCompra));
    tevaCompraParsejat = JSON.parse(localStorage.getItem("tevaCompra"));
    console.log(tevaCompraParsejat);
}

function enviarFormulariCompra() {
    let llistatCompra = [];

    for (let index = 0; index < tevaCompra.length; index++) {
        let lineaComandaLS = {
            idProducte: 0,
            numProductes: 0,
            nomProducte: 0,
            preuUnitari: 0,
            preuFinal: 0
        };
        lineaComandaLS.idProducte = tevaCompra[index].idProducte;
        lineaComandaLS.numProductes = tevaCompra[index].numProductes;
        lineaComandaLS.nomProducte = mapaProductes.get(tevaCompra[index].idProducte).nomProducte;
        lineaComandaLS.preuUnitari = mapaProductes.get(tevaCompra[index].idProducte).preuProducte * 1;
        lineaComandaLS.preuFinal = mapaProductes.get(tevaCompra[index].idProducte).preuProducte * tevaCompra[index].numProductes;
        llistatCompra.push(lineaComandaLS);
    }
    localStorage.setItem("llistatCompraLS", JSON.stringify(llistatCompra));

    if (tevaCompra.length > 0) {
        window.location.href = 'resum.php';
    }
}

function renderTicket() {
    let htmlStr = "";
    let htmlStrPreuFinal = ""; 
    let preuFinalTicket = localStorage.getItem("preuFinalTicket");
    let ticketCompraJS = localStorage.getItem('llistatCompraLS');
    let ticketCompra = JSON.parse(ticketCompraJS);

    htmlStr += `<table class="table is-hoverable has-text-centered is-fullwidth">
    <tr bgcolor='#CCCCCC'>
        <td style="font-weight:bolder">Unitats</td>
        <td style="font-weight:bolder">Producte</td>
        <td style="font-weight:bolder">Preu Unitari</td>
        <td style="font-weight:bolder">Preu Total</td>
    </tr>`;

    
    for (let index = 0; index < ticketCompra.length; index++) {
        htmlStr += `<tr>`;
        htmlStr += `<td>${ticketCompra[index].numProductes}</td>`;
        htmlStr += `<td>${ticketCompra[index].nomProducte}</td>`;
        htmlStr += `<td>${ticketCompra[index].preuUnitari.toFixed(2)} € </td>`;
        htmlStr += `<td>${ticketCompra[index].preuFinal.toFixed(2)} € </td>`;
        htmlStr += `</tr>`;
    }
    htmlStrPreuFinal += `Preu total: ${preuFinalTicket} €`;
    htmlStr += `</table>`;
    console.log(ticketCompra);
    document.getElementById("preuFinalCompra").innerHTML = htmlStrPreuFinal;
    document.getElementById("ticketFinal").innerHTML = htmlStr;
}

function renderTicket2() {
    let htmlStr = "";
    let ticketCompraJS = localStorage.getItem('llistatCompraLS');
    let ticketCompra = JSON.parse(ticketCompraJS);


    htmlStr += `<table class="table is-hoverable has-text-centered">
    <tr bgcolor='#CCCCCC'>
        <td style="font-weight:bolder">Unitats</td>
        <td style="font-weight:bolder">Producte</td>
        <td style="font-weight:bolder">Preu Unitari</td>
        <td style="font-weight:bolder">Preu Total</td>
    </tr>`;

    for (let index = 0; index < ticketCompra.length; index++) {
        htmlStr += `<tr>`;
        htmlStr += `<td>${ticketCompra[index].numProductes}</td>`;
        htmlStr += `<td>${ticketCompra[index].nomProducte}</td>`;
        htmlStr += `<td>${ticketCompra[index].preuUnitari.toFixed(2)} € </td>`;
        htmlStr += `<td>${ticketCompra[index].preuFinal.toFixed(2)} € </td>`;
        htmlStr += `</tr>`;
    }
    htmlStr += `</table>`;
    console.log(ticketCompra);
    document.getElementById("llistatProductesSeleccionats").innerHTML = htmlStr;
}

function recuperarDadesUsuari() {
    if (localStorage.getItem("nomUsuari") != null) {
        document.getElementById("nom").setAttribute("value", localStorage.getItem("nomUsuari"));
    }

    if (localStorage.getItem("correuUsuari") != null) {
        document.getElementById("correu").setAttribute("value", localStorage.getItem("correuUsuari"));

    }

    if (localStorage.getItem("telefonUsuari") != null) {
        document.getElementById("telefon").setAttribute("value", localStorage.getItem("telefonUsuari"));
    }

}

function validarFormulariUsuari() {
    let nomOk;
    let correuOk;
    let telefonOk;

    recuperarDadesUsuari();
    document.getElementById("submitBtn").addEventListener("click", function (e) {
        nomOk = validarNom();
        correuOk = validarCorreu();
        telefonOk = validarTelefon();

        if (nomOk && correuOk && telefonOk) {
            registrarUsuari();
        } else {
            e.preventDefault();
        }
    })
}

function validarNom() {
    let htmlStr = "";
    let nom = document.getElementById("nom").value;
    let nomCorrecte = false;

    if (nom == null || nom == "") {
        htmlStr += `<p style="color: red">El nom està buit</p>`
    } else {
        nomCorrecte = true;
        localStorage.setItem("nomUsuari", nom);
    }
    document.getElementById("errorNom").innerHTML = htmlStr;
    return nomCorrecte;
}

function validarCorreu() {
    let htmlStr = "";
    let correu = document.getElementById("correu").value;
    let comprovarCorreu = new RegExp('[a-z0-9]+@inspedralbes.cat');
    let correuCorrecte = false;

    if (!comprovarCorreu.test(correu)) {
        htmlStr += `<p style="color: red">El correu ha d'acabar en @inspedralbes.cat</p>`
    } else {
        correuCorrecte = true;
        localStorage.setItem("correuUsuari", correu);
    }
    document.getElementById("errorCorreu").innerHTML = htmlStr;
    return correuCorrecte;
}

function validarTelefon() {
    let htmlStr = "";
    let telefon = document.getElementById("telefon").value;
    let comprovarTelefon = /^\d{9}$/;
    let telefonCorrecte = false;

    if (!comprovarTelefon.test(telefon)) {
        htmlStr += `<p style="color: red">El telèfon ha de ser de 9 dígits.</p>`
    } else {
        telefonCorrecte = true;
        localStorage.setItem("telefonUsuari", telefon);
    }
    document.getElementById("errorTelefon").innerHTML = htmlStr;
    return telefonCorrecte;
}

function registrarUsuari() {
    let id;
    if (localStorage.getItem("idUsuari") != null) {
        id = localStorage.getItem("idUsuari");
    } else {
        id = -1;
    }
    console.log(id);
    let dadesBBDD = {
        usuari: {
            idUsuari: id,
            nomUsuari: document.getElementById("nom").value,
            correu: document.getElementById("correu").value,
            telefon: document.getElementById("telefon").value,
        },
        comanda: JSON.parse(localStorage.getItem("tevaCompra"))
    }

    let formData = new FormData();
    formData.append('dadesBBDD', JSON.stringify(dadesBBDD));

    fetch("bbddSetComandes.php", {
        body: formData,
        method: "post"
    })
    .then((response) => response.json())
    .then((data) => {
        renderCompraFinalitzada(data);
    });
}

function carregarMenuBBDD() {
    carregarComandesBBDD();
    carregarProductesBBDD();
}

function carregarComandesBBDD() {
    let comandesBBDD = [];

    fetch('../admin/bbddGetComandesAdmin.php')
        .then((response) => response.json())
        .then((data) => {
            comandesBBDD = data;
            renderComandesBBDD(comandesBBDD);
        });
}

function renderComandesBBDD(datos) {
    let htmlStr = "";
    let comandesCompletades = [];

    htmlStr += `<table class="table is-hoverable has-text-centered">
    <tr bgcolor='#CCCCCC'>
        <td style="font-weight:bolder">ID comanda</td>
        <td style="font-weight:bolder">Data</td>
        <td style="font-weight:bolder">Marcar coma a completada</td>
    </tr>`;

    for (let index = 0; index < datos.length; index++) {
        htmlStr += `<tr>`;
        htmlStr += `<td class = 'idComanda'>${datos[index].idComanda}</td>`;
        htmlStr += `<td class = 'nomProducte'>${datos[index].dadesComanda.dataComanda}</td>`;
        htmlStr += `<td> <input type="checkbox" class="marcarCompletada" name="checkbox" id="${datos[index].idComanda}" name="marcarCompletada"></input></td>`;
        htmlStr += `</tr>`;
    }
    htmlStr += "</table>"
    document.getElementById("llistatComandesBBDD").innerHTML = htmlStr;

    
    console.log(comandesCompletades);

    document.getElementById("llistatComandesBBDD").addEventListener("change", function (e) {
        if (e.target.classList.contains("marcarCompletada")) {
            console.log(comandesCompletades);
            let marcarCompletada = document.getElementById(e.target.id);
            if (marcarCompletada.checked) {
                if (!comandesCompletades.includes(e.target.id)) {
                    comandesCompletades.push(e.target.id);
                }
            } else {
                if (comandesCompletades.includes(e.target.id)) {
                    let indexEsborrar = comandesCompletades.indexOf(e.target.id);
                    comandesCompletades.splice(indexEsborrar, 1);
                }
            }
        }
    })
    enviarCompletades(comandesCompletades);
}

function enviarCompletades(comandesCompletades) {
    document.getElementById("enviarComandesFinalitzades").addEventListener("click", function (e) {
        let formData = new FormData();
        formData.append('comandesCompletades', JSON.stringify(comandesCompletades));
        console.log(formData);
        console.log(comandesCompletades);
        fetch("../admin/bbddMarcarCompletada.php", {
            body: formData,
            method: "post"
        })
            .then((response) => response.json())
            carregarComandesBBDD();
    })
}


function carregarProductesBBDD() {
    let productesBBDD = [];

    fetch('../admin/bbddGetProducesAdmin.php')
        .then((response) => response.json())
        .then((data) => {
            productesBBDD = data;
            renderProductesBBDD(productesBBDD);
        });
}

function renderProductesBBDD(datos) {
    let htmlStr = "";
    htmlStr += `<button class="button is-medium is-info is-outlined" onclick="location.href='afegirProducte.php'">Afegir Producte</button><br><br>`;

    htmlStr += `<table class= "table is-bordered is-hoverable has-text-centered	is-striped is-hoverable is-fullwidth">
                    <tr bgcolor='#CCCCCC'>
                        <td style="font-weight:bolder">Id producte</td>
                        <td style="font-weight:bolder">Nom producte</td>
                        <td style="font-weight:bolder">Descripció</td>
                        <td style="font-weight:bolder">Preu Unitari</td>
                        <td style="font-weight:bolder">Tipus</td>
                        <td style="font-weight:bolder">Url Img</td>
                        <td style="font-weight:bolder">Horari</td>
                        <td style="font-weight:bolder">Editar</td>
                        <td style="font-weight:bolder">Esborrar</td>
                    </tr>`;

    for (let index = 0; index < datos.length; index++) {
        htmlStr += `<tr>`;
        htmlStr += `<td class = 'idProducte'>${datos[index].idProducte}</td>`;
        htmlStr += `<td class = 'nomProducte'>${datos[index].dadesProducte.nomProducte}</td>`;
        htmlStr += `<td class = 'descripcioProducte'>${datos[index].dadesProducte.descripcioProducte}</td>`;
        htmlStr += `<td class = 'preuProducte'>${datos[index].dadesProducte.preuProducte}</td>`;
        htmlStr += `<td class = 'tipusProducte'>${datos[index].dadesProducte.tipusProducte}</td>`;
        htmlStr += `<td class = 'urlImatge'>${datos[index].dadesProducte.urlImatge}</td>`;
        htmlStr += `<td class = 'horariProducte'>${datos[index].dadesProducte.horariProducte}</td>`;
        htmlStr += `<td><a href="editarProducte.php?idProducte=${datos[index].idProducte}">Edit</a></td>`;
        htmlStr += `<td><a onclick="esborrarProducte(${datos[index].idProducte})">Delete</a></td>`;
        htmlStr += `</tr>`;
    }
    htmlStr += "</table>";
    document.getElementById("llistatProductesBBDD").innerHTML = htmlStr;
}

function esborrarProducte(idProducte) {
    fetch('../admin/bbddDeleteProducte.php?idProducte=' + idProducte)
        .then(function (response) {
            console.log(response);
        });
    carregarProductesBBDD();
}

function renderCompraFinalitzada(dades) {
    let idComanda = dades[0];
    let idUsuari = dades[1];

    localStorage.setItem("idComanda", idComanda);
    localStorage.setItem("idUsuari", idUsuari);
    window.location.href = 'finalitzacioCompra.php';
}

function renderPantallaFinalitzacio() {
    let idComanda = localStorage.getItem("idComanda");
    let htmlStr = "";
    htmlStr += `<div class="finalitzacioCompra">`;
    htmlStr += `<h1 class="title">Gràcies per comprar a Cantina Pedralbes! <br> La teva compra s'ha registrat a la cuina.<h1>`;
    htmlStr += `<p>Si us plau, guardeu l'id de la vostre comanda: ${idComanda}<p>`
    htmlStr += `<img class=""src="https://media.tenor.com/QeYrZHVk0ucAAAAC/kitchen.gif" alt="Funny image">`;
    document.getElementById("missatgeFinalitzacio").innerHTML = htmlStr;
}

function carregarEditarProducte() {
    let getUrl = window.location.href;
    let url = new URL(getUrl);
    let idProducte = url.searchParams.get("idProducte");
    let producteEditar = [];

    fetch('../admin/bbddEditarProductes.php?idProducte=' + idProducte)
        .then((response) => response.json())
        .then((data) => {
            producteEditar = data;
            renderProducteBBDD(producteEditar);
        });
}

function renderProducteBBDD(datos) {
    let htmlStr = "";
    htmlStr += `<table class= "table is-bordered is-hoverable has-text-centered	is-striped is-hoverable is-fullwidth">
                    <tr bgcolor='#CCCCCC'>
                        <td>Id producte</td>
                        <td>Nom producte</td>
                        <td>Descripció</td>
                        <td>Preu Unitari</td>
                        <td>Tipus</td>
                        <td>Url Img</td>
                        <td>Horari</td>
                    </tr>`;
    for (let index = 0; index < datos.length; index++) {
        htmlStr += `<tr>`;
        htmlStr += `<td class = 'idProducte'>${datos[index].idProducte}</td>`;
        htmlStr += `<td class = 'nomProducte'>${datos[index].dadesProducte.nomProducte}</td>`;
        htmlStr += `<td class = 'descripcioProducte'>${datos[index].dadesProducte.descripcioProducte}</td>`;
        htmlStr += `<td class = 'preuProducte'>${datos[index].dadesProducte.preuProducte}</td>`;
        htmlStr += `<td class = 'tipusProducte'>${datos[index].dadesProducte.tipusProducte}</td>`;
        htmlStr += `<td class = 'urlImatge'>${datos[index].dadesProducte.urlImatge}</td>`;
        htmlStr += `<td class = 'horariProducte'>${datos[index].dadesProducte.horariProducte}</td>`;
        htmlStr += `</tr>`;
        document.getElementById("nomProducte").setAttribute("value", datos[index].dadesProducte.nomProducte);
        document.getElementById("descripcio").setAttribute("value", datos[index].dadesProducte.descripcioProducte);
        document.getElementById("preuUnitari").setAttribute("value", datos[index].dadesProducte.preuProducte);
        document.getElementById("tipus").setAttribute("value", datos[index].dadesProducte.tipusProducte);
        document.getElementById("urlImatge").setAttribute("value", datos[index].dadesProducte.urlImatge);
        document.getElementById("horari").setAttribute("value", datos[index].dadesProducte.horariProducte);
    }
    htmlStr += "<table>"
    document.getElementById("producteAEditar").innerHTML = htmlStr;
}

function editarProducteSeleccionat() {
    let getUrl = window.location.href;
    let url = new URL(getUrl);
    let id = url.searchParams.get("idProducte");
    let nomOk;
    let descripcioOk;
    let preuOk;
    let urlOk;

    let dadesBBDD = {
        producte: {
            idProducte: id,
            nomProducte: document.getElementById("nomProducte").value,
            descripcio: document.getElementById("descripcio").value,
            preuUnitari: document.getElementById("preuUnitari").value,
            tipusProducte: document.getElementById("tipus").value,
            urlImatge: document.getElementById("urlImatge").value,
            horari: document.getElementById("horari").value,
        },
    }

    nomOk = validarNomProducte();
    descripcioOk = validarDescripcioProducte();
    preuOk = validarPreuUnitariProducte();
    urlOk = validarURLProducte();
    if (nomOk && descripcioOk && preuOk && urlOk) {
        let formData = new FormData();
        formData.append('dadesBBDD', JSON.stringify(dadesBBDD));
        console.log(dadesBBDD);
        fetch("../admin/bbddEditarProducteSeleccionat.php", {
            body: formData,
            method: "post"
        })
            .then((response) => response.json())
        window.location.href = 'menuAdmin.php';
    } 
}

function afegirProducte() {
    let nomOk;
    let descripcioOk;
    let preuOk;
    let urlOk;
    let dadesBBDD = {
        producte: {
            nomProducte: document.getElementById("nomProducte").value,
            descripcio: document.getElementById("descripcio").value,
            preuUnitari: document.getElementById("preuUnitari").value,
            tipusProducte: document.getElementById("tipus").value,
            urlImatge: document.getElementById("urlImatge").value,
            horari: document.getElementById("horari").value,
        },
    }

    nomOk = validarNomProducte();
    descripcioOk = validarDescripcioProducte();
    preuOk = validarPreuUnitariProducte();
    urlOk = validarURLProducte();

    if (nomOk && descripcioOk && preuOk && urlOk) {
        let formData = new FormData();
        formData.append('dadesBBDD', JSON.stringify(dadesBBDD));
        console.log(dadesBBDD);
        fetch("../admin/bbddAfegirProducte.php", {
            body: formData,
            method: "post"
        })
        window.location.href = 'menuAdmin.php';
    } 
}

function validarNomProducte() {
    let htmlStr = "";
    let nom = document.getElementById("nomProducte").value;
    let nomCorrecte = false;

    if (nom == null || nom == "") {
        htmlStr += `<p style="color: red">El nom està buit</p>`
    } else {
        nomCorrecte = true;
    }
    document.getElementById("errorNomProducte").innerHTML = htmlStr;
    return nomCorrecte;
}

function validarDescripcioProducte() {
    let htmlStr = "";
    let descripcio = document.getElementById("descripcio").value;
    let descripcioCorrecte = false;

    if (descripcio == null || descripcio == "") {
        htmlStr += `<p style="color: red">La descripció està buida</p>`
    } else {
        descripcioCorrecte = true;
    }
    document.getElementById("errorDescripcioProducte").innerHTML = htmlStr;
    return descripcioCorrecte;
}
function validarPreuUnitariProducte() {
    let htmlStr = "";
    let preuUnitari = document.getElementById("preuUnitari").value;
    let preuIncorrecte = false;

    if (preuUnitari == null || preuUnitari == "" || preuUnitari <= 0) {
        htmlStr += `<p style="color: red">El preu és incorrecte</p>`
    } else {
        preuIncorrecte = true;
    }
    document.getElementById("errorPreuIncorrecte").innerHTML = htmlStr;
    return preuIncorrecte;
}

function validarURLProducte() {
    let htmlStr = "";
    let url = document.getElementById("urlImatge").value;
    let urlIncorrecta = false;

    if (url == null || url == "") {
        htmlStr += `<p style="color: red">La URL de la imatge està buida</p>`
    } else {
        urlIncorrecta = true;
    }
    document.getElementById("errorUrlIncorrecte").innerHTML = htmlStr;
    return urlIncorrecta;
}