//versão com HTML

function calcularVolCili(raio, pi){
    return pi * (raio*raio)
}


function calcularVolEsfera(pi, raio){
    return 4 * (1 / 3) * pi * (raio * raio * raio)
}

function calcularVolRet(largura, comprimento, altura){
    return largura * comprimento * altura
}

let resposta = document.getElementById('resposta')

function principal(){
    const pi = 3.14
    let raio = Number(document.getElementById('raio').value)
    let largura = Number(document.getElementById('largura').value)
    let comprimento = Number(document.getElementById('comprimento').value)
    let altura = Number(document.getElementById('altura').value)
    let tipo = document.getElementById('tipo').value

    resposta.innerHTML = ``
    if(tipo === 'capsula'){
        let volCili = calcularVolCili(raio, pi)
        let volEsfera = calcularVolEsfera(pi, raio)

        let volumeTotal = volCili + volEsfera
        let custo = volumeTotal * 0.005

        resposta.innerHTML += `O custo total da cápsula é R$ ${custo.toFixed(2)}`
    }else if(tipo === 'tanque'){
        let volumeTotal = calcularVolRet(largura, comprimento, altura)
        let custo = volumeTotal * 5000

        resposta.innerHTML += `O volume total do retângulo é R$ ${custo.toFixed(2)}`
    }else{
        resposta.innerHTML += `tipo de armazenamento inválido`
    }
}
