/*
    console.log() - ferramenta para mostrar a informação na tela.
    document = HTML. 
    querySelector = Selecionar o que eu quiser. 
*/ 
let imagem = document.querySelector(".starbucks")
let circulo = document.querySelector(".circulo");

function trocaImagem(endereco){   /*A função recebe essa variavel "endereco" que vem as informações do document, alterando a imagem de acordo com a informação.*/ 
    imagem.src = endereco 
}

function trocaCor(cor) {
    circulo.style.background = cor;
}
