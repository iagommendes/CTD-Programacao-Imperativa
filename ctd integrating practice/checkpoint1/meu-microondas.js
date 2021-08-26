function meuMicroOndas(alimento, tempoExtra) {
    let temporizador = 0;
    let msg;

    if(alimento == 'pipoca') {
        temporizador = 10 + tempoExtra
        alimento = 10
        msg = 'pipoca selecionado tempo: ' + temporizador
    }else if(alimento == 'macarrao'){
        temporizador = 8 + tempoExtra;
        alimento = 8
        msg = 'macarrao selecionado tempo: ' + temporizador
    }else if(alimento == 'carne') {
        temporizador = 15 + tempoExtra;
        alimento = 15
        msg = 'carne selecionado tempo: ' + temporizador
    }else if(alimento == 'feijao') {
        temporizador = 12 + tempoExtra;
        alimento = 12
        msg = 'feijao selecionado tempo: ' + temporizador
    }else if(alimento == 'brigadeiro') {
        temporizador = 8 + tempoExtra;
        alimento = 8
        msg = 'brigadeiro selecionado tempo: ' + temporizador
    }else{
        msg = 'alimento inexistente'
    }

    let msg2

    if ((temporizador > (alimento * 2)) && (msg != 'alimento inexistente')) {
        msg2 = 'alimento queimou'
    }
    else if ((temporizador < alimento) && (msg != 'alimento inexistente')){
        msg2 = 'tempo insuficiente'
    }
    else if (msg == 'alimento inexistente') {
        msg2 = 'fim do ciclo! no cardápio principal, tente uma das opções: pipoca, macarrao, carne, feijao, brigadeiro'
    }else if (msg != 'alimento inexistente') {
        msg2 = 'alimento pronto'
    }

    return msg + " | " + msg2
}

// Modelo de exc. da função
// funcao('nome do item', tempo extra)
// funcao(string, integer)

// teste com retorno queimou meuMicroOndas('macarrao', 10)
// teste com retorno pronto  meuMicroOndas('macarrao', 1)
// teste com retonro alimento inexistente meuMicroOndas('batatinha', 0)

console.log(meuMicroOndas('', 0))