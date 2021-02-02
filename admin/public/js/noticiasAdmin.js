
let idNoticia = ""
let btnAgregarNoticia = document.createElement("button");
btnAgregarNoticia.setAttribute("data-bs-toggle","modal")
btnAgregarNoticia.setAttribute("data-bs-target","#noticiasModal")
btnAgregarNoticia.setAttribute("class","btn btn-primary");
btnAgregarNoticia.textContent = "Agregar noticia";

let inputTitulo = document.getElementById("inputTituloNoticia")
let inputContenido = document.getElementById("inputContenidoNoticia")
let inputFecha = document.getElementById("inputFechaNoticia")
let inputImagenNoticia = document.getElementById("inputImagenNoticia")

let cargarCrudNoticias = () =>{

    fetch("https://server-emaniel.herokuapp.com/noticias")
    .then(response => response.json())
    .then((data) => {

        let tabla = document.getElementById("tabla-noticias")

        data.forEach(element => {
            let tr = document.createElement("tr")

            let tdTitulo = document.createElement("td")
            let img = document.createElement("img")
            img.setAttribute("src",element.imagen)
            let pTitulo = document.createElement("p")
            pTitulo.setAttribute("class","nombre-noticia")
            pTitulo.textContent = element.titulo
            tdTitulo.appendChild(img)
            tdTitulo.appendChild(pTitulo)


            let tdFecha = document.createElement("td")
            let pFecha = document.createElement("p")
            pFecha.textContent = element.fecha
            tdFecha.appendChild(pFecha)

            let tdOptions = document.createElement("td")
            tdOptions.setAttribute("class","options-table")

            let divEdit = document.createElement("div")
            divEdit.setAttribute("id",element.id+"-editNoticia")
            divEdit.setAttribute("class","btn-option")
            divEdit.setAttribute("data-bs-toggle","modal")
            divEdit.setAttribute("data-bs-target","#noticiasModal")
            let imgEdit = document.createElement("img")
            imgEdit.setAttribute("src","assets/img/edit-item.png")
            imgEdit.setAttribute("height","30px")
            imgEdit.setAttribute("width","30px")
            divEdit.appendChild(imgEdit)

            //editar noticia
            divEdit.onclick = function() {
                idNoticia = divEdit.getAttribute('id').split("-")[0]
                let titulo = document.getElementById("modalNoticiaTitulo")
                titulo.textContent = "Editar noticia"

                fetch("https://server-emaniel.herokuapp.com/noticias/find/" + idNoticia, {
                    method: 'POST',
                })
                .then(response => response.json())
                .then((noticia) => {
                    inputTitulo.value = noticia.titulo
                    inputContenido.value = noticia.contenido
                    inputFecha.value = noticia.fecha
                    inputImagenNoticia.value = noticia.imagen
                })
                
            };

            let divDelete = document.createElement("div")
            divDelete.setAttribute("id",element.id+"-deleteNoticia")
            divDelete.setAttribute("class","btn-option")
            let imgDelete = document.createElement("img")
            imgDelete.setAttribute("src","assets/img/delete-item.png")
            imgDelete.setAttribute("height","30px")
            imgDelete.setAttribute("width","30px")
            divDelete.appendChild(imgDelete)

            //eliminar noticia
            divDelete.onclick = function() {
                let parent = divDelete.parentElement.parentElement
                idNoticia = divDelete.getAttribute('id').split("-")[0]
                parent.style.display = 'none';

                fetch("https://server-emaniel.herokuapp.com/noticias/delete/" + idNoticia, {
                    method: 'DELETE',
                })
                
            };
                
            

            tdOptions.appendChild(divEdit)
            tdOptions.appendChild(divDelete)


            tr.appendChild(tdTitulo)
            tr.appendChild(tdFecha)
            tr.appendChild(tdOptions)

            tabla.appendChild(tr)
        });
    })

}

document.addEventListener('DOMContentLoaded', function() {
    cargarCrudNoticias();
    let content = document.getElementById("agregarNoticia");
    //<b-button variant="primary" id = "agregarProducto">Agregar</b-button>
    content.appendChild(btnAgregarNoticia)
    
})

let limpiarCrudNoticias = () =>{
    let tabla = document.getElementById("tabla-noticias")
    tabla.innerHTML=""
}

let actualizarCrudNoticias = () =>{
    let noticia = {
        "titulo": inputTitulo.value,
        "contenido": inputContenido.value,
        "fecha": inputFecha.value,
        "imagen": inputImagenNoticia.value,
        "admin": 1
    }

    fetch("https://server-emaniel.herokuapp.com/noticias/update/" + idNoticia, {
        method: 'PUT',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(noticia)
    })
    .then((data)=>{
        console.log(data)
        limpiarCrudNoticias()
        cargarCrudNoticias()
    })
}

let agregarNoticia = () =>{
    let noticia = {
        "tit": inputTitulo.value,
        "contenido": inputContenido.value,
        "fecha": inputFecha.value,
        "imagen": inputImagenNoticia.value,
        "adm": 1
    }

    fetch("https://server-emaniel.herokuapp.com/noticias/save", {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(noticia)
    })
    .then((data)=>{
        console.log(data)
        limpiarCrudNoticias()
        cargarCrudNoticias()
    })

    console.log(noticia)
}

btnAgregarNoticia.addEventListener("click",()=>{
    idNoticia = 0
    let titulo = document.getElementById("modalNoticiaTitulo")
    titulo.textContent = "Agregar noticia"

    inputTitulo.value = ""
    inputContenido.value = ""
    inputFecha.value = ""
    inputImagenNoticia.value = ""

})

let btnGuardarNoticia = document.getElementById("guardarModalNoticia")
btnGuardarNoticia.addEventListener("click",()=>{
    if(idNoticia!=0){
        actualizarCrudNoticias()
    }else{
        agregarNoticia()
    }
    
})

let buscarCrudNoticias = (e) =>{
    let textInput = e.target.value
    let key = textInput.toLowerCase()

    let elements = document.getElementsByClassName("nombre-noticia")

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

let inputCrudNoticias = document.getElementById("finder1")
inputCrudNoticias.addEventListener('keyup', buscarCrudNoticias);