let cesto = [];

const cestoElemento = document.getElementById('cesto');

// Criar o precoTotalElemento 
const precoTotalElemento = document.createElement('p');
precoTotalElemento.classList.add('preco-total');
precoTotalElemento.textContent = 'Custo total: 0.00 €';

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o cesto a partir do localStorage
    inicializarCesto();

    // Carrega os produtos
    carregarProdutos(produtos);
});

function inicializarCesto() {
    cesto = JSON.parse(localStorage.getItem('produtos-selecionados')) || [];
    atualizaCesto();
}

// Percorre cada um dos elementos da lista produtos
function carregarProdutos(produtos) {
    const secaoProdutos = document.getElementById('produtos');
    const listaProdutos = document.createElement('section');
    listaProdutos.classList.add('lista-produtos');

    produtos.forEach(produto => {
        const artigoProduto = criarProduto(produto);
        listaProdutos.appendChild(artigoProduto);
    });

    secaoProdutos.appendChild(listaProdutos);
}

function criarProduto(produto) {
    const artigo = document.createElement('article');
    artigo.classList.add('produto');

    const titulo = document.createElement('h3');
    titulo.textContent = produto.title;

    const imagem = document.createElement('img');
    imagem.src = produto.image;
    imagem.alt = produto.title;

    const preco = document.createElement('p');
    preco.textContent = `Custo total: ${produto.price} €`;
    preco.classList.add('preco');

    const descricao = document.createElement('p');
    descricao.textContent = produto.description;
    descricao.classList.add('descricao');

    const botaoAdicionar = document.createElement('button');
    botaoAdicionar.textContent = '+ Adicionar ao Cesto';
    botaoAdicionar.addEventListener('click', () => {
        adicionarAoCesto(produto);
    });

    artigo.appendChild(titulo);
    artigo.appendChild(imagem);
    artigo.appendChild(preco);
    artigo.appendChild(descricao);
    artigo.appendChild(botaoAdicionar);

    return artigo;
}

function adicionarAoCesto(produto) {
    cesto.push(produto);
    localStorage.setItem('produtos-selecionados', JSON.stringify(cesto));
    atualizaCesto();
}

function atualizaCesto() {
    // Limpa o conteúdo atual
    cestoElemento.innerHTML = '<h2>Produtos selecionados</h2>';

    const listaCesto = document.createElement('section');
    listaCesto.classList.add('lista-produtos');

    cesto.forEach((produto, index) => {
        const artigoCesto = criarProdutoCesto(produto, index);
        listaCesto.appendChild(artigoCesto);
    });

    // Adiciona os produtos ao cesto
    cestoElemento.appendChild(listaCesto);

    exibirPrecoTotal();
    cestoElemento.appendChild(precoTotalElemento);
}

function criarProdutoCesto(produto, index) {
    const artigo = document.createElement('article');
    artigo.classList.add('produto');

    const titulo = document.createElement('h3');
    titulo.textContent = produto.title;

    const imagem = document.createElement('img');
    imagem.src = produto.image;
    imagem.alt = produto.title;

    const preco = document.createElement('p');
    preco.textContent = `Custo total: ${produto.price} €`;
    preco.classList.add('preco');

    // Botão para remover do cesto
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = '- Remover do Cesto';
    botaoRemover.classList.add('botao-remover');
    botaoRemover.addEventListener('click', () => {
        removerDoCesto(index);
    });

    artigo.appendChild(titulo);
    artigo.appendChild(imagem);
    artigo.appendChild(preco);
    artigo.appendChild(botaoRemover);

    return artigo;
}

function removerDoCesto(index) {
    cesto.splice(index, 1);
    localStorage.setItem('produtos-selecionados', JSON.stringify(cesto));
    atualizaCesto();
}

function exibirPrecoTotal() {
    const total = cesto.reduce((soma, produto) => soma + produto.price, 0);
    precoTotalElemento.textContent = `Custo total: ${total} €`;
}
