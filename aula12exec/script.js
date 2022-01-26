function carregar() {
    var msg = window.document.getElementsByid('msg')
    var msg2 = window.document.getElementsByid('msg2')
    var imagem = window.document.getElementsByid('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas!`

    if (hora >= 0 && hora < 12) {
        msg2.innerHTML = `Bom dia!!`
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        msg2.innerHTML = `Boa tarde!!`
        document.body.style.background = '#b9846f'
    } else {
        msg2.innerHTML = `Boa noite!!`
        document.body.style.background = '#515154'
    }
}