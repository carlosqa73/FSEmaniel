let idUsuario = ""
let btnAgregarUsuario = document.createElement("button");
btnAgregarUsuario.setAttribute("data-bs-toggle","modal")
btnAgregarUsuario.setAttribute("data-bs-target","#usuariosModal")
btnAgregarUsuario.setAttribute("class","btn btn-primary");
btnAgregarUsuario.textContent = "Agregar usuario";

let inputNombreUsuario = document.getElementById("inputNombreUsuario")
let inputApellido = document.getElementById("inputApellidoUsuario")
let inputClave = document.getElementById("inputClaveUsuario")
let inputDireccion = document.getElementById("inputDireccionUsuario")
let inputTipo = document.getElementById("selectTipoUsuario")
let inputCorreo = document.getElementById("inputCorreoUsuario")

let findUsuario = document.createElement("input")
findUsuario.setAttribute("class","finder")
findUsuario.setAttribute("placeholder","Buscar usuario por nombre")

let cargarCrudUsuarios = () =>{
    fetch("https://server-emaniel.herokuapp.com/usuarios")
    .then(response => response.json())
    .then((data) => {
        let tabla = document.getElementById("tabla-usuarios")
        data.forEach(element => {
            
            let tr = document.createElement("tr")

            let tdNombre = document.createElement("td")
            let pNombre = document.createElement("p")
            pNombre.setAttribute("class","nombre-usuario")
            pNombre.textContent = element.nombre
            tdNombre.appendChild(pNombre)

            let tdApellido = document.createElement("td")
            tdApellido.setAttribute("class","text-center")
            let pApellido = document.createElement("p")
            pApellido.textContent = element.apellido
            tdApellido.appendChild(pApellido)

            let tdDireccion = document.createElement("td")
            let pDireccion = document.createElement("p")
            pDireccion.textContent = element.direccion
            tdDireccion.appendChild(pDireccion)

            let tdOptions = document.createElement("td")
            tdOptions.setAttribute("class","options-table")

            let divEdit = document.createElement("div")
            divEdit.setAttribute("id",element.id+"-editProducto")
            divEdit.setAttribute("class","btn-option")
            divEdit.setAttribute("data-bs-toggle","modal")
            divEdit.setAttribute("data-bs-target","#usuariosModal")
            let imgEdit = document.createElement("img")
            imgEdit.setAttribute("src","assets/img/edit-item.png")
            imgEdit.setAttribute("height","30px")
            imgEdit.setAttribute("width","30px")
            divEdit.appendChild(imgEdit)

            //editar usuario
            divEdit.onclick = function() {
                idUsuario = divEdit.getAttribute('id').split("-")[0]
                let titulo = document.getElementById("modalUsuarioTitulo")
                titulo.textContent = "Editar usuario"

                fetch("https://server-emaniel.herokuapp.com/usuarios/find/" + idUsuario, {
                    method: 'POST',
                })
                .then(response => response.json())
                .then((usuario) => {
                    inputNombreUsuario.value = usuario.nombre
                    inputApellido.value = usuario.apellido
                    inputClave.value = usuario.clave
                    inputDireccion.value = usuario.direccion
                    inputTipo.value = usuario.tipoUsuario

                    fetch("https://server-emaniel.herokuapp.com/correos/findByUsuario/" + idUsuario, {
                        method: 'POST',
                    })
                    .then(response => response.json())
                    .then((mails) => {
                        inputCorreo.value = mails[0].correo
                    })
                    
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
                let idUsuario = divDelete.getAttribute('id').split("-")[0]
                parent.style.display = 'none';

                fetch("https://server-emaniel.herokuapp.com/usuarios/delete/" + idUsuario, {
                    method: 'DELETE',
                })
                .then((data) => {
                    deleteCorreo()
                })
                
            };

            tdOptions.appendChild(divEdit)
            tdOptions.appendChild(divDelete)


            tr.appendChild(tdNombre)
            tr.appendChild(tdApellido)
            tr.appendChild(tdDireccion)
            tr.appendChild(tdOptions)

            tabla.appendChild(tr)
        });

    })
}

document.addEventListener('DOMContentLoaded', function() {
    cargarCrudUsuarios();
    let content = document.getElementById("agregarUsuario");
    //<b-button variant="primary" id = "agregarProducto">Agregar</b-button>
    content.appendChild(btnAgregarUsuario)

    let contentFinder = document.getElementById("buscarUsuario");
    contentFinder.appendChild(findUsuario)
})

let editCorreo = (mail) => {
    fetch("https://server-emaniel.herokuapp.com/correos/findByUsuario/" + idUsuario, {
        method: 'POST',
    })
    .then(response => response.json())
    .then((mails) => {
        let id = mails[0].id
        updateCorreo(mail,id)
    })

}

let updateCorreo = (mail,idCorreo) =>{
    let correo ={
        "idUsuario": idUsuario,
        "correo": mail
    }

    fetch("https://server-emaniel.herokuapp.com/correos/update/" + idCorreo, {
        method: 'PUT',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(correo)
    })
    .then((data)=>{
        console.log(data)
    })
}

let createCorreo = (mail,id) =>{
    let correo ={
        "idUsuario": id,
        "correo": mail
    }

    fetch("https://server-emaniel.herokuapp.com/correos/save", {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(correo)
    })
    .then((data)=>{
        console.log(data)
    })   
}

let deleteCorreo = () =>{
    fetch("https://server-emaniel.herokuapp.com/correos/delete/" + idUsuario, {
        method: 'DELETE'
    })
    .then((data)=>{
        console.log(data)
    })
}

let limpiarCrudUsuarios = () =>{
    let tabla = document.getElementById("tabla-usuarios")
    tabla.innerHTML=""
}

let actualizarCrudUsuarios = () =>{
    let usuario = {
        "nombre": inputNombreUsuario.value,
        "apellido": inputApellido.value,
        "clave": inputClave.value,
        "tipoUsuario": inputTipo.value,
        "direccion": inputDireccion.value
    }

    fetch("https://server-emaniel.herokuapp.com/usuarios/update/" + idUsuario, {
        method: 'PUT',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(usuario)
    })
    .then((data)=>{
        console.log(data)
        limpiarCrudUsuarios()
        cargarCrudUsuarios()
    })
    editCorreo(inputCorreo.value)
}

let agregarUsuario = ()=>{
    let usuario = {
        "nombre": inputNombreUsuario.value,
        "apellido": inputApellido.value,
        "clave": inputClave.value,
        "tipoUsuario": inputTipo.value,
        "direccion": inputDireccion.value
    }

    fetch("https://server-emaniel.herokuapp.com/usuarios/save", {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(usuario)
    })
    .then(response => response.json())
    .then((data)=>{
        limpiarCrudUsuarios()
        cargarCrudUsuarios()
        createCorreo(inputCorreo.value,data.id)
        console.log(data)
    })
    
}

btnAgregarUsuario.addEventListener("click",()=>{
    idUsuario = 0
    let titulo = document.getElementById("modalUsuarioTitulo")
    titulo.textContent = "Agregar usuario"

    inputNombreUsuario.value = ""
    inputApellido.value = ""
    inputClave.value = ""
    inputTipo.value = ""
    inputDireccion.value = ""
    inputCorreo.value = ""
})

let btnGuardarUsuario = document.getElementById("guardarModalUsuario")
btnGuardarUsuario.addEventListener("click",()=>{
    if(idUsuario!=0){
        actualizarCrudUsuarios()
    }else{
        agregarUsuario()
    }
})

let buscarCrudUsuarios = (e) =>{
    let textInput = e.target.value
    let key = textInput.toLowerCase()

    let elements = document.getElementsByClassName("nombre-usuario")

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

findUsuario.addEventListener('keyup', buscarCrudUsuarios);