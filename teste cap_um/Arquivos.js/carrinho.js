//const listaProdutos = document.getElementById('itensCarrinho');
//const total = document.getElementById('total');
//const buttonFinalizar = document.getElementById('buttonFinalizar');

//let carrinho = [];

//function adicionarCarrinho() {

   // const item = {
 //       id: id,
  //      nome: nome,
 //       preco: preco,
  //      imagem: imagem,
 //       quantidade: 1
 //   };

 //   let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
 //   carrinho.push(item);
 //   localStorage.setItem('carrinho', JSON.stringify(carrinho));
 //   alert(`${nome} adicionado ao carrinho!`);
//};





function carregarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let container = document.getElementById("itensCarrinho");
    let total = 0;

    container.innerHTML = ""; 

    carrinho.forEach((item, index) => {
        let subtotal = item.preco * item.quantidade;
        total += subtotal;

        
        let produtoDiv = document.createElement("div");
        produtoDiv.classList.add("item-carrinho");
       produtoDiv.innerHTML = `
    <div class="card-carrinho">
        <img src="${item.img}" alt="${item.nome}" class="img-carrinho">
        <div class="info-carrinho">
            <h2>${item.nome}</h2>
            <h4>R$ ${item.preco.toFixed(2)}</h4>
            <h3 class="subtotal">
                <span class="subtotalTitulo">Subtotal:</span> 
                <span class="subtotalValor">R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
            </h3>
            
        </div>
        <div class="acoesCarrinho">
            <div class="quantidade">
            <label>Quantidade: 
                <input type="number" min="1" value="${item.quantidade}" data-index="${index}" class="input-quantidade">
            </label>
            </div>
            <div class="removerCarrinho">
            <button class="remover" data-index="${index}">Remover do Carrinho</button>
            </div>
        </div>
    </div>
`;


        container.appendChild(produtoDiv);
    });

    document.querySelector("#total span:last-child").textContent = "R$ " + total.toFixed(2);

    document.querySelectorAll(".input-quantidade").forEach(input => {
        input.addEventListener("change", atualizarQuantidade);
    });

    document.querySelectorAll(".remover").forEach(btn => {
        btn.addEventListener("click", removerItem);
    });
}


function atualizarQuantidade(e) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let index = e.target.dataset.index;
    carrinho[index].quantidade = parseInt(e.target.value);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    carregarCarrinho(); 
}


function removerItem(e) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let index = e.target.dataset.index;
    carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    carregarCarrinho();
}


window.onload = carregarCarrinho;



