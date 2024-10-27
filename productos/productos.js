//Variables de productos
let lista_productos_cartas = []; //lista donde guardo los productos hechos cartas para insertar en el main
let lista_limpia_productos = []; //lista donde guardo los productos por sus atributos

//variables del carrito
let carrito = [] //carrito vacío
let carrito_mensaje = [] //lista donde guardo lo que aparecerá en el HTML cuando se agregue un producto al carrito
let acumulador_carrito = 0

//Obtengo los contenedores donde muestro los productos, donde ingresaré el carrito y los precios
let container_productos = document.getElementById('container_productos');
let descripcion_carrito = document.getElementById('descripcion_carrito');
let precio_total = document.getElementById('precio_total');

descripcion_carrito.innerHTML = `<p>Vacío</p>`
precio_total.textContent = `Precio total: 0`;

fetch('../Json_productos.json')//leemos el archivo
.then(response => {
    return response.json();
})

.then(data => {
    data.Productos.forEach(producto => { //recorro el archivo JSON por productos
        lista_productos_cartas += `
                            <div class="card" id=${producto.Id} style="width: 13rem;">
                                <img src="${producto.Foto}" class="card-img-top" alt="foto_card">
                                <div class="card-body">
                                    <h5 class="card-title">${producto.Nombre}</h5>
                                    <p class="card-text">${producto.Descripcion}</p>
                                    <p class="card-text">$${producto.Precio}</p>
                                    <a class="btn btn-custom btn_carrito">Agregar al carro</a>
                                </div>
                            </div>
                            `;

        //Creo el objeto producto y le ingreso los valores del JSON
        let p = {id: producto.Id,
            tipo: producto.Tipo,
            marca: producto.Marca,
            nombre: producto.Nombre,
            precio: producto.Precio,
            descripcion: producto.Descripcion,
            foto: producto.Foto
        };

        //lo agrego a la lista donde guardo los productos
        lista_limpia_productos.push(p);

    })

    container_productos.innerHTML = lista_productos_cartas; //Ingreso las cartas de bootstrap con los datos guardados al HTML

    //Guardo una lista con los botones
    let lista_botones = document.getElementsByClassName("btn_carrito");

    //Le agrego funcionabilidad a los botones. La función del click agrega que si se dispara, ingrese a la lista carrito el producto en el mismo indice del botón que hizo click
    for(let i = 0; i < lista_botones.length; i++){
        lista_botones[i].addEventListener("click", () => {
            carrito.push(lista_limpia_productos[i]);
            acumulador_carrito += lista_limpia_productos[i].precio;
            carrito_mensaje += `<div class="elemento_carrito">
                                <p>Nombre del producto: ${lista_limpia_productos[i].nombre}</p>
                                <p>Precio del producto: ${lista_limpia_productos[i].precio}</p>
                                </div>
                                `
            descripcion_carrito.innerHTML = carrito_mensaje;
            precio_total.textContent = `Precio total: ${acumulador_carrito}`;
        
        });
    } 

});

