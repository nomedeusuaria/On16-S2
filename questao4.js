//4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, 
//assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, 
//sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

const kms = 3.164
const valorKms = 0.15/100
let dias = 6
const valorPorDia = 60.00

let preco = (kms * valorKms) + (dias * valorPorDia)

console.log(`O custo de uma viagem de carro de Arcoverde-PE até os Lençois Maranheses-MA é de R$ ${preco.toFixed(2)}.`)