// // 1 - escreva o método inserirAluna que vai criar um novo objeto aluna, com propriedades:
// nome, data de nascimento, mora em são paulo e id. após isso coloque a nova aluna na array alunas.

// // 2- escreva o método listarAlunas, que vai mostrar na tela o nome de todas as alunas que estao na
// array alunas.

const btnEnviar = document.getElementById('inputAluna')
const nome = document.getElementById('name')
const dateOfBirth = document.getElementById('dataDeNascimento')
const checkbox = document.getElementsByName('nasceuEmSp')

const reprograma = {
	alunas: [],

	inserirAluna: function(aluna) {},

	listarAlunas: function() {},

	listarAlunasDeSP: function() {}
}

function Aluna(nome, date, sp, id) {
	this.nome = nome
	this.dateOfBirth = date
	this.nasceuEmSp = sp
	this.id = id
}

let id = 0
btnEnviar.addEventListener('click', function(e) {
	e.preventDefault()
	//chamar a função inserirAluna aqui
})

function nasceuEmSP() {
	let nasceu
	checkbox.forEach(item => (item.checked ? (nasceu = item.value) : ''))
	return nasceu
}
