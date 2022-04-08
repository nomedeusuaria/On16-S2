//1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%. 
//Exiba no console o valor do desconto e o preço a pagar.

let mercadoria = 299.90
let percentualDesconto = (20/100)
let desconto = mercadoria * percentualDesconto
let valorFinal = mercadoria - desconto

console.log(`Você recebeu um desconto de ${desconto.toFixed(2)}, seu produto ficou no valor de ${valorFinal.toFixed(2)}`)