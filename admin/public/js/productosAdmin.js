
let idProducto = ""
let btnAgregarProducto = document.createElement("button");
btnAgregarProducto.setAttribute("data-bs-toggle","modal")
btnAgregarProducto.setAttribute("data-bs-target","#productosModal")
btnAgregarProducto.setAttribute("class","btn btn-primary");
btnAgregarProducto.textContent = "Agregar producto";

let inputNombre = document.getElementById("inputDescripcionProducto")
let inputPrecio = document.getElementById("inputPrecioProducto")
let inputStock = document.getElementById("inputStockProducto")
let inputImagen = document.getElementById("inputImagenProducto")

let findProducto = document.createElement("input")
findProducto.setAttribute("class","finder")
findProducto.setAttribute("placeholder","Buscar producto")

let cargarCrudProductos = () => {

    fetch("https://server-emaniel.herokuapp.com/productos")
    .then(response => response.json())
    .then((data) => {


        let tabla = document.getElementById("tabla-productos")

        data.forEach(element => {
            
            let tr = document.createElement("tr")

            let tdNombre = document.createElement("td")
            let img = document.createElement("img")
            img.setAttribute("src",element.imagen)
            let pNombre = document.createElement("p")
            pNombre.setAttribute("class","nombre-producto")
            pNombre.textContent = element.descripcion
            tdNombre.appendChild(img)
            tdNombre.appendChild(pNombre)

            let tdPrecio = document.createElement("td")
            tdPrecio.setAttribute("class","text-center")
            let pPrecio = document.createElement("p")
            pPrecio.textContent = "$" + element.precio
            tdPrecio.appendChild(pPrecio)

            let tdStock = document.createElement("td")
            let pStock = document.createElement("p")
            pStock.textContent = element.stock
            tdStock.appendChild(pStock)

            let tdOptions = document.createElement("td")
            tdOptions.setAttribute("class","options-table")

            let divEdit = document.createElement("div")
            divEdit.setAttribute("id",element.id+"-editProducto")
            divEdit.setAttribute("class","btn-option")
            divEdit.setAttribute("data-bs-toggle","modal")
            divEdit.setAttribute("data-bs-target","#productosModal")
            let imgEdit = document.createElement("img")
            imgEdit.setAttribute("src","assets/img/edit-item.png")
            imgEdit.setAttribute("height","30px")
            imgEdit.setAttribute("width","30px")
            divEdit.appendChild(imgEdit)

            //editar producto
            divEdit.onclick = function() {
                idProducto = divEdit.getAttribute('id').split("-")[0]
                let titulo = document.getElementById("modalProductoTitulo")
                titulo.textContent = "Editar producto"

                fetch("https://server-emaniel.herokuapp.com/productos/find/" + idProducto, {
                    method: 'POST',
                })
                .then(response => response.json())
                .then((producto) => {
                    inputNombre.value = producto.descripcion
                    inputPrecio.value = producto.precio
                    inputStock.value = producto.stock
                    inputImagen.value = producto.imagen
                })
                
            };

            let divDelete = document.createElement("div")
            divDelete.setAttribute("id",element.id+"-deleteProducto")
            divDelete.setAttribute("class","btn-option")
            let imgDelete = document.createElement("img")
            imgDelete.setAttribute("src","assets/img/delete-item.png")
            imgDelete.setAttribute("height","30px")
            imgDelete.setAttribute("width","30px")
            divDelete.appendChild(imgDelete)
            //eliminar producto
            divDelete.onclick = function() {
                let parent = divDelete.parentElement.parentElement
                let idProducto = divDelete.getAttribute('id').split("-")[0]
                parent.style.display = 'none';

                fetch("https://server-emaniel.herokuapp.com/productos/delete/" + idProducto, {
                    method: 'DELETE',
                })
                
            };

            tdOptions.appendChild(divEdit)
            tdOptions.appendChild(divDelete)


            tr.appendChild(tdNombre)
            tr.appendChild(tdPrecio)
            tr.appendChild(tdStock)
            tr.appendChild(tdOptions)

            tabla.appendChild(tr)
        });
    })

}

document.addEventListener('DOMContentLoaded', function() {
    cargarCrudProductos();
    let content = document.getElementById("agregarProducto");
    //<b-button variant="primary" id = "agregarProducto">Agregar</b-button>
    content.appendChild(btnAgregarProducto)

    let contentFinder = document.getElementById("buscarProducto");
    contentFinder.appendChild(findProducto)
})

let actualizarCrudProductos = () =>{
    let producto = {
        "descripcion": inputNombre.value,
        "precio": inputPrecio.value,
        "stock": inputStock.value,
        "imagen": inputImagen.value,
        "admin": 1
    }

    fetch("https://server-emaniel.herokuapp.com/productos/update/" + idProducto, {
        method: 'PUT',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(producto)
    })
    .then((data)=>{
        console.log(data)
        limpiarCrudProductos()
        cargarCrudProductos()
    })
}

    
let limpiarCrudProductos = () =>{
    let tabla = document.getElementById("tabla-productos")
    tabla.innerHTML=""
}

let agregarProducto = () =>{

    let producto = {
        "descripcion": inputNombre.value,
        "precio": inputPrecio.value,
        "stock": inputStock.value,
        "imagen": inputImagen.value,
        "admin": 1
    }

    fetch("https://server-emaniel.herokuapp.com/productos/save", {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(producto)
    })
    .then((data)=>{
        console.log(data)
        limpiarCrudProductos()
        cargarCrudProductos()
    })

}

btnAgregarProducto.addEventListener("click",()=>{
    idProducto = 0
    let titulo = document.getElementById("modalProductoTitulo")
    titulo.textContent = "Agregar producto"

    inputNombre.value = ""
    inputPrecio.value = ""
    inputStock.value = ""
    inputImagen.value = ""

})

let btnGuardarProducto = document.getElementById("guardarModalProducto")
btnGuardarProducto.addEventListener("click",()=>{
    if(idProducto!=0){
        actualizarCrudProductos()
    }else{
        agregarProducto()
    }
    
})

let buscarCrudProductos = (e) =>{
    let textInput = e.target.value
    let key = textInput.toLowerCase()

    let elements = document.getElementsByClassName("nombre-producto")

    for(let element of elements){
      let words = element.textContent.toLowerCase()
      
      item = element.parentElement.parentElement
      
      if(!(words.includes(key))){
          item.style.display = "none"

      }else{
          item.style.display = ""
      }

    }
  
}

findProducto.addEventListener('keyup', buscarCrudProductos);