const form = document.getElementById('form');
const senhaInput = document.getElementById('senha');
const confirmarSenhaInput = document.getElementById('confirmar-senha');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const senha = senhaInput.value;
    const confirmarSenha = confirmarSenhaInput.value;   
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        return;
    }   
    alert('Senha redefinida com sucesso!');
    form.reset(); 

    window.location.href = 'login.html';
});
