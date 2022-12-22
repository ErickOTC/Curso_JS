/*
variáveis simples/ compostas

simples
guardan apenas o último valor armazenado

composta
armazenam vários valores em uma mesma estrutura
*/

var num=[1,5,7,9,8] // array/ vetores
console.log(`Nosso vetor é o ${num}`)
num[3]=3 // por vaga
console.log(`Nosso vetor é o ${num}`)
num.push(6) // última vaga sem preocupação
console.log(`Nosso vetor é o ${num}`)
console.log(`O compremento do meu vetor é de ${num.length}`) // saber o tamanho do vetor num.length
console.log(`escolendo o primeiro vetor ${num[0]}`)
num.sort() // coloca os números em ordem crescente
console.log(`Nosso vetor em ordem crescente é o ${num}`)