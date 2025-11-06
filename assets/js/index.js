// Criar a lista de imagens
let imagens = [
    'assets/img/bolo1.jpg',
    'assets/img/bolo2.jpg',
    'assets/img/img3.webp'
]

let indiceatualdaimagem=0

function exibirImagem() {
    let imagemCarrosel = document.getElementById('img-carrosel')
    imagemCarrosel.src= imagens[indiceatualdaimagem]
}



// Logica para trocar asimagens a cada 5 seg
setInterval(function() {
    exibirImagem()
    indiceatualdaimagem++

    // Reiniciar contagem
        if (indiceatualdaimagem > 2){
        indiceatualdaimagem=0
        }
},5000)

exibirImagem()
indiceatualdaimagem++