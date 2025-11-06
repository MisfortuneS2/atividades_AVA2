//versão sem HTML

function calcularVolCili(raio, pi){
    return pi * (raio*raio)
}


function calcularVolEsfera(pi, raio){
    return 4 * (1 / 3) * pi * (raio * raio * raio)
}

function calcularVolRet(largura, comprimento, altura){
    return largura * comprimento * altura
}

function principal(){
    const pi = 3.14
    let raio = 2
    let largura = 3
    let comprimento = 2
    let altura = 2
    let tipo = 'capsula'

    if(tipo === 'capsula'){
        let volCili = calcularVolCili(raio, pi)
        let volEsfera = calcularVolEsfera(pi, raio)

        let volumeTotal = volCili + volEsfera
        let custo = volumeTotal * 0.005

        console.log (`O custo total da cápsula é R$ ${custo.toFixed(2)}`)
    }else if(tipo === 'tanque'){
        let volumeTotal = calcularVolRet(largura, comprimento, altura)
        let custo = volumeTotal * 5000

        console.log (`O volume total do retângulo é R$ ${custo.toFixed(2)}`)
    }else{
        console.log (`tipo de armazenamento inválido`)
    }
}

principal()