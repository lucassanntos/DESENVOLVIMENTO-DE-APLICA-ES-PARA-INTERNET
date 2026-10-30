const valor = prompt ("Qual foi o valor total da compra?")

const quantidadePessoas = prompt("Em quantas pesoas a conta será dividida?")

const resultado = valor / quantidadePessoas

alert ("---Resumo da conta--- \n"+
     `consumo: ${valor} \n`+
     `Divisão por pessoa ${resultado} \n`
)
