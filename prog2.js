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

function principal(){
    let tipo = 'capsula'
    let precoCap = 0.005
    let precoRet = 5000

    let alturaCili = 4, raio = 2
    let largura = 3, comprimento = 2, altura = 2
    // let tipo = 'capsula'
    let custoTanque = 0, custoCapsula = 0
    let volTanque = 0, volCapsula = 0, volCili = 0, volEsfera = 0

    if(tipo === 'capsula'){
        volCili = calcularVolCili(raio, alturaCili)
        volEsfera = calcularVolEsfera(raio)
        volCapsula = calcularVolCapsula(volCili, volEsfera)
        custoCapsula = verCustoCapsula(volCapsula, precoCap)

        console.log (`O volume da cilindro é ${volCili.toFixed(2)}cm³.`)
        console.log (`O volume da esfera é ${volEsfera.toFixed(2)}cm³.`)
        console.log (`O volume da cápsula é ${volCapsula.toFixed(2)}cm³.`)
        console.log (`O custo da cápsula de remédio é R$ ${custoCapsula.toFixed(2)}.`)
        // let volCili = calcularVolCili(raio, pi)
        // let volEsfera = calcularVolEsfera(pi, raio)

        // let volumeTotal = volCili + volEsfera
        // let custo = volumeTotal * 0.005

        // console.log (`O custo total da cápsula é R$ ${custo.toFixed(2)}`)
    }else if(tipo === 'tanque'){
        volTanque = calcularVolRet(largura, altura, comprimento,)
        custoTanque = verCustoTanque(calcularVolRet, precoRet)
        console.log (`O volume do tanque é ${volTanque.toFixed(2)}m³.`)
        console.log (`O custo do tanque de remédio é R$ ${custoTanque.toFixed(2)}.`)
    }else{
        console.log (`tipo inválido, digite novamente.`)


}
}

principal()