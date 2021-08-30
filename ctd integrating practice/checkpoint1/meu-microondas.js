function meuMicroOndas(prato, tempoExtra){
    let padrao = 0;
    let tempo = 0;

    if (prato == 'pipoca'){
        padrao = 10
        tempo = padrao + tempoExtra
    }else if(prato == 'macarrao'){
        padrao = 8
        tempo = padrao + tempoExtra
    } else if(prato == 'carne'){
        padrao = 15
        tempo = padrao + tempoExtra
    } else if(prato == 'feijao'){
        padrao = 12
        tempo = padrao + tempoExtra
    } else if(prato == 'brigadeiro'){
        padrao = 8
        tempo = padrao + tempoExtra
    } else {
        padrao = 0
    }

    let msg = ''

    if(tempo > (padrao * 2)){
        msg = 'Comida queimou'
    }else if(tempo < padrao){
        msg = 'tempo insuficiente'
    }else if(padrao == 0){
        msg = 'prato inexistente'
    }else if(tempo > (padrao * 3)){
        msg = 'kabum!'
    }

    return msg + 'Prato pronto, bom apetite!'

}


console.log(meuMicroOndas('feijao', 18))