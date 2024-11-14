function verificarResposta() {
    const respostaCorreta = "2";
    const respostaSelecionada = document.querySelector('input[name="answer"]:checked');
    const resultadoElement = document.getElementById("resultado");

    resultadoElement.classList.remove("correta", "incorreta");

    if (respostaSelecionada && respostaSelecionada.value === respostaCorreta) {
        resultadoElement.textContent = "Correto! Você aprendeu a ligar o dispositivo.";
        resultadoElement.classList.add("correta"); 
    } else {
        resultadoElement.textContent = "Tente novamente. Lembre-se de pressionar e segurar o botão de energia.";
        resultadoElement.classList.add("incorreta"); 
    }
}