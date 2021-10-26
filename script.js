let inicio = document.querySelector("#inicio");
let primero = document.querySelector("#primero");

inicio.addEventListener ("click", irPrimero, false);
function irPrimero (e) {
    primero.scrollIntoView({behavior: "auto"});
}



let sobreMi = document.querySelector("#sobreMi");
let segundo = document.querySelector("#segundo");

sobreMi.addEventListener("click", irSegundo, false);
function irSegundo (e){
    segundo.scrollIntoView ({behavior: "auto"});
} 



let artistas = document.querySelector("#artistas");
let tercero = document.querySelector("#tercero");

artistas.addEventListener("click", irTercero, false);
function irTercero (e) {
    tercero.scrollIntoView ({behavior: "auto"});
}


let contacto = document.querySelector("#contacto");
let cuarto = document.querySelector("#cuarto");

contacto.addEventListener("click", irCuarto, false);
function irCuarto (e) {
    cuarto.scrollIntoView ({behavior: "auto"});
}

const configuracion_ventana =
  "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

let linkedin = document.getElementById("linkedin");
linkedin.addEventListener("click", abrirLinkedin);
function abrirLinkedin() {
  linkedin = window.open(
      "https://www.linkedin.com/in/ana-beltran-5484441a5/", "linkedin3", configuracion_ventana
  );
}

email.addEventListener("click", abrirMail)
function abrirMail() {
    email = window.open(
        "mailto:ana_beltran_06@hotmail.com", "hotmail2", configuracion_ventana
    );
}

let instagram = document.getElementById("instagram");
instagram.addEventListener("click", abrirInstagram);
function abrirInstagram() {
  instagram = window.open(
    "https://www.instagram.com/anabelttran_/", "instagram1", configuracion_ventana
  );
}
