var instante = new Date()
var ano= instante.getFullYear() // ano
var mes= instante.getMonth() // mês do ano
var diames= instante.getDate() //dia do mês
var diasem= instante.getDay() // dia da semana
var hora= instante.getHours() // hora do dia
var min= instante.getMinutes() // min da hora
var sec= instante.getSeconds() // second da hora

console.log(`Ano: ${ano}`)
switch(mes){
    case 0:
        console.log(`Mês: Janeiro ${mes}`)
        break
    case 1:
        console.log(`Mês: Fevereiro ${mes}`)
            break
    case 2:
        console.log(`Mês: Março ${mes}`)
        break 
    case 3:
        console.log(`Mês: Maio ${mes}`)
        break
    case 4:
        console.log(`Mês: Abril ${mes}`)
        break
    case 5:
        console.log(`Mês: Junho ${mes}`)
        break
    case 6:
        console.log(`Mês: Julho ${mes}`)
        break
    case 7:
        console.log(`Mês: Agosto ${mes}`)
        break
    case 8:
        console.log(`Mês: Setembro ${mes}`)
        break
    case 9:
        console.log(`Mês: Outubro ${mes}`)
        break
    case 10:
        console.log(`Mês: Novembro ${mes}`)
        break
    case 11:
        console.log(`Mês: Dezembro ${mes}`)
        break
    default:
        console.log(`[Erro] mês inválido`)
        break  
}
console.log(`Dia: ${diames}`)

switch(diasem){
    case 0:
        console.log(`Dia da semana: Domingo`)
        break
    case 1:
        console.log(`Dia da semana: Segunda`)
        break
    case 2:
        console.log(`Dia da semana: Terça`)
        break
    case 3:
        console.log(`Dia da semana: Quarta`)
        break
    case 4:
        console.log(`Dia da semana: Quinta`)
        break
    case 5:
        console.log(`Dia da semana: Sexta`)
        break
    case 6:
        console.log(`Dia da semana: Sábado`)
        break
    default:
    console.log('[Erro] escolha entre: 0=Domingo 1=Segunda 2=Terça 3=Quarta 4=Quinta 5=Sexta 6=Sábado')
        break // esse break é opcional
}

console.log(`Hora: ${hora}`)
console.log(`Minutos: ${min}`)
console.log(`Segundos: ${sec}`)