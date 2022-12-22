//condição múltipla

/* swith(expressão){
    case valor 01:

        break // é obrigatório após fim de execução
    case vslor 02:

        break
    default: // tipo o else
    
        break
}
*/

var instante= new Date()
var diasem= instante.getDay()

/*
0= Domingo
1= Segunda
2=Terça
3= Quarta
4= Quinta
5= Sexta
6= Sábado
*/

switch(diasem){
    case 0:
        console.log(`Hoje é domingo`)
        break
    case 1:
        console.log(`Hoje é segunda`)
        break
    case 2:
        console.log(`Hoje é terça`)
        break
    case 3:
        console.log(`Hoje é quarta`)
        break
    case 4:
        console.log(`Hoje é quinta`)
        break
    case 5:
        console.log(`Hoje é sexta`)
        break
    case 6:
        console.log(`Hoje é sábado`)
        break
    default:
    console.log('[Erro] escolha entre: 0=Domingo 1=Segunda 2=Terça 3=Quarta 4=Quinta 5=Sexta 6=Sábado')
        break // esse break é opcional
}

