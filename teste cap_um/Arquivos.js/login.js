const login = document.getElementById ('login-container');  
const form = document.getElementById('email'); 
const form2 = document.getElementById('senha');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário e o recarregamento da página 
    const email = document.getElementById('email').value;
    if (email === '') {
        alert('Por favor, preencha o campo E-mail.');
    }
    else {
        console.log('Dados validados com sucesso. Preparando para o envio.');
        alert('Login realizado com sucesso!');
        form.reset();
    }
});

form2.addEventListener('submit', function(event) {  
    event.preventDefault(); // Impede o envio padrão do formulário e o recarregamento da página
    const senha = document.getElementById('senha').value;
    if (senha === '') {
        alert('Por favor, preencha o campo Senha.');    
    }
    else {
        console.log('Dados validados com sucesso. Preparando para o envio.');
        alert('Login realizado com sucesso!');
        form2.reset();
    }
}); 

function login(form, form2) {
    if (form === '' && form2 === '') {
        console.log("Login realizado com sucesso!");
        window.location.href = "perfil.html"; // Redireciona para perfil.html
    }
    else {
        console.log("Falha no login. Verifique suas credenciais.");
    }
}
