// let titulo = prompt("Hola! ingrese el titulo que quiera para la pagina");

// document.getElementById("titulo").innerHTML =  titulo;

const searchIcon = document.getElementById("lupa-icon");
const searchBar = document.getElementById("search-bar");

let isMoved=false;
searchIcon.addEventListener("click", function() {
    searchBar.style.right = searchBar.style.right === "0px" ? "-400px" : "0px";
    
    if (!isMoved) {
        searchIcon.style.transform = "translateX(-200px)";
        isMoved = true;
    } else {
        searchIcon.style.transform = "translateX(0)";
        isMoved = false;
    }
});