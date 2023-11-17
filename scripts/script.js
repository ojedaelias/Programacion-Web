// let titulo = prompt("Hola! ingrese el titulo que quiera para la pagina");

// document.getElementById("titulo").innerHTML =  titulo;
// Buscador

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


//------------>Carrito
let carrito = [];

function agregarAlCarrito(button){
    const producto = button.parentElement;
    const id = producto.dataset.id;
    const nombre = producto.dataset.nombre;
    const precio = parseFloat(producto.dataset.precio);
    const imagen = producto.querySelector('img');
    const productoSeleccionado = {id, nombre, precio};
    const confirmacion = producto.querySelector('.confirmacion');
    
    carrito.push(productoSeleccionado);

    
    confirmacion.style.display = 'block';
    imagen.style.filter = 'blur(3px)';

    setTimeout(() => {
        confirmacion.style.opacity = '1';
        }, 100);

    setTimeout(() => {
        confirmacion.style.opacity = '0';
        imagen.style.filter = 'blur(0px)';

        setTimeout(() => {
            confirmacion.style.display = 'none';
        }, 500);
        }, 1000);
    
    console.log(`¡${productoSeleccionado} ha sido agregado al carrito!`);
}

