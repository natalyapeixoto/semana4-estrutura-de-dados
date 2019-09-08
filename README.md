# Estrutura de dados 
* Array 
* Objetos 


## Arrays 

Uma array é uma coleção ordenada de itens, onde cada item tem um índice(index). 
     
    const arr = ['esse é primeiro elemento', 'segundo elemento', 'último elemento'];

    console.log(arr[0]);              // logs 'esse é primeiro elemento'
    console.log(arr[1]);              // logs 'segundo elemento'
    console.log(arr[arr.length - 1]); // logs 'último elemento'
 
    *arrays em JavaScript tem o índice começando no zero.*  


   Arrays podem conter vários tipos de dados
```    
   const variavel = 'abc'
   const misturado = ['1', 2, 'três', false, variavel, 5.6];
   console.log(misturado) // logs ["1", 2, "três", false, "abc", 5.6]
```

#### métodos de Arrays

Objetos do tipo Array contém, além da propriedade length, inúmeras outras propriedades que se referem à valores de função(métodos).

Existem vários métodos já prontinhos que o JS nos dá 
para manipular dados de arrays. Eles são extremamente úteis e 
muito utilizados no dia-a-dia de pessoas desenvolvedoras. 

Alguns exemplos: 
concat, pop, join, push, split, splice, reverse, slice, indexof, typeof, trim... 


## Array bidimensionais 
São arrays que contém arrays. 
 
Arrays com duas dimensões costumam ser utilizados para representar tabelas de valores que consistem nas informações dispostas em *linhas* e *colunas*. Para identificar um elemento da tabela particular, devem ser especificados dois índices. Por convenção, o primeiro identifica a linha do elemento e o segundo, sua coluna.
```
const array = [
    ['apple', 'orange', 'pear'],
    ['maça', 'laranja', 'pera'],
    ['cookies', 'cake', 'muffins', 'pie']
];

console.log(array[0][0]) // logs 'apple'
```

Arrays multidimensionais
```
const x = [1,[2,3], [4,[5,[6,7,8]]], [9,[10,11,[12,13]]]];

console.log(x[2][1][1])  // logs [6, 7, 8]
```    

## Objetos 

  Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. Um valor de propriedade pode ser uma função, que é então considerada um *método* do objeto. 

#### Criando um objeto:

``` 
    const pessoa = {};
    pessoa.nome = 'jonas'
    pessoa.idade = 29 

    console.log(pessoa) // logs {nome: "jonas", idade: 29}
```


#### Adicionando um método:

````
pessoa.falar = function() {
console.log(`Oi, meu nome é ${pessoa.nome} eu tenho ${pessoa.idade} anos.`)
}

console.log(pessoa.falar()) // Oi, meu nome é jonas eu tenho 29 anos.
````

Temos então a seguinte estrutura chave-valor:
```
    pessoa = {
        nome: 'jonas', 
        idade: 29, 
        falar: function() {
            console.log(`Oi, meu nome é ${pessoa.nome} eu tenho ${pessoa.idade} anos.`)
        }
    } 
```


#### Acessando objetos 

Dot notation vs Bracket notation 
````
    pessoa.nome // jonas
    pessoa['nome'] // jonas 
````

Por padrão prefira usar o '.' ou dot notation, é mais fácil de ler e mais rápido de escrever.
Apenas em alguns caso específicos usamos os brackets(colchetes). Por exemplo, quando a propriedade começa com número ou for uma string que tenha mais de um nome (ex: 'thank-you'). 

* `Object.keys` -
Esse método retorna um array com todos os nomes ("chaves") de propriedades próprios de um objeto.

* `for...in` loops
Esse método caminha por todas as propriedades enumeráveis de um objeto.

* `Object.hasOwnProperty(nome-da-propriedade)`
checa se o Objeto tem x propriedade e retorna true ou false. 


#### This 
Em um método 'this' faz referencia ao proprio objeto 
````
    var obj = {
        firstName: 'joao', 
        lasName: 'melão'

        fullName : function() {
            return this.firstName + " " + this.lastName;
        }
    }

    obj.fullName() // logs joao melão 
````

#### Função Construtora

```
function Pessoa(nome, age, profissao) {
  this.nome = nome;
  this.age = age;
  this.profissao = profissao;
}

const friend = new Pessoa('laura', 28, 'desenvolvedora');

```

## Estruturas de dados complexas 

Objetos nos permitem agrupar valores - incluindo outros objetos - juntos e assim construir estruturas mais complexas.

Criar projeto que lista todas as aulas da sala e também filtra alunas por id.

### Extra: 

Map, filter, Reduce, forEach 

- https://desenvolvimentoparaweb.com/javascript/map-filter-reduce-javascript/
- https://medium.com/@programadriano/javascript-conhecendo-map-filter-e-reduce-ce072d8f0ec5]
- https://clovisdasilvaneto.github.io/explorando-javascript-filter-reduce-map-every-some-e-foreach/


#### Links: 
- https://www.w3schools.com/js/js_array_methods.asp
- http://braziljs.github.io/eloquente-javascript/chapters/estrutura-de-dados/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Objetos/B%C3%A1sico
