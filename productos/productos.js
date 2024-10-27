let lista_productos = []; //lista donde guardo los productos hechos cartas para insertar en el main
let lista_limpia_productos = []; //lista donde guardo los productos por sus atributos
let carrito = [] //carrito vacío
let contenedor = document.getElementById('container_productos'); //contenedor del main

fetch('../Json_productos.json')//leemos el archivo
.then(response => {
    return response.json();
})

.then(data =>{
    data.Productos.forEach(producto => {
        lista_productos += `
                            <div class="card" id=${producto.id} style="width: 13rem;">
                                <img src="${producto.Foto}" class="card-img-top" alt="foto_card">
                                <div class="card-body">
                                    <h5 class="card-title">${producto.Nombre}</h5>
                                    <p class="card-text">${producto.Descripcion}</p>
                                    <p class="card-text">$${producto.Precio}</p>
                                    <a class="btn btn-custom" id="btn_carrito">Agregar al carro</a>
                                </div>
                            </div>
                            `;

        //Creo el objeto producto y le ingreso los valores del JSON
        let p = {id: producto.id,
            tipo: producto.Tipo,
            marca: producto.Marca,
            nombre: producto.Nombre,
            precio: producto.Precio,
            descripcion: producto.Descripcion,
            foto: producto.Foto
        }

        //lo agrego a la lista donde guardo los productos
        lista_limpia_productos += p;

    })
    contenedor.innerHTML = lista_productos;
    
})


let btn_carrito = document.getElementById('btn_carrito');
addEventListener("click", () => alert('boton'));

function agregarAlCarrito(){
    carrito.push()
}