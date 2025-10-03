const nome = document.getElementById("nome-cartao");
const numero = document.getElementById("numero-cartao");
const validade = document.getElementById("tempo");
const cvv = document.getElementById("seguranca");
const botao = document.getElementById("botao-adicionar");


nome.addEventListener("input", function() {
    const valor = nome.value.toUpperCase();
    nome.value = valor;
});

numero.addEventListener("input", function() {            
    let valor = numero.value.replace(/\D/g, ''); 
    valor = valor.substring(0, 16); 
    const partes = [];  
    for (let i = 0; i < valor.length; i += 4) {
        partes.push(valor.substring(i, i + 4));
    }   
    numero.value = partes.join(' ');
}); 

cvv.addEventListener("input", function() {
    let valor = cvv.value.replace(/\D/g, ''); 
    valor = valor.substring(0, 3); 
    cvv.value = valor;
});
botao.addEventListener("click", function(event) {   
    event.preventDefault();
    if (nome.value === '' || numero.value === '' || validade.value === '' || cvv.value === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }   
    alert('Cartão adicionado com sucesso!');
    nome.value = '';
    numero.value = '';
    validade.value = '';
    cvv.value = '';
});

alert("parabéns, compra realizada com sucesso!");

setTimeout(function() {
window.location.href = 'final.html';
}, 5000);



