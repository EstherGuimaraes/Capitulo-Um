function adicionarCarrinho(nome, preco) {


    const item = { nome, preco };


    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];


    carrinho.push(item);


    localStorage.setItem('carrinho', JSON.stringify(carrinho));


    alert(`${nome} adicionado ao carrinho!`);
};




function mostrarCarrinho() {
   




let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let lista = document.getElementById('lista-carrinho');
let total = 0;


if (lista) {
    lista.innerHTML = "";


carrinho.forEach(item => {
    let li = document.createElement('li');
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    lista.appendChild(li);
    total += item.preco;
    });


    document.getElementById('total').textContent = `Total: R$${total.toFixed(2)}`
    }
}


function limparCarrinho() {
    localStorage.removeItem('carrinho');
    mostrarCarrinho();
}


document.addEventListener('DOMContentLoaded', mostrarCarrinho);


document.getElementById('finalizarCompra')?.addEventListener('click', function() {
    localStorage.setItem("totalCommpra", total);
    window.location.href = "finalizacao.html";
});











