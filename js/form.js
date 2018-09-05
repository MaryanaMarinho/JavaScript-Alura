var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) { //funcao anonima
  event.preventDefault(); //segura os dados do form, nao submetendo quando o botao e clicado

  var form = document.querySelector("#form-adiciona");

  //pegando os dados do form
  var paciente = obtemPacienteDoFormulario(form);


  var erros = validaPaciente(paciente);
  console.log(erros);
  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }

  adcionaPacienteNaTabela(paciente);

  form.reset(); //limpa o form

  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = ""; //limpando as mensagens de erro depois de adicionar um paciente valido
});

//pegando os dados do form
function obtemPacienteDoFormulario(form){

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

function montaTr(paciente){

  //criando um tr
  var pacienteTr = document.createElement("tr"); //cria qualquer tag do html que quiser
  pacienteTr.classList.add("paciente");

  //criando Tds
  var nomeTd = montaTd(paciente.nome, "info-nome");
  var pesoTd = montaTd(paciente.peso, "info-peso");
  var alturaTd = montaTd(paciente.altura, "info-altura");
  var gorduraTd = montaTd(paciente.gordura, "info-gordura");
  var imcTd = montaTd(paciente.imc, "info-imc");

  //colocando os tds dentro do tr
  pacienteTr.appendChild(nomeTd); //colocando um elemento dentro do outro
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
}

function montaTd(dado, classe){

  var td =  document.createElement("td"); //cria td
  td.textContent = dado; //preenchendo os tds com os dados do form
  td.classList.add(classe); // adiciona o class no elemento(o do html)

  return td;
}

//validando a altura e o peso do paciente
function validaPaciente(paciente){
  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push("O nome não pode ser em branco");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("O peso é inválido"); //adicionando no array de erros
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("A altura é inválida");
  }

  if (paciente.peso.length == 0) {
    erros.push("O peso não pode ser em branco");
  }

  if (paciente.altura.length == 0) {
    erros.push("A altura não pode ser em branco");
  }

  if (paciente.gordura.length == 0) {
    erros.push("A gordura não pode ser em branco");
  }

  return erros;
}

function adcionaPacienteNaTabela(paciente) {
  //criando um tr
  var pacienteTr = montaTr(paciente);

  //adicionando paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");

  //colocando o tr dentro da tabela
  tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = ""; //limpando as mensagens de erro, para que elas nao se multipliquem

  erros.forEach(function(erro){ //foreach com funcao anonima /criando uma li para cada erro no array de erros
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });

}
