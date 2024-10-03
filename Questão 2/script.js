function listaOutput() {
    let quantidade = document.getElementById("number").value; // Pegar o tamanho da lista
    let imprime = document.getElementById("lista"); // Variável para facilitar a impressão no html
    let lista = []; // Lista vazia

    for (let i = 0; i < quantidade; i++) {
        lista[i] = `Leonardo Dionizio ${i + 1}`; // A cada iteração ele guarda na lista o meu nome + o valor de i mais 1, para que não coloque o 0 no primeiro termo
    }

    if (quantidade <= 0 || quantidade == "") {
        imprime.innerHTML = "Por favor, insira um número válido."; // Se o valor inserido for menor ou igual a 0 e se não for colocado nada
    } else {
        imprime.innerHTML = lista.map(num => `<li>${num}</li>`).join(''); // imprime a lista solicitada
    }
}