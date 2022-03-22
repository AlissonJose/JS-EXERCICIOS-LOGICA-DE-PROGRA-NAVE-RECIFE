const read = require("readline-sync")
    var j = parseInt (read.question("Qual a idade do Jimin?"))
        console.log(j)
    var y = parseInt (read.question("Qual a idade do Yoongi?"))
        console.log(y)
    var ju  = parseInt (read.question("Qual a idade do Jungkook?"))
        console.log(ju)
    if (j>y+ju){
        console.log("A idade do Yoongi, é maior que a de Jimin e Jungkook juntos")
            } else if (j==y+ju){
                console.log("A idade do Yoongi, é igual a de Jungkoon e de Carlos juntos")
            } else{
                console.log("A idade de Yoongi não é maior que a de Jimin e Jungkook juntos")
                            }
