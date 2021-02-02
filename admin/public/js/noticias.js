let cargarNoticias = () =>{

    fetch("data/noticias.json")
    .then(response => response.json())
    .then((data) => {

        let divNoticias = document.getElementById("noticias")
        let count = 1

        for(let element of data.noticias){

            let div1 = document.createElement("div")
            div1.setAttribute("class","col-lg-4 col-sm-6 mb-4 noticia")

            let div2 = document.createElement("div")
            div2.setAttribute("class","portfolio-item")

            let img = document.createElement("img")
            img.setAttribute("class","imagen-noticias")
            img.setAttribute("src",element.imagen)
            img.setAttribute("height","300")
            img.setAttribute("width","300")

            let div3 = document.createElement("div")
            div3.setAttribute("class","portfolio-caption")

            let br1 = document.createElement("br")

            let div4 = document.createElement("div")
            div4.setAttribute("class","portfolio-caption-subheading text-muted")

            let titulo = document.createElement("strong")
            titulo.textContent = element.titulo

            div4.appendChild(titulo)

            div3.appendChild(br1)
            div3.appendChild(div4)

            let br2 = document.createElement("br")

            let a = document.createElement("a")
            a.setAttribute("class","portfolio-link")
            a.setAttribute("data-toggle","modal")

            let link = "noticiasModal" + count
            count++
            portFolio(link,element)
            link = "#" + link
            a.setAttribute("href",link)

            let divA1 = document.createElement("div")
            divA1.setAttribute("class","portfolio-hover")

            let divA2 = document.createElement("div")
            divA1.setAttribute("class","portfolio-hover-content")

            let i = document.createElement("i")
            i.setAttribute("class","fas fa-plus fa-3x")

            divA2.appendChild(i)
            divA1.appendChild(divA2)

            a.appendChild(divA1)

            div2.appendChild(img)
            div2.appendChild(div3)
            div2.appendChild(br2)
            div2.appendChild(a)

            div1.appendChild(div2)

            divNoticias.appendChild(div1)

        }

    })

}

let portFolio = (id1,element) => {

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
    nombre.textContent = element.titulo

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
    btn.textContent = "Cerrar"

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

document.addEventListener('DOMContentLoaded', function() {
    cargarNoticias();
})