function mensagemOutput() {
    let nome = document.getElementById("mensagem").value;
    let imprime = document.getElementById("nomeOutput");

    if (nome == "") {
        imprime.innerHTML = "Por favor, insira seu nome."
    } else {
        imprime.innerHTML = "Olá, " + nome + "! Seja bem-vindo à página do aluno(a)."
    }
}