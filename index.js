let contadorCarrito = 0;

function agregarCarrito(){
    contadorCarrito++;

    document.getElementById("contadorCarrito").textContent = contadorCarrito;

    alert("Se agrego al carro con exito!!!");
}
