//variables
const btnCarrito = document.querySelector('.btn-carrito');
const carrito = document.querySelector('#carrito');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaProductos = document.querySelector('#lista-productos');
const comprar = document.querySelector('#comprar');
const compras = document.querySelector('#compras');
let articulosCarrito = [];





//para que despliegue el carrito
btnCarrito.addEventListener('click' , mostrarCarrito);

function mostrarCarrito(){
    if(carrito.classList.contains('activo')){
        carrito.classList.remove('activo');
        this.classList.remove('activo');
       
    }else{
        carrito.classList.add('activo');
        this.classList.add('activo');
        
    }
}
//despliegue las compras
comprar.addEventListener('click', mostrarCompras);
function mostrarCompras(){
    if(compras.classList.contains('activo')){
        compras.classList.remove('activo');
        this.classList.remove('activo');
       
    }else{
        compras.classList.add('activo');
        this.classList.add('activo');
        
    }
}

cargarEventListeners();
function cargarEventListeners(){
    //cuando agregar un producto presionando el boton agregar
    listaProductos.addEventListener('click', agregarProductos)

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarProducto)

    //muestra las compras seleccionadas el carrito (loccalStorage)
    document.addEventListener('DOMContentLoaded', () =>{
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    })


    //vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', ()=>{
        articulosCarrito = [];//vaciamos el arreglo
        limpiarHTML(); //eliminamos todo el html
    })
    
};


//funciones:
//==cuando apreto el boton agregar se me agrege al carrito
function agregarProductos(e){
    //e.preventDefault para que no se suba cuando apreto comprar
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')){
    const prodSeleccionado = e.target.parentElement.parentElement;
    leerDatosProducto(prodSeleccionado)


}
}
//Eliminar productos
function eliminarProducto(e){
    if(e.target.classList.contains('borrar-producto')){
    const productoId = e.target.getAttribute('data-id');
    
    //elimina del arreglo articulosCarrito por el data-id
    articulosCarrito = articulosCarrito.filter(producto =>producto.id !== productoId);
    
    carritoHTML();

}
    updatePrice();

}

//lee datos al q le dimos click y extrae la informacion del curso
function leerDatosProducto(producto){
 //console.log(producto)
    //creo objeto con el contenido del producto actual
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h5').textContent,
        precio: producto.querySelector('.precio span').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }
    //console.log(infoProducto)

   //Revisar si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(producto => producto.id === infoProducto.id);
    if(existe){
        //actualizamos la cantida
        const productos = articulosCarrito.map(producto =>{
            if(producto.id === infoProducto.id){
                producto.cantidad ++;
                updatePrice();
                return producto; //retorna los objetos actualizados
            }else{
                return producto; //retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito = [...productos];
    }else{
        //caso contrario agregamos el producto al carrito
        articulosCarrito = [...articulosCarrito, infoProducto]
        //console.log(articulosCarrito);
    }
   
    //Agregar elementos al arreglo de carrito
    // articulosCarrito = [...articulosCarrito, infoProducto]
    // console.log(articulosCarrito);
    carritoHTML();
                
   
}

//Muestar el carrito en el HTML
function carritoHTML(){
    //limpiar html para que no repita el objeto seleccionado
    limpiarHTML();

    //recorre el carrito y genera el HMTL
    articulosCarrito.forEach( producto=>{ 
        let { imagen, titulo, precio, cantidad, id} = producto;
        let row = document.createElement('tr');
    
        row.innerHTML=`

        <td>
        <img src="${imagen}" width="50">
        </td>
        <td>${titulo}</td>
        <td class="cart-price">${precio}</td>
        <td class="prod-quantity" type="number">${cantidad}</td>
        <td>
            <a href="#" class="borrar-producto" data-id="${id}"> x </a>
        </td>

        `;
        //agrega el HTML del carrito en el tbody
        listaCarrito.appendChild(row);
        
        updatePrice();

        
 

    })
    //agregar el carrito de compras al storege
        sincronizarStorage();

}
function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}


//Elimina los cursos del tbody
function limpiarHTML(){
    while(listaCarrito.firstChild){
        listaCarrito.removeChild(listaCarrito.firstChild)

    }
    

}

//creo la funcion calcular precio total:
function updatePrice(){
    let total = 0;
    const totalPrice = document.querySelector(".total-price")
    articulosCarrito.forEach((producto)=>{
        const precio = Number(producto.precio.replace("$", ""))
        total = total+ precio*producto.cantidad
    })
    totalPrice.innerText = "$" + total;
    document.querySelector(".cart-quantity").textContent = articulosCarrito.length; 
    

}




