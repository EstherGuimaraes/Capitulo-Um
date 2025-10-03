function adicionarCarrinho(nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  
    const produto = {
        id: Date.now(),
        nome: nome,
        preco: parseFloat(preco),
        quantidade: 1,
        img: document.getElementById("imgProduto1").src 
    };

   
    let existente = carrinho.find(item => item.nome === produto.nome);

    if (existente) {
        existente.quantidade += 1; 
    } else {
        carrinho.push(produto);
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}