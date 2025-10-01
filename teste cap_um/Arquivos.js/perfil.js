const form = document.getElementById('form-cadastro');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário e o recarregamento da página

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const dataNascimento = document.getElementById('data_nascimento').value;
    const cpf = document.getElementById('CPF').value;
    const telefone = document.getElementById('telefone').value;
    const senha = document.getElementById('senha').value;

    if (nome === '') {
        alert('Por favor, preencha o campo Nome.');
    }
    else if (email === '') {
        alert('Por favor, preencha o campo E-mail.');
    }
    else if (dataNascimento === '') {
        alert('Por favor, preencha o campo Data de Nascimento.');
    }
    else if (cpf === '') {
        alert('Por favor, preencha o campo CPF.');
    }
    else if (telefone === '') {
        alert('Por favor, preencha o campo Telefone.');
    }
    else if (senha === '') {
        alert('Por favor, preencha o campo Senha.');
    }
    else {
        // Se todos os campos estiverem preenchidos, a lógica de sucesso deve vir aqui
        console.log('Dados validados com sucesso. Preparando para o envio.');

        // Por exemplo, exibir uma mensagem de sucesso na tela:
        alert('Cadastro realizado com sucesso!');
        
        form.reset();
    }
});