let cargarCrudProductos = () => {

    fetch("data/productos.json")
    .then(response => response.json())
    .then((data) => {

        let tabla = document.getElementById("tabla-productos")

        for(let element of data.productos){

            let tr = document.createElement("tr")

            let tdNombre = document.createElement("td")
            let img = document.createElement("img")
            img.setAttribute("src",element.imagen)
            let pNombre = document.createElement("p")
            pNombre.setAttribute("class","nombre-producto")
            pNombre.textContent = element.nombre
            tdNombre.appendChild(img)
            tdNombre.appendChild(pNombre)

            let tdPrecio = document.createElement("td")
            tdPrecio.setAttribute("class","text-center")
            let pPrecio = document.createElement("p")
            pPrecio.textContent = "$" + element.precio
            tdPrecio.appendChild(pPrecio)

            let tdStock = document.createElement("td")
            let pStock = document.createElement("p")
            pStock.textContent = 0
            tdStock.appendChild(pStock)

            let tdOptions = document.createElement("td")
            tdOptions.setAttribute("class","options-table")

            let divEdit = document.createElement("div")
            divEdit.setAttribute("class","btn-option")
            let imgEdit = document.createElement("img")
            imgEdit.setAttribute("src","assets/img/edit-item.png")
            imgEdit.setAttribute("height","30px")
            imgEdit.setAttribute("width","30px")
            divEdit.appendChild(imgEdit)

            let divDelete = document.createElement("div")
            divDelete.setAttribute("class","btn-option")
            let imgDelete = document.createElement("img")
            imgDelete.setAttribute("src","assets/img/delete-item.png")
            imgDelete.setAttribute("height","30px")
            imgDelete.setAttribute("width","30px")
            divDelete.appendChild(imgDelete)
            divDelete.onclick = function() {
                let parent = divDelete.parentElement.parentElement
                parent.style.display = 'none';
                
            };

            tdOptions.appendChild(divEdit)
            tdOptions.appendChild(divDelete)


            tr.appendChild(tdNombre)
            tr.appendChild(tdPrecio)
            tr.appendChild(tdStock)
            tr.appendChild(tdOptions)

            tabla.appendChild(tr)
        }
    })

}

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

document.addEventListener('DOMContentLoaded', function() {
    cargarCrudProductos();
  })

  let inputCrudProductos = document.getElementById("finder2")
  inputCrudProductos.addEventListener('keyup', buscarCrudProductos);

  