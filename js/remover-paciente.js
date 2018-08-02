var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

//colocando o evento de escultar na tabela pq assim nao precisa colocar no paciente de um por um para remover
tabela.addEventListener("dblclick", function(event) {
    // var alvoEvento = event.target; //pegando quem sofreu o evento
    // var paiDoAlvo = alvoEvento.parentNode; // pegando o pai de quem sofreu o evento(a linha da tabela) para poder remover  | TR = paciente = remover
    // paiDoAlvo.remove();

    event.target.parentNode.classList.add("fadeOut"); //animacao para remover o paciente aos poucos

    setTimeout(function(){ //funcao para fazer o js esperar o tempo determinado para poder execultar a acao
      //fazendo tudo isso de cima numa linha so
      event.target.parentNode.remove();
    },500);

});


//removendo um por um, pois o evento de botao esta para cada paciente
// pacientes.forEach(function(paciente){
//   paciente.addEventListener("dblclick", function() {
//     this.remove();
//   });
// });
