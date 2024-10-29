//variables del carrito
let carrito = [] //carrito vacío
let carrito_mensaje = [] //lista donde guardo lo que aparecerá en el HTML cuando se agregue un producto al carrito
let acumulador_carrito = 0 //variable que guarda el total del carrito


//Obtengo los contenedores donde muestro los productos, donde ingresaré el carrito y los precios
let descripcion_carrito = document.getElementById('descripcion_carrito');
let precio_total = document.getElementById('precio_total');
let container_productos = document.getElementById('container_productos');

//Ingreso los valores predeterminados del carrito, cuando no tiene nada
descripcion_carrito.innerHTML = `<p>Vacío</p>`
precio_total.textContent = `Precio total: 0`;

//Variables de productos
let lista_productos_cartas = []; //lista donde guardo los productos hechos cartas para insertar en el main
let lista_productos =[] //lista donde guardo los productos por sus atributos

//Listas donde contengo los botones
let lista_botones = []
let lista_btn_borrar=[]


fetch('../Json_productos.json')//leemos el archivo
.then(response => {
    return response.json();
})

.then(data => {
    data.Productos.forEach(producto => { //recorro el archivo JSON por productos

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
        lista_productos.push(p);
    })    
})

//.finally, para que se ejecuten las funciones LUEGO del .then() y se guarde correctamente la lista de productos. Asincronismo
.finally(() => {
        verProductos(lista_productos);
        agregarProductoCarrito(lista_productos);
    }
);

//verProductos(): función que ingresa en el HTML todos los productos que fueron guardados en la lista_productos. La idea es guardar dentro de una lista local, una carta de bootstrap por cada producto que tendrá información sobre ellos. Al finalizar el bucle insertamos la lista al container. Finalmente, guardo en lista_botones una lista que contenga todos los botones de agregar al carro; esto porque luego nos servirá para darles funcionalidad
function verProductos(lista){
    let lista_productos_card = [];
    for (let i = 0; i < lista.length; i++){
        lista_productos_card.push( `
        <div class="card" id=${lista[i].id} style="width: 13rem;">
            <img src="${lista[i].foto}" class="card-img-top" alt="foto_card">
            <div class="card-body">
                <h5 class="card-title">${lista[i].nombre}</h5>
                <p class="card-text">${lista[i].descripcion}</p>
                <p class="card-text">$${lista[i].precio}</p>
                <a class="btn btn-custom btn_carrito">Agregar al carro</a>
            </div>
        </div>
        `); 
    }
    

    container_productos.innerHTML = lista_productos_card;
    lista_botones = document.getElementsByClassName("btn_carrito");
}

//Esta función es encargada de agregar los productos al carrito e ingresarlos al apartado del HTML donde va el carrito. Recorre la lista de botones que le cargamos en la función anterior. Cuando hace click dentro del botón: se ingresa el producto a la lista carrito, sumamos el precio total, guardamos en la lista carrito_mensaje un contenedor que tiene la información resumida del producto, que luego será ingresada al HTML. Finalmente lo insertamos al archivo HTML, actualizamos el precio total en el archivo también y guardamos en la lista de botones de borrar, el boton borrar.
function agregarProductoCarrito(lista){
    for(let i = 0; i < lista_botones.length; i++){
        lista_botones[i].addEventListener("click", () => {
            carrito.push(lista[i]); //ingreso el producto a la lista carrito
            acumulador_carrito += lista[i].precio; //acumulo el precio total
            carrito_mensaje.push(`<div class="elemento_carrito">
            <p>Nombre del producto: ${lista[i].nombre}</p>
            <p>Precio del producto: ${lista[i].precio}</p>
            <a class="btn btn-custom btn-borrar">Borrar</a>
            </div>
            `)//Agrego los datos que quiero que aparezca en el apartado de carrito del HTML
            descripcion_carrito.innerHTML = carrito_mensaje; //Inserto en el HTML este mensaje
            precio_total.textContent = `Precio total: ${acumulador_carrito}`; //Inserto el precio total al HTML
            lista_btn_borrar = document.getElementsByClassName("btn-borrar");
        })
    }
}

//A realizar aún
function borrarProductoCarrito(){
    for (let i = 0; i < lista_btn_borrar.length; i++){
        lista_btn_borrar[i].addEventListener("click", () => {
            alert('hola');
        })
    }
}









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


/**********************************Modo oscuro/claro********************** */
function CambiarClaroOscuro() {
    // Selecciona el elemento body
    const body = document.body;

    // Alterna entre las clases "light-mode" y "dark-mode"
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    // Guarda el modo seleccionado en el almacenamiento local (opcional)
    const mode = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", mode);
}