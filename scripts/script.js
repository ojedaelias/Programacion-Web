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
    let listaCarrito = document.getElementById('cartListContainer');
    let opacidadActual = parseFloat(getComputedStyle(listaCarrito).opacity);

    listaCarrito.style.opacity = opacidadActual === 1 ? 0 : 1;
});


function agregarAlCarrito(button){
    let contadorCarrito = document.getElementById('cart_menu_num') 
    
    
    const card = button.closest('.card'); // closest busca el elemento mas cercano al boton con la clase puesta
    
    const id = card.dataset.id;
    const nombre = card.querySelector('h2').innerHTML;
    const precio = card.querySelector('.precio').innerHTML;
    const color = card.querySelector('.color').innerHTML;
    const imagen = card.querySelector('.producto'); 
    const confirmacion = card.querySelector('.confirmacion');

    let producto = {id, nombre, color, precio}; 
    // ``
    sumarTotal(precio);

    carrito.push(producto);

    agregarLista(producto); 
    
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

function agregarLista(producto){
    let lista = document.getElementById("cartList");
    lista.innerHTML += `<li>${producto.nombre} ${producto.color} ${producto.precio} <button class="btnDelete" onclick="deleteProduct(this)">X</button></li>`;
}

function sumarTotal(precio){
    let total = document.getElementById('totalPrecio')
    let totalPrecio = Number(total.innerHTML.substring(1))

    totalPrecio += Number(precio.substring(1));
    total.textContent = `$ ${totalPrecio}`; 
}

function deleteProduct(button){
    let texto = button.closest('li').textContent;
    let precio = texto.match(/\$\d+/)
    let total = document.getElementById('totalPrecio')
    let totalPrecio = Number(total.innerHTML.substring(1))

    totalPrecio -= Number(precio[0].substring(1));
    total.textContent = `$ ${totalPrecio}`; 
    button.closest('li').remove();

}

function clearAll(button){
    let lista = documment.getElementById('cartList');
    let productos = lista.querySelectorAll('li');

    productos.forEach(function(elemento){
        elemento.remove();
    });
}