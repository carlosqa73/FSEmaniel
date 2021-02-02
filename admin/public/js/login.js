let mail
let pass

document.addEventListener('DOMContentLoaded', function() {

    do{
        mail = prompt("Autenticación requerida.\nIngrese su correo:");
    }while(mail == null || mail == "" );

    do{
        pass = prompt("Autenticación requerida.\nIngrese su clave:");
    }while(pass == null || pass == "" );

    autenticar()
})


let autenticar = () =>{
    fetch("https://server-emaniel.herokuapp.com/correos/findByDireccion/" + mail, {
        method: 'POST',
    })
    .then(response => response.json())
    .then((res) => {
        if(res != "Sin resultados"){
            let idUser = res.idUsuario

            fetch("https://server-emaniel.herokuapp.com/usuarios/find/" + idUser, {
                method: 'POST',
            })
            .then(response => response.json())
            .then((res) => {
                if(res != "Sin resultados"){
                    if(res.clave == pass){
                        if(res.tipoUsuario == "admin"){
                            alert("Bienvenido " + res.nombre)
                        }else{
                            alert("Usuario no autorizado")
                            window.location.href = "error.html"
                        }
                        
                    }else{
                        alert("Clave incorrecta")
                        window.location.href = "error.html"
                    }
                }
            })
            

        }
    })
    .catch((error) => {
        alert("Correo o clave no válidas")
        window.location.href = "error.html"
    })
}