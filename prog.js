//versão com HTML

function calcularVolCili(raio, alturaCili){
    const pi = 3.14
    return pi * (raio*raio) * alturaCili
}


function calcularVolEsfera(raio){
    const pi = 3.14
    return 4 * (1 / 3) * pi * (raio * raio * raio)
}

function calcularVolRet(largura, altura, comprimento,){
    return largura * comprimento * altura
}

function calcularVolCapsula(volCili, volEsfera){
    return volCili + volEsfera
}

function verCustoCapsula(calcularVolCapsula, precoCap){
    return calcularVolCapsula * precoCap
}

function verCustoTanque(calcularVolRet, precoRet){
    return calcularVolRet * precoRet
}

let resposta = document.getElementById('resposta')

function principal(){
    let tipo = document.getElementById('tipo').value
    let precoCap = 0.005
    let precoRet = 5000
    let alturaCili = Number(document.getElementById('alturaCili').value)
    let raio = Number(document.getElementById('raio').value)
    let largura = Number(document.getElementById('largura').value)
    let comprimento = Number(document.getElementById('comprimento').value)
    let altura = Number(document.getElementById('altura').value)

    // let tipo = 'capsula'
    let custoTanque = 0, custoCapsula = 0
    let volTanque = 0, volCapsula = 0, volCili = 0, volEsfera = 0

    if(tipo === 'capsula'){
        volCili = calcularVolCili(raio, alturaCili)
        volEsfera = calcularVolEsfera(raio)
        volCapsula = calcularVolCapsula(volCili, volEsfera)
        custoCapsula = verCustoCapsula(volCapsula, precoCap)

        resposta.innerHTML += `O volume da cilindro é ${volCili.toFixed(2)}cm cúbicos.`
        resposta.innerHTML += `O volume da esfera é ${volEsfera.toFixed(2)}cm cúbicos.`
        resposta.innerHTML += `O volume da cápsula é ${volCapsula.toFixed(2)}cm cúbicos.`
        resposta.innerHTML += `O custo da cápsula de remédio é R$ ${custoCapsula.toFixed(2)}.`
        // let volCili = calcularVolCili(raio, pi)
        // let volEsfera = calcularVolEsfera(pi, raio)

        // let volumeTotal = volCili + volEsfera
        // let custo = volumeTotal * 0.005

        // console.log (`O custo total da cápsula é R$ ${custo.toFixed(2)}`)
    }else if(tipo === 'tanque'){
        volTanque = calcularVolRet(largura, altura, comprimento,)
        custoTanque = verCustoTanque(calcularVolRet, precoRet)
        resposta.innerHTML += `O volume do tanque é ${volTanque.toFixed(2)}m cúbicos.`
        resposta.innerHTML += `O custo do tanque de remédio é R$ ${custoTanque.toFixed(2)}.`
    }else{
        resposta.innerHTML += `tipo inválido, digite novamente.`
    // resposta.innerHTML = ``
    // if(tipo === 'capsula'){
    //     let volCili = calcularVolCili(raio, pi)
    //     let volEsfera = calcularVolEsfera(pi, raio)

    //     let volumeTotal = volCili + volEsfera
    //     let custo = volumeTotal * 0.005

    //     resposta.innerHTML += `O custo total da cápsula é R$ ${custo.toFixed(2)}`
    // }else if(tipo === 'tanque'){
    //     let volumeTotal = calcularVolRet(largura, comprimento, altura)
    //     let custo = volumeTotal * 5000

    //     resposta.innerHTML += `O volume total do retângulo é R$ ${custo.toFixed(2)}`
    // }else{
    //     resposta.innerHTML += `tipo de armazenamento inválido`
    // }

    }
}
