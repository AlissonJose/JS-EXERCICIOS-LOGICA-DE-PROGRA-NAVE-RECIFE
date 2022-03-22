const read = require("readline-sync")
    var valor = parseInt(read.question("Fale um valor e iremos converter em porcentagem: "))
        console.log(valor)
    var num = 0.75 * valor
        console.log(`75% de ${valor} é igual a: ${num} ` )
        
const read = require ("readline-sync")
var anoNasc = parseInt (read.question("Descubra sua idade digitando seu ano de nascimento: "))
console.log(anoNasc)
var calcIdade = parseInt (anoNasc - 2022)
console.log(`Você nasceu em ${anoNasc} e você tem / completará neste ano ${calcIdade} anos!`)