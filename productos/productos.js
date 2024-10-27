let lista_productos = [];
let contenedor = document.getElementById('container_productos');

fetch('../Json_productos.json')//leemos el archivo
.then(response => {
    return response.json();
})

.then(data =>{
    data.Productos.forEach(producto => {
        lista_productos += `
                            <div class="card" style="width: 13rem;">
                                <img src="${producto.Foto}" class="card-img-top" alt="foto_card">
                                <div class="card-body">
                                    <h5 class="card-title">${producto.Nombre}</h5>
                                    <p class="card-text">${producto.Descripcion}</p>
                                    <p class="card-text">${producto.Precio}</p>
                                    <a class="btn btn-custom" id="btn_carrito">Agregar al carro</a>
                                </div>
                            </div>
                            `
    })
    contenedor.innerHTML = lista_productos;
})

let btn_carrito = document.getElementById('btn_carrito');