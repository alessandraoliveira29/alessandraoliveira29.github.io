document.addEventListener("DOMContentLoaded", function () {
    // Evento de clique (click)
    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", function () {
        document.getElementById("output").textContent = "Botão de Enviar foi clicado!";
    });

    // Evento de duplo clique (dblclick)
    submitButton.addEventListener("dblclick", function () {
        document.getElementById("output").textContent = "Botão de Enviar foi clicado duas vezes!";
    });

    // Evento de mouseover e mouseout
    const feedbackBox = document.querySelector(".feedback-box");
    feedbackBox.addEventListener("mouseover", function () {
        feedbackBox.style.backgroundColor = "#f0f8ff"; // Altera cor de fundo ao passar o mouse
    });
    feedbackBox.addEventListener("mouseout", function () {
        feedbackBox.style.backgroundColor = "#f9f9f9"; // Restaura a cor original ao sair com o mouse
    });

    // Evento de mousemove para mostrar a posição do mouse
    const mouseArea = document.getElementById("mouse-area");
    mouseArea.addEventListener("mousemove", function (event) {
        document.getElementById("mouse-status").textContent = `Posição do mouse: X=${event.offsetX}, Y=${event.offsetY}`;
    });

    // Eventos de teclado (keydown e keyup)
    const feedbackTextarea = document.getElementById("feedback");
    feedbackTextarea.addEventListener("keydown", function (event) {
        document.getElementById("output").textContent = `Tecla pressionada: ${event.key}`;
    });
    feedbackTextarea.addEventListener("keyup", function () {
        document.getElementById("output").textContent = "Tecla liberada";
    });

    // Evento de formulário - change no textarea
    feedbackTextarea.addEventListener("change", function () {
        document.getElementById("output").textContent = "Feedback atualizado.";
    });

    // Evento de submit - envia o formulário e mostra mensagem de confirmação
    submitButton.addEventListener("click", function () {
        document.getElementById("output").innerHTML = "<strong>Feedback enviado com sucesso!</strong>";
        feedbackTextarea.value = ""; // Limpa o campo de texto
    });
});