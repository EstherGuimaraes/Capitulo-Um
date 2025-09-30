const form = document.getElementById("form-cadastro");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const data = document.getElementById("data_nascimento");
const cpf = document.getElementById("CPF");
const telefone = document.getElementById("telefone");
const senha = document.getElementById("senha");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio do formulário por padrão

    // Inicializa a validação
    let isValid = true;

    // Limpa as mensagens de erro anteriores (se houver)
    clearErrors();

    // Valida o campo nome
    if (nome.value.trim() === "") {
        isValid = false;
        showError(nome, "Por favor, preencha o nome.");
    }

    // Valida o campo email
    if (email.value.trim() === "") {
        isValid = false;
        showError(email, "Por favor, preencha o email.");
    }

    // Valida o campo data
    if (data.value.trim() === "") {
        isValid = false;
        showError(data, "Por favor, preencha a data de nascimento.");
    }

    // Valida o campo CPF
    if (cpf.value.trim() === "") {
        isValid = false;
        showError(cpf, "Por favor, preencha o CPF.");
    }

    // Valida o campo telefone
    if (telefone.value.trim() === "") {
        isValid = false;
        showError(telefone, "Por favor, preencha o telefone.");
    }

    // Valida o campo senha
    if (senha.value.trim() === "") {
        isValid = false;
        showError(senha, "Por favor, preencha a senha.");
    }

    // Se todos os campos estiverem válidos, procede com o envio
    if (isValid) {
        alert("Cadastro realizado com sucesso!");
        form.submit(); // Envia o formulário
    }
});

/**
 * Adiciona uma mensagem de erro abaixo do elemento de input.
 * @param {HTMLElement} inputElement - O elemento de input inválido.
 * @param {string} message - A mensagem de erro a ser exibida.
 */
function showError(inputElement, message) {
    const parent = inputElement.parentElement;
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.style.color = "red";
    errorDiv.innerText = message;
    parent.appendChild(errorDiv);
}

/**
 * Remove todas as mensagens de erro do formulário.
 */
function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(error => error.remove());
}