//3 - Crie um algoritmo que leia o valor de um jantar, 
//calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let entrada = 25.90
let pratoPrincipal = 89.90
let sobremesa = 15.90
let taxaGarcom = (entrada + pratoPrincipal + sobremesa) * 0.1
let jantar = (entrada + pratoPrincipal + sobremesa + taxaGarcom)

console.log(`A taxa do garçom é de ${taxaGarcom.toFixed(2)} e o valor de sua janta, incluso a taxa do garçom, é de R$${jantar.toFixed(2)}. Volte sempre! `)