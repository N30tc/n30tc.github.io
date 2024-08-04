/*
//
===
La Gestion Des Evénements, avec le DOM...
En Langage : JS - JavaScript...
Avec : addEvent(); et les touches du clavier [:keyboard]... !!!
===
//
*/

window.onload = listenKeyBoard;

function listenKeyBoard() {
    document.addEventListener("keypress", sortieFunction);
}

function sortieFunction(event) {
    const touche = event.key;
    alert("Touche, du clavier : " + touche + " -> détectée !");
}