// let titulo = prompt("Hola! ingrese el titulo que quiera para la pagina");

// document.getElementById("titulo").innerHTML =  titulo;
// Buscador

const searchIcon = document.getElementById("lupa-icon");
const searchBar = document.getElementById("search-bar");

// let isMoved=false;
// searchIcon.addEventListener("click", function() {
//     searchBar.style.left = searchBar.style.left === "0px" ? "-400px" : "0px";
    
//     if (!isMoved) {
//         searchIcon.style.transform = "translateX(-200px)";
//         isMoved = true;
//     } else {
//         searchIcon.style.transform = "translateX(0)";
//         isMoved = false;
//     }
// });


//------------>Carrito
 
let carrito = [];
let carritoBtn = document.getElementById('imgCarrito')
carritoBtn.addEventListener('click',function(){
    alert('click')
})

function agregarAlCarrito(button){
    let contadorCarrito = document.getElementById('cart_menu_num') 

    const producto = button.closest('.card'); // closest busca el elemento mas cercano al boton con la clase puesta
    
    const id = producto.dataset.id;
    const nombre = producto.dataset.nombre;
    const precio = parseFloat(producto.dataset.precio);
    const imagen = producto.querySelector('.producto');
    
    const confirmacion = producto.querySelector('.confirmacion');

    carrito.push({id, nombre, precio});
    contador(contadorCarrito);
    contadorCarrito.style.opacity = '1';
    
    imagen.style.filter = 'blur(3px)';
    confirmacion.style.display = 'block';
    
    setTimeout(() => {
        confirmacion.style.opacity = '1';
        }, 300);

    setTimeout(() => {
        confirmacion.style.opacity = '0';
        imagen.style.filter = 'blur(0px)';

        setTimeout(() => {
            confirmacion.style.display = 'none';
        }, 500);
        }, 1000);
    
    
    // console.log(`¡${nombre} ha sido agregado al carrito!`)
        


}

function contador(contadorCarrito){
    let tamañoCarrito = carrito.length 
    let valorMostrar = tamañoCarrito <= 9 ? tamañoCarrito : '9+';
    contadorCarrito.textContent = valorMostrar.toString();
}
