
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    function atualizarResumo() {
        let quantidadeTotal = 0;
        let valorTotal = 0;

        carrinho.forEach(item => {
            quantidadeTotal += item.quantidade || 1; 
            valorTotal += (item.preco || 0) * (item.quantidade || 1);
        });

        document.getElementById('quantidade').innerText = `Quantidade: ${quantidadeTotal}`;

        document.getElementById('subtotal').innerText = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
        document.getElementById('valor').innerText = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
    }

    window.onload = atualizarResumo;