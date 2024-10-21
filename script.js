const itens = [];

document.getElementById('adicionar-item').addEventListener('click', function () {
    const inputItem = document.getElementById('input-item').value.trim();
    if (inputItem !== '') {
        itens.push(inputItem);
        document.getElementById('input-item').value = '';
        atualizarLista();
    }
});

document.getElementById('sortear').addEventListener('click', function () {
    if (itens.length === 0) {
        document.getElementById('resultado').textContent = 'Adicione itens para sortear.';
        return;
    }
    const randomIndex = Math.floor(Math.random() * itens.length);
    const selectedItem = itens[randomIndex];
    document.getElementById('resultado').textContent = `Resultado: ${selectedItem}`;
});

function atualizarLista() {
    const lista = document.getElementById('itens-lista');
    lista.innerHTML = '';
    itens.forEach(function (item, index) {
        const li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li);
    });
}
