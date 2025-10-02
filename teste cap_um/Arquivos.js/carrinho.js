function adicionarCarrinho () {


    const Item = document.createElement('li');
    Item.classList.add('itemCarrinho');
    adicionarCarrinho.push(Item);


}

const iconeRemover = document.createElement('button');
    iconeRemover.classList.add('removerCarrinho');
    iconeRemover.setAttribute