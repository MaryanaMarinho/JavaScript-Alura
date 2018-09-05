var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //fazendo uma requisicao em uma api

  xhr.addEventListener("load", function(){
    var erroAjax = document.querySelector("#erro-ajax");

    if (xhr.status == 200) {
      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText; //pegando a resposta

      var pacientes = JSON.parse(resposta); //passando o json para um objeto em javaScript

      pacientes.forEach( function(paciente) {
        adcionaPacienteNaTabela(paciente);
      });
    }
    else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      erroAjax.classList.remove("invisivel");
    }

  });

  xhr.send(); //envia a requisicao
});
