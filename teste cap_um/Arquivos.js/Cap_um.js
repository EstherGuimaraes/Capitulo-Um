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
        // botao.classList.toggle('botaofv');
        const estaFavoritado = botao.dataset.favoritado === "true";
        // 3. Dentro do botão que foi CLICADO, encontra a imagem (img)
        const imagem = botao.querySelector('img');

        // 4. Altera o 'src' apenas dessa imagem específica
        if (estaFavoritado) {
            // Se está favoritado, altera o atributo e a imagem para o estado 'não favoritado'
            botao.dataset.favoritado = "false";
            imagem.src = '/IMG/favoritosPreto.png';
            imagem.alt = 'Item não favoritado';
            console.log("Desfavoritado: mudei para o estado false");
        } else {
            // Se não está favoritado, altera o atributo e a imagem para o estado 'favoritado'
            botao.dataset.favoritado = "true";
            imagem.src = '/IMG/favorito vermelho.png';
            imagem.alt = 'Item favoritado';
            console.log("Favoritado: mudei para o estado true");
        }
        
    });
});



