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