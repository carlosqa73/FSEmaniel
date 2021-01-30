let buscar = (e) =>{
    let textInput = e.target.value
    let key = textInput.toLowerCase()

    let elements = document.getElementsByClassName("carousel-item")

    for(let element of elements){
      let words = element.getElementsByClassName("nombre")[0].textContent
      let wordSet = words.toLowerCase()

      if(!(wordSet.includes(key))){
          element.style.display = "none"
      }else{
          element.style.display = ""
      }
  
    }
}

let input = document.getElementById("finder")
input.addEventListener('keyup', buscar);