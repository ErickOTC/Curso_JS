var data= new Date() // grava o ano, mês, dia, hora, e etc. 
var hora= data.getHours() // mostra a hora atual do sistema.
console.log(`Agora são exatamente ${hora}`)
if(hora>5 && hora<12){
    console.log(`Bom dia!`)
}else if(hora>=13 && hora<=18){
        console.log(`Boa tarde!`)
    } else if(hora> 19 && hora<=23){
        console.log(`Boa noite!`)
        } else{
            console.log(`Boa madrugada!`)       
        }
