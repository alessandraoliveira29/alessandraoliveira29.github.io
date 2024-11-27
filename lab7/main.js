document.addEventListener("DOMContentLoaded", function () {
    const elemento = document.getElementById("onmouseover");
    if (elemento) {
        // Texto original
        const textoOriginal = "Passa por aqui!";

        // Evento quando o mouse passa por cima
        elemento.addEventListener("mouseover", function () {
            elemento.innerText = "Obrigado por passares!";
        });

        // Evento quando o mouse sai
        elemento.addEventListener("mouseout", function () {
            elemento.innerText = textoOriginal;
        });
    }

    const pintaElement = document.getElementById("pinta");
    function changeColor(color) {
        pintaElement.style.color = color;
    }

    // Eventos de clique para cada botão de cor
    document.getElementById("red").addEventListener("click", function () {
        changeColor("red");
    });

    document.getElementById("green").addEventListener("click", function () {
        changeColor("green");
    });

    document.getElementById("blue").addEventListener("click", function () {
        changeColor("blue");
    });

    const textarea = document.getElementById("colorir");
    const cores = ["#FF6666", "#66FF66", "#6666FF", "#FFCC66", "#66CCCC", "#CC66FF", "#FF99CC"];

    let indiceCor = 0;

    textarea.addEventListener("keydown", function (event) {
        textarea.style.backgroundColor = cores[indiceCor];
        indiceCor = (indiceCor + 1) % cores.length;
    });

    const textareaColor = document.getElementById("colorInput");
    const button = document.getElementById("submitColor");

    button.addEventListener("click", function () {
        const cor = textareaColor.value;

        document.body.style.backgroundColor = cor;
    });

    const buttonConta = document.getElementById("countButton");
    const counterDisplay = document.getElementById("counter");

    let counter = parseInt(counterDisplay.textContent, 10);

    buttonConta.addEventListener("click", function() {
        counter += 1;
        counterDisplay.textContent = counter;
    });
});
