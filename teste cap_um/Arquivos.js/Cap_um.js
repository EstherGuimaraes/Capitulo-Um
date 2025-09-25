/*const favorito = document.getElementById("favoritar1");

const icon1 = "/IMG/favorito vermelho.png"; 
const icon2 = "/IMG/favoritosPreto.png"; 

favorito.addEventListener("click", function() {
    if (imgFavorito.src.includes("favoritosPreto.png")) {
        imgFavorito.src = icon1;
    } else {
        imgFavorito.src = icon2;
    }
});  

document.getElementById("imgfavoritar1").src = "/IMG"; */
// 1. Seleciona TODOS os botões que têm a classe "botao-favoritar"
const todosOsBotoes = document.querySelectorAll('.livrofv-btn');

// 2. Itera sobre cada botão encontrado e adiciona um "escutador" de clique
todosOsBotoes.forEach(botao => {
    botao.addEventListener('click', () => {
        // 3. Dentro do botão que foi CLICADO, encontra a imagem (img)
        const imagem = botao.querySelector('img');

        // 4. Altera o 'src' apenas dessa imagem específica
        if(imagem.src.includes('/IMG/favorito vermelho.png')){
            imagem.src = '/IMG/favoritosPreto.png';
            imagem.alt = 'Item não favoritado';
        }else{
            imagem.src = '/IMG/favorito vermelho.png';
            imagem.alt = 'Item favoritado';
        }
        
    });
});



