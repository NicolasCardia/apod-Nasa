//let data = document.getElementById("Date").value
class nasaModel {
  constructor(){
    this.explanation
  }
let botao = document.getElementById("botao")
buscaDados(){
  botao.addEventListener("click", function(){
    let request = new XMLHttpRequest();
  
    request.open("GET", `https://api.nasa.gov/planetary/apod?api_key=v8fnIwoLwaS2eWV0owbgmSMa2OoJd0MgfAb2p0uI`, false)
  
    request.addEventListener("load", () =>{
      var site = JSON.parse(request.responseText);
      console.log(site)
     } );
    request.send();
})
}


}

class nasaController

