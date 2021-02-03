
window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("contactForm");
    //var button = document.getElementById("sendMessageButton");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      status.classList.add("success");
      status.classList.remove("error");
      //button.style = "display: none ";
      status.innerHTML = "Gracias!";
    }

    function error() {
      status.classList.add("error");
      status.classList.add("success");
      status.innerHTML = "Asegurese de llenar todos los campos";
      
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var nombre = document.getElementById("name");
    var correo = document.getElementById("email");
    var telefono = document.getElementById("phone");
    var mensaje = document.getElementById("message");
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200 && nombre.value && correo.value && telefono.value && mensaje.value) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }


