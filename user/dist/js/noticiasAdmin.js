let cargarCrudNoticias = () =>{

    fetch("data/noticias.json")
    .then(response => response.json())
    .then((data) => {

        let tabla = document.getElementById("tabla-noticias")
        
        for(let element of data.noticias){

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
            pFecha.textContent = "3/12/2020"
            tdFecha.appendChild(pFecha)

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


            tr.appendChild(tdTitulo)
            tr.appendChild(tdFecha)
            tr.appendChild(tdOptions)

            tabla.appendChild(tr)
 
        }
    })

}



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


document.addEventListener('DOMContentLoaded', function() {
    cargarCrudNoticias();
})

let inputCrudNoticias = document.getElementById("finder1")
inputCrudNoticias.addEventListener('keyup', buscarCrudNoticias);