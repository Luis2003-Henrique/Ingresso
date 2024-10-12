let valorPista = 100;
let valorSuperior = 200;
let valorInferior = 400;


function comprar() {
    let ingressosTipo = document.getElementById('tipo-ingresso');
    let ingressos = ingressosTipo.value
    let quantidade = parseInt(document.getElementById('qtd').value);
    let verificar = Math.sign(quantidade);


    if (verificar == -1 || verificar == 0 || documento.getElementById('qtd').value == '') {
        alert('Informe um número válido');
    } else if (ingressos === 'pista') {
        ingressoPista(quantidade);
    } else if (ingressos === 'superior') {
        ingressoSuperior(quantidade);
    } else if (ingressos === 'inferior') {
        ingressoInferior(quantidade);
    }
}


function ingressoPista(quantidade) {
    let pista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > pista) {
        alert('Quantidade de ingressos insuficiente');
    } else {
        valorPista = valorPista - quantidade;
        alert('Parabéns, o ingresso foi adquirido');
        document.getElementById('qtd-pista').textContent = valorPista;
    }
}

function ingressoSuperior(quantidade) {
    let superior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > superior) {
        alert('Quantidade de ingressos insuficiente');
    } else {
        valorSuperior = valorSuperior - quantidade;
        alert('Parabéns, o ingresso foi adquirido');
        document.getElementById('qtd-superior').textContent = valorSuperior;
    }
}

function ingressoInferior(quantidade) {
    let inferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > inferior) {
        alert('Quantidade de ingressos insuficiente');
    } else {
        valorInferior = valorInferior - quantidade;
        alert('Parabéns, o ingresso foi adquirido');
        document.getElementById('qtd-inferior').textContent = valorInferior;
    }
}