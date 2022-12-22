function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fuano = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')
    if (fuano.value.length ==0 || Number(fuano.value) > ano){
        window.alert(' [ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fuano.value)
        var genero = ''

        /* O código abaixo tem a mesma funcionalidade desse aqui
        em html <img id='foto'> */
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <5){
                //bebe
                img.setAttribute('src','BEBE-MENINO.jpg')
            }else if (idade <12){
                //criança
                genero = 'menino'
            }else if (idade <21){
                //jovem
                genero = 'Jovem adulto'
            }else if (idade <40){
                //adulto
                genero = 'Homem'
            }
            else if (idade >40){
                //velho
                genero = 'idoso'
            }
            
        } else{
            genero = 'Mulher'
            if (idade >=0 && idade <5){
                //bebe

            }else if (idade <12){
                //criança

            }else if (idade <21){
                //jovem
            
            }else if (idade <40){
                //adulto
            
            }
            else if (idade <40){
                //velho
            
            }
        }
        resultado.style.textAlign = 'center'// centralizando com JS
        resultado.innerHTML = `Detectamos ${genero} com a idade de ${idade} anos.`
        resultado.appendChild(img)
    }
}