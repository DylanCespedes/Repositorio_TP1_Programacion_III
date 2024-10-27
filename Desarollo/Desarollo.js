function mostrarAlerta(){
    alert("Agregado con exito al carro!!!");
}
function toggleMode() {
    // Selecciona el elemento body
    const body = document.body;

    // Alterna entre las clases "light-mode" y "dark-mode"
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    // Guarda el modo seleccionado en el almacenamiento local (opcional)
    const mode = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", mode);
}

let lista_limpia_productos = []
function obtenerProductos(){
    fetch('../Json_productos.json')//leemos el archivo
    .then(response => {
    return response.json();
    })

    .then(data =>{
        data.Productos.forEach(producto => { //recorro el archvio JSON por productos

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
    })
} 
function agregarProducto() {
    let listNuevaProductos = []

    // Obtener los valores de los campos de entrada
    const id = document.getElementById("id").value;
    const tipo = document.getElementById("tipo").value;
    const marca = document.getElementById("marca").value;
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const descripcion = document.getElementById("descripcion").value;
    const imagen = document.getElementById("imagen").value;

    const nuevoProducto = {
        id:id,
        tipo:tipo,
        marca:marca,
        nombre:nombre,
        precio:precio,
        descripcion:descripcion,
        imgen:imagen
    };
    listNuevaProductos.push(nuevoProducto);
    console.log(listNuevaProductos)
    document.getElementById("productForm").reset();
}