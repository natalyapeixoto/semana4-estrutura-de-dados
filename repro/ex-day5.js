const btnEnviarAluna = document.getElementById('enviarAluna')
const btnEnviarProf = document.getElementById('enviarProf')
const btnListarAlunas = document.getElementById('listarAlunas')
const btnListarProfs = document.getElementById('listarProfs')

const reprograma = {
	alunas: [],
	professoras: [],

	inserirAluna: function(aluna) {},

	inserirProfessora: function() {},

	listarAlunas: function() {},

	listarProfessoras: function() {}
}

// // 1 - escreva o método inserirAluna que vai salvar o nome de uma aluna(no formato de string)
// na array alunas.

// // 2- escreva o método inserirProfessora que vai salvar o nome de uma professora(no formato de string)
// na array professoras.

// // 3- escreva o método listarAlunas, que vai mostrar na tela o nome de todas as alunas que estao na
// array alunas.

// // 4- escreva o método listarProfessoras, que vai mostrar na tela o nome de todas as professoras
// que estão na array professoras.

btnEnviarAluna.addEventListener('click', function(e) {
	e.preventDefault()
	let inputValue = document.getElementById('inputAluna')
	reprograma.inserirAluna(inputValue.value)
	inputValue.value = ''
})

btnEnviarProf.addEventListener('click', function(e) {
	e.preventDefault()
	let inputValue = document.getElementById('inputProf')
	reprograma.inserirProfessora(inputValue.value)
	inputValue.value = ''
})

btnListarAlunas.addEventListener('click', function(e) {
	e.preventDefault()
	reprograma.listarAlunas()
})

btnListarAlunas.addEventListener('click', function(e) {
	e.preventDefault()
	reprograma.listarProfessoras()
})
