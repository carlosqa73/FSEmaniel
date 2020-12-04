let enviarMail = () => {
    
    let areat = document.getElementById('message')
    let mensaje = areat.value

    let correot = document.getElementById('email')
    let correo = correot.value

    let nombret = document.getElementById('name')
    let nombre = nombret.value
    //console.log(mensaje)
    
    var link = "mailto:carlosqa73@hotmail.com"
        + "?cc=" + correo
        + "&subject=" + encodeURIComponent(nombre + " tiene una duda!")
        + "&body=" + encodeURIComponent(mensaje)

        window.location.href = link;

}

document.getElementById('sendMessageButton').addEventListener("click", function(){
    enviarMail();
})