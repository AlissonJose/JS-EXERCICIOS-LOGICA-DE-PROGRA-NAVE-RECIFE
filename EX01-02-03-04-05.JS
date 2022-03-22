const read = require("readline-sync")
var nome = read.question("Qual o seu nome: " )
console.log ("Seja bem vindes", nome)

var nome = read.question("Informe seu nome completo: ")
console.log ("Dara Monteles dos Santos" , nome)

var n1 = 666
var n2 = 444
var soma = n1 + n2
console.log (" a soma de n1 e n2 é:", soma)

var nome = read.question("Informe as notas das disciplinas: Sociologia, Filosofia e Programacao")
var nota1 = parseFloat (read.question("Digite a nota de Sociologia:"))
var nota2 = parseFloat (read.question("Digite a nota de Filosofia:"))
var nota3 = parseFloat (read.question("Digite a nota de Progamacao:"))
var media = (nota1 + nota2 + nota3)/3
console.log("Sua media geral é:", media)


var n1 = parseInt (read.question("Digite o numero 1:"))
var n2 = parseInt (read.question("Digite o numero 2:"))
var diferenca = n1 != n2
console.log("Os numeros sao diferentes? ", diferenca)

