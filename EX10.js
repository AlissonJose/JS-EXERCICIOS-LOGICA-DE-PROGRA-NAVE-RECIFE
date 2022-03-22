const read = require("readline-sync") //Considerando π=3,14.(PI)
    var circuferencia = parseFloat (read.question("Me fale o raio da circuferencia circular da sala: "))
    var diametro = parseFloat (read.question("Me fale o diametro: "))
    var calc = parseFloat (circunferencia/diametro)
        console.log (`o valor de π(PI) é igual a: ${calc}! ` )

    