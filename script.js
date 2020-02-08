function carregar(){
    var msg= window.document.getElementById('msg')
    var img= window.document.getElementById('imagem')
    var data= new Date()
    var hora = data.getHours() 
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`  //atenção aqui aqui é CRASE //
if (hora>= 0 && hora <12){
    //Bom dia ! Feliz Dia
    img.src  ='manha.png'
    document.body.style.background = '#FFF8DC'
} 
else if (hora>=12 && hora<=18) {
    //Boa Tarde Bom Apetite!
    img.src = 'tarde.png'
    document.body.style.background = '#E6E6FA'
} 
else {
    //Boa Noite!
    img.src ='noite.png'
    document.body.style.background = '#4169E1'
}

}