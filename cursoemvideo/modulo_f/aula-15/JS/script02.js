/* 
//maneira que eu pensei
var num=[2,1,7,3,8,4]
var condmax = num.length
for(cont=0;cont<=condmax;cont++){
    console.log(num[cont]);
}


// jeito mais comprimido de se fazer
var num=[2,1,7,3,8,4]
for(cont=0;cont<num.length;cont++){
    console.log(`A posição ${cont} tem o valor ${num[cont]}`);
}
*/

var num=[2,1,7,3,8,4]
for(var cont in num){ // for = para / in = cada ou em (para cada cont na variável composta(num) eu vou mostrar console.log)
    console.log(`A posição ${cont} tem o valor ${num[cont]}`);
}