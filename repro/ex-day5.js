// crie uma função construtora (chamada Aluna) que receberá os dados da aluna: nome, data de nascimento, se nasceu em sp, e id.
// os dados citados acima estão sendo recebidos no eventListener do btnEnviar, exceto pelo id (este deve ser gerado por vc, sempre acrescentando +1)
// faça com que o método inserirAluna gere a aluna e a coloque no array para guardar alunas
// escreva o método listarAlunas para que ele liste as alunas e suas propriedades
// por último, escreva o método listarAlunasDeSp, que irá filtrar, dentre todas as alunas da lista, somente aquelas que nasceram em SP

const btnEnviar = document.getElementById("cadastrarAluna")
const nome = document.getElementById("name")
const dateOfBirth = document.getElementById("dataDeNascimento")
const checkbox = document.getElementsByName("nasceuEmSp")

const reprograma = {
  // array para guardar alunas cadastradas
  alunas: [],

  // métodos
  listarAlunas: function(aluna) {},

  inserirAluna: function(n, d, s, i) {},

  listarAlunasDeSP: function() {}
}

btnEnviar.addEventListener("click", function(e) {
  e.preventDefault()
  console.log(nome.value, dateOfBirth.value, nasceuEmSP())
  reprograma.inserirAluna(nome.value, dateOfBirth.value, nasceuEmSP())
})

function nasceuEmSP() {
  let isChecked
  checkbox.forEach(item => (item.checked ? (isChecked = item.value) : ""))
  return isChecked
}
