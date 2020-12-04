let cargarProductos = () => {

    fetch("data/productos.json")
    .then(response => response.json())
    .then((data) => {

        let divProductos = document.getElementById("productos")

        let count = 1

        for(let element of data.productos){

            let container = document.createElement("div")
            container.setAttribute("class","col-lg-4 col-sm-6 mb-4 producto")
            let item = document.createElement("div")
            item.setAttribute("class","portfolio-item")
            let a = document.createElement("a")
            a.setAttribute("class","portfolio-link")
            a.setAttribute("data-toggle","modal")
            
            let link = "portfolioModal" + count
            count++
            portFolioNoticia(link,element)
            link = "#" + link
            a.setAttribute("href",link)

            let divHover = document.createElement("div")
            divHover.setAttribute("class","portfolio-hover")
            let divHoverIn = document.createElement("div")
            divHoverIn.setAttribute("class","portfolio-hover-content")
            let i = document.createElement("i")
            i.setAttribute("class","fas fa-plus fa-3x")

            let img = document.createElement("img")
            img.setAttribute("class","img-fluid img-producto")
            img.setAttribute("src",element.imagen)
            //img.setAttribute("height","450")
            img.setAttribute("width","415")

            divHoverIn.appendChild(i)
            divHover.appendChild(divHoverIn)
            a.appendChild(divHover)
            a.appendChild(img)
            item.appendChild(a)

            let captionContainer = document.createElement("div")
            captionContainer.setAttribute("class","portfolio-caption")
            let caption = document.createElement("div")
            caption.setAttribute("class","portfolio-caption-heading nombre-producto")
            caption.textContent = element.nombre
            let subCaption = document.createElement("div")
            subCaption.setAttribute("class","portfolio-caption-subheading text-muted")
            subCaption.textContent = "$" + element.precio

            captionContainer.appendChild(caption)
            captionContainer.appendChild(subCaption)
            
            item.appendChild(captionContainer)
            container.appendChild(item)

            divProductos.appendChild(container)
        }
    })

}

let portFolioNoticia = (id1,element) => {

    let body = document.getElementsByTagName("body")[0]

    let div1 = document.createElement("div")
    div1.setAttribute("class","portfolio-modal modal fade show")
    div1.setAttribute("id",id1)
    div1.setAttribute("tabindex","-1")
    div1.setAttribute("role","dialog")
    div1.setAttribute("aria-hidden","true")

    let div2 = document.createElement("div")
    div2.setAttribute("class","modal-dialog")

    let div3 = document.createElement("div")
    div3.setAttribute("class","modal-content")

    let div4 = document.createElement("div")
    div4.setAttribute("class","close-modal")
    div4.setAttribute("data-dismiss","modal")

    let close = document.createElement("img")
    close.setAttribute("src","assets/img/close-icon.svg")
    close.setAttribute("alt","Cerrar")
    div4.appendChild(close)

    let div5 = document.createElement("div")
    div5.setAttribute("class","container")

    let div6 = document.createElement("div")
    div6.setAttribute("class","row justify-content-center")

    let div7 = document.createElement("div")
    div7.setAttribute("class","col-lg-8")

    let div8 = document.createElement("div")
    div8.setAttribute("class","modal-body")

    let nombre = document.createElement("h2")
    nombre.textContent = element.nombre

    let img = document.createElement("img")
    img.setAttribute("class","img-fluid d-block mx-auto")
    img.setAttribute("src",element.imagen)
    img.setAttribute("height","100%")
    img.setAttribute("width","100%")

    let p = document.createElement("p")
    p.textContent = element.descripcion

    let btn = document.createElement("button")
    btn.setAttribute("class","btn btn-primary")
    btn.setAttribute("data-dismiss","modal")
    btn.setAttribute("type","button")

    let i = document.createElement("i")

    i.setAttribute("class","fas fa-times mr-1")
    btn.appendChild(i)
    btn.textContent = "Agregar al carrito"

    div8.appendChild(nombre)
    div8.appendChild(img)
    div8.appendChild(p)
    div8.appendChild(btn)

    div7.appendChild(div8)
    div6.appendChild(div7)
    div5.appendChild(div6)
    div3.appendChild(div4)
    div3.appendChild(div5)
    div2.appendChild(div3)
    div1.appendChild(div2)

    body.appendChild(div1)
}

let buscar = (e) =>{
    let textInput = e.target.value
    let key = textInput.toLowerCase()

    let elements = document.getElementsByClassName("producto")

    for(let element of elements){
      let words = element.getElementsByClassName("nombre-producto")[0].textContent
      let wordSet = words.toLowerCase()

      if(!(wordSet.includes(key))){
          element.style.display = "none"
      }else{
          element.style.display = ""
      }
  
    }
}

document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
  })

  let input = document.getElementById("finder")
  input.addEventListener('keyup', buscar);