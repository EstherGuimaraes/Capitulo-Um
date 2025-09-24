const favorito = document.getElementById("favoritar1");
const imgFavorito = document.getElementById("favoritar1");

favorito.addEventListener("click", function() {
    if (imgFavorito.src.includes("favoritosPreto.png")) {
        imgFavorito.src = "/img/favorito vermelho.png";  
    } else {
        imgFavorito.src = "/img/favoritosPreto.png"; 
    }
});