function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img-hora')
    var data = new Date()
    var hora = data.getHours() // hora do dia de acordo com o swrvidor
    // var hora = 19 // Forçar a hora do dia
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora>=6 && hora <12){
        //Bom dia!
        img.src= 'src/img/good-morning.jpg'
        document.body.style.backgroundColor = '#F6EA9B'
        titulo.innerHTML = `Bom dia!`
        aprendendo.innerHTML = `&#x1F9E0; Aprendendo JS de dia!`
    } else if (hora>=12 && hora <19){
        //Boa tarde!
        img.src= 'src/img/good-afternoon.jpg'
        document.body.style.backgroundColor = '#F6AC39'
        titulo.innerHTML = `Boa tarde!`
        aprendendo.innerHTML = `&#x1F9E0; Aprendendo JS de tarde!`
    } else {
        //Boa noite!
        img.src= 'src/img/good-nigth.jpg'
        document.body.style.backgroundColor = '#000036'
        titulo.innerHTML = `Boa noite!`
        aprendendo.innerHTML = `&#x1F9E0; Aprendendo JS de noite!`
    }

}