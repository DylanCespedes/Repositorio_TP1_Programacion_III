//Variables de productos
let lista_productos_cartas = []; //lista donde guardo los productos hechos cartas para insertar en el main
let lista_limpia_productos = []; //lista donde guardo los productos por sus atributos

//variables del carrito
let carrito = [] //carrito vacío
let carrito_mensaje = [] //lista donde guardo lo que aparecerá en el HTML cuando se agregue un producto al carrito
let acumulador_carrito = 0 //variable que guarda el total del carrito

let lista_btn_borrar=[]

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

    //Le agrego funcionabilidad a los botones. Recorro la lista de botones, le agrego eventos a cada uno de ellos cuando haga click, dispare la función. Que trata de agregar a la lista del carrito, el producto que está en el mismo indice que el botón. Luego sumo el precio de ese producto al total. Finalmente, agrego a la lista carrito_mensaje, las etiquetas que quiero que inserte en el HTML, describiendo su carrito.
    for(let i = 0; i < lista_botones.length; i++){
        lista_botones[i].addEventListener("click", () => {
            carrito.push(lista_limpia_productos[i]); //ingreso el producto a la lista carrito
            acumulador_carrito += lista_limpia_productos[i].precio; //acumulo el precio total
            carrito_mensaje.push(`<div class="elemento_carrito">
                                <p>Nombre del producto: ${lista_limpia_productos[i].nombre}</p>
                                <p>Precio del producto: ${lista_limpia_productos[i].precio}</p>
                                <box-icon name='x' color='red' class='boton_borrar'></box-icon>
                                </div>
                                `)//Agrego los datos que quiero que aparezca en el apartado de carrito del HTML
            descripcion_carrito.innerHTML = carrito_mensaje; //Inserto en el HTML este mensaje
            precio_total.textContent = `Precio total: ${acumulador_carrito}`; //Inserto el precio total al HTML
            
            //Manipulando el boton de borrar producto
            lista_btn_borrar = document.getElementsByClassName('boton_borrar');//Agrego a una lista los botones de borrado
            console.log(lista_btn_borrar);
            console.log(carrito);
            console.log(carrito_mensaje);
            
            for(let i = 0; i < lista_btn_borrar.length; i++){ //Recorro la lista de los botones
                lista_btn_borrar[i].addEventListener("click", () => { //Cuando apriete sobre el botón, que cumpla la siguiente función
                    carrito.splice(i,1); //Borrar del carrito, el elemento que está en igual indice que el botón que apretó
                    carrito_mensaje.splice(i,1); //Lo mismo, pero de la lista que contiene el mensaje que aparece en el carrito
                    console.log(carrito);
                    console.log(carrito_mensaje);
                    descripcion_carrito.innerHTML = carrito_mensaje; //Vuelvo a insertar en el HTML el mensaje
                })
            }
        });
    } 
    
});




/**************************** BOTONES FILTRO ***********************/
function cambiarTextoBotonMarca(nuevoTexto){
    document.getElementById("dropDownButton-marca").textContent = nuevoTexto;
}

let listaItemMarca = document.getElementsByClassName("item-marca");

let listaItemComponente = document.getElementsByClassName("item-componente");

for(let i = 0; i<listaItemMarca.length; i++){
    listaItemMarca[i].addEventListener("click", ()=>{

        cambiarTextoBotonMarca(listaItemMarca[i].textContent);

    });
}

function cambiarTextoBotonComponente(nuevoTexto){
    document.getElementById("dropdownButton-componente").textContent = nuevoTexto;
}

for(let i = 0; i<listaItemComponente.length; i++){
    listaItemComponente[i].addEventListener("click", ()=>{

        cambiarTextoBotonComponente(listaItemComponente[i].textContent);

    });
}