// Repetições em JS (laços ou interações)

/* estruturas de controle
1) sequência
2) condições
3) repetições ou laços

laços == enquanto (enquanto for verdade faça isso)

while(condição){
    bloco verdadeiro em loop até virar falso
}

comendo uma pizza de 8 pedaços

function comerPizza(){
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
}

comendo qualquer pizza de n pedaços

function comerPizza(){ 
    while(temFatia()){ //enquanto tiver pizza come
        comerFatia()
    }
}
*/

/* Olá mundo 6 vezes
console.log(`Olá mundo!`)
console.log(`Olá mundo!`)
console.log(`Olá mundo!`)
console.log(`Olá mundo!`)
console.log(`Olá mundo!`)
console.log(`Olá mundo!`)
*/

// enquanto (estrutura de repetição com teste lógico no ínicio)
var cont = 1
while(cont<=6){
    console.log(`Olá mundo! (vez ${cont})`)
    cont++ //(cont=cont+1)
}

/* faça enquanto (estrutura de repetção com teste lógico no fim)

do{
    bloco
}while(condição){

}
*/

