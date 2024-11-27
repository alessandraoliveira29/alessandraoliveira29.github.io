document.addEventListener('DOMContentLoaded', () => {
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

    // Arrow function para mudar cor do texto
    const pintaElement = document.getElementById("pinta");
    changeColor = (color) => {
        pintaElement.style.color = color;
    }

    // Adiciona eventos de clique a todos os botões com data-color
    document.querySelectorAll("[data-color]").forEach(button => {
        button.addEventListener("click", () => {
            const color = button.dataset.color; // Obtém a cor do atributo data-color
            changeColor(color);
        });
    });

    const textarea = document.getElementById("colorir");
    const cores = ["#FF6666", "#66FF66", "#6666FF", "#FFCC66", "#66CCCC", "#CC66FF", "#FF99CC"];

    let indiceCor = 0;

    textarea.addEventListener("keydown", function (event) {
        textarea.style.backgroundColor = cores[indiceCor];
        indiceCor = (indiceCor + 1) % cores.length;
    });

    // Alterar a cor do fundo da página baseada no elemento select
    document.querySelector('select').onchange = function () {
        document.querySelector('body').style.backgroundColor = this.value;
    };

    // Se não existe a chave 'counter', inicializamos.
    if (!localStorage.getItem('counter')) {
        localStorage.setItem('counter', 0);
    }

    // Quando a página é carregada, atualizamos o elemento <h1> com o valor atual do counter
    document.querySelector('h1').textContent = localStorage.getItem('counter');

    // Função count() para incrementar o counter
    function count() {
        let counter = parseInt(localStorage.getItem('counter'), 10);        
        counter++; 
        document.querySelector('h1').textContent = counter;
        localStorage.setItem('counter', counter); 
    }

    // Adicionar o event listener ao botão 'Incrementar'
    document.getElementById('incrementar').addEventListener('click', count);

    // Selecionar o formulário
    document.querySelector('form').onsubmit = (e) => {
        e.preventDefault();

        // Selecionar os campos de input
        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;
        const mensagem = document.getElementById('mensagem');

        // Mostra a mensagem
        mensagem.innerText = `Olá, o/a ${nome} tem ${idade}!`;
    };

    // Contador por segundo
    let contadorPorSeg = 0;

    function count() {
        contadorPorSeg++;
        document.getElementById('automatic-counter').textContent = contadorPorSeg;
    }

    // Chama a função count() a cada 1 segundo 
    setInterval(count, 1000);

});
