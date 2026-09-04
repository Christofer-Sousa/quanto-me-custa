const diasUteisDoMes = 22;

function calcularHorasMensais(horasTrabalhadasDia) {
    if (horasTrabalhadasDia <= 0 || horasTrabalhadasDia > 12 || !validarNumeroFinitoMaiorZero(horasTrabalhadasDia)) {
        return false;
    } else {
        const horasTrabalhadaMes = horasTrabalhadasDia * diasUteisDoMes;
        return horasTrabalhadaMes;
    }
}

function calcularValorHora(salarioMes, horasTrabalhadaMes) {
    const salarioMesValido = !validarNumeroFinitoMaiorZero(salarioMes) ? false : true;
    const horasTrabalhadaMesValido = !validarNumeroFinitoMaiorZero(horasTrabalhadaMes) || horasTrabalhadaMes > (12 * 22) ? false : true;

    if (!salarioMesValido || !horasTrabalhadaMesValido) {
        return false;
    } else {
        const valorHora = (salarioMes / horasTrabalhadaMes)
        return valorHora;
    }

}

function calcularHorasCompra(precoProduto, valorHora) {
    const precoProdutoValido = !validarNumeroFinitoMaiorZero(precoProduto) ? false : true;
    const valorHoraValido = !validarNumeroFinitoMaiorZero(valorHora) ? false : true;

    if (!precoProdutoValido || !valorHoraValido) {
        return false;
    } else {
        const horasParaCompra = (precoProduto / valorHora)
        return horasParaCompra;
    }

}

function calcularDiasTrabalho(horasParaCompra, horasTrabalhadasDia) {
    const horasParaCompraValido = !validarNumeroFinitoMaiorZero(horasParaCompra) ? false : true;
    const horasTrabalhadasDiaValido = !validarNumeroFinitoMaiorZero(horasTrabalhadasDia) || horasTrabalhadasDia > 12 ? false : true;

    if (!horasParaCompraValido || !horasTrabalhadasDiaValido) {
        return false;
    } else {
        const diasTrabalho = (horasParaCompra / horasTrabalhadasDia);
        return diasTrabalho;
    }
}

function calcularSemanasTrabalhadas(diasTrabalhadosCompra, diasTrabalhadosSemanas) {
    const diasTrabalhadoCompraValido = !validarNumeroFinitoMaiorZero(diasTrabalhadosCompra) ? false : true;
    const diasTrabalhadosSemanasValido = !validarNumeroFinitoMaiorZero(diasTrabalhadosSemanas) || diasTrabalhadosSemanas > 7 ? false : true;

    if (!diasTrabalhadoCompraValido || !diasTrabalhadosSemanasValido) {
        return false;
    } else {
        const semanasParaCompra = diasTrabalhadosCompra / diasTrabalhadosSemanas;
        return semanasParaCompra;
    }

}

function calcularSalariosNecessarios(precoProduto, salarioMensal) {
    const precoProdutoValido = !validarNumeroFinitoMaiorZero(precoProduto) ? false : true;
    const salarioMensalValido = !validarNumeroFinitoMaiorZero(salarioMensal) ? false : true;

    if (!precoProdutoValido || !salarioMensalValido) {
        return false;
    } else {
        const salariosNecessarios = precoProduto / salarioMensal;
        return salariosNecessarios;
    }

}

function calcularPercentualSalario(precoProduto, salarioMensal) {
    const precoProdutoValido = !validarNumeroFinitoMaiorZero(precoProduto) ? false : true;
    const salarioMensalValido = !validarNumeroFinitoMaiorZero(salarioMensal) ? false : true;

    if (!precoProdutoValido || !salarioMensalValido) {
        return false;
    } else {
        const porcentagemSalario = (precoProduto / salarioMensal) * 100;
        return porcentagemSalario;
    }
}

function definirVeredito(percentualSalario) {
    const percentualSalarioValido = !Number.isFinite(percentualSalario) || percentualSalario < 0 ? false : true;

    if (!percentualSalarioValido) {
        return false;
    } else {
        const percentualSalarioFormatado = Number(percentualSalario).toFixed(2)

        if (percentualSalarioFormatado >= 0 && percentualSalarioFormatado <= 10) {
            return ['TRANQUILO', 'Seu bolso mal vai notar.', '&#129297;', 'Pode comprar. Seu salário nem vai perceber.', ['border-green-900/70', 'bg-green-950/20']];
        } else if (percentualSalarioFormatado >= 10 && percentualSalarioFormatado <= 30) {
            return ['QUESTIONÁVEL', 'Ainda dá tempo de desistir.', '&#129300;', 'Seu bolso vai sentir. Mas ainda vai respirar.', ['border-yellow-900/70', 'bg-yellow-950/20']];
        } else if (percentualSalarioFormatado >= 30 && percentualSalarioFormatado <= 70) {
            return ['CORAJOSO', 'Você realmente quer fazer isso?', '&#128559;', 'Seu salário vai lembrar dessa compra por um bom tempo.', ['border-orange-900/70', 'bg-orange-950/20']];
        } else if (percentualSalarioFormatado >= 70 && percentualSalarioFormatado <= 150) {
            return ['PÉSSIMA IDEIA', 'Talvez seja hora de repensar essa compra.', '&#129324;', 'Seu cartão de crédito começou a suar.', ['border-red-900/70', 'bg-red-950/20']];
        } else if (percentualSalarioFormatado > 150) {
            return ['VOCÊ ENLOUQUECEU', 'Isso não é uma compra. É um evento financeiro.', '&#128128;', 'Você está tentando comprar isso ou comprar a própria falência?', ['border-purple-900/70', 'bg-purple-950/20']];
        }
    }

}

function ResultadoCustoReal(horasMensais, valorHora, horasParaCompra, diasTrabalhoParaCompra, semanasParaCompra, salariosNecessarios, percentualDoSalario, vereditoFinal) {
    this.horasMensais = horasMensais;
    this.valorHora = valorHora.toFixed(2);
    this.horasParaCompra = horasParaCompra.toFixed(0);
    this.diasTrabalhoParaCompra = diasTrabalhoParaCompra.toFixed(0);
    this.semanasParaCompra = semanasParaCompra.toFixed(0);
    this.salariosNecessarios = salariosNecessarios.toFixed(0);
    this.percentualDoSalario = percentualDoSalario.toFixed(0);
    this.vereditoFinal = vereditoFinal;
}

function validarNumeroFinitoMaiorZero(valor) {
    if (!Number.isFinite(valor) || valor <= 0) {
        return false;
    } else {
        return true;
    }
}

function validarDados(salario, horasPorDia, diasPorSemana, produto, precoProduto) {
    if (!validarNumeroFinitoMaiorZero(salario) || !validarNumeroFinitoMaiorZero(horasPorDia) || horasPorDia > 12 || !validarNumeroFinitoMaiorZero(diasPorSemana) || diasPorSemana > 7 || !produto || !validarNumeroFinitoMaiorZero(precoProduto)) {
        return false;
    } else {
        return true;
    };
}

function calcularCustoReal(salario, horasPorDia, diasPorSemana, produto, precoProduto) {
    const dadosValidos = validarDados(salario, horasPorDia, diasPorSemana, produto, precoProduto)
    if (!dadosValidos) {
        return false;
    } else {
        const horasMensais = calcularHorasMensais(horasPorDia);
        const valorHora = calcularValorHora(salario, horasMensais);
        const horasParaCompra = calcularHorasCompra(precoProduto, valorHora);
        const diasTrabalhoParaCompra = calcularDiasTrabalho(horasParaCompra, horasPorDia);
        const semanasParaCompra = calcularSemanasTrabalhadas(diasTrabalhoParaCompra, diasPorSemana);
        const salariosNecessarios = calcularSalariosNecessarios(precoProduto, salario);
        const percentualDoSalario = calcularPercentualSalario(precoProduto, salario);
        const vereditoFinal = definirVeredito(percentualDoSalario);

        const resultadoFinal = new ResultadoCustoReal(horasMensais, valorHora, horasParaCompra, diasTrabalhoParaCompra, semanasParaCompra, salariosNecessarios, percentualDoSalario, vereditoFinal);

        return resultadoFinal;
    }

}


//==================== Integração com o HTML ======================
const forms = document.querySelector('#forms')
const inputSalario = document.querySelector('#salario')
const inputHorasDia = document.querySelector('#horas-dia')
const inputDiasSemanas = document.querySelector('#dias-semanas')
const inputProduto = document.querySelector('#produto')
const inputPrecoProduto = document.querySelector('#preco-produto')

const quadroHorasDeVida = document.querySelector('#resultado-horas')
const quadroVeredito = document.querySelector('#veredito')
const quadroMensagemVeredito = document.querySelector('#mensagem-veredito')
const quadroDiasDeTrabalho = document.querySelector('#resultado-dias')
const quadroSemanasDeTrabalho = document.querySelector('#resultado-semanas')
const quadroSalarios = document.querySelector('#resultado-salarios')
const quadroPercentual = document.querySelector('#resultado-percentual')
const quadroMensagemFinal = document.querySelector('#mensagem-final')
const quadroEmojiVeredito = document.querySelector('#emoji-veredito')
const quadroValorHora = document.querySelector('#resultado-valor-hora')

const boxVeredito = document.querySelector('#box-veredito')
const boxSectionResultado = document.querySelector('#box-section-resultado')

const divResultado = document.querySelector('#resultado')

let salario;
let horasPorDia;
let diasPorSemana;
let produto;
let precoProduto;

function limparCaracteres(valorInput) {
    return valorInput.replace(/\D+/g,  '')
}

forms.addEventListener('submit', function (event) {
    event.preventDefault();

    salario = Number(limparCaracteres(inputSalario.value));
    horasPorDia = Number(limparCaracteres(inputHorasDia.value));
    diasPorSemana = Number(limparCaracteres(inputDiasSemanas.value));
    produto = inputProduto.value;
    precoProduto = Number(limparCaracteres(inputPrecoProduto.value));

    const veredito = calcularCustoReal(salario, horasPorDia, diasPorSemana, produto, precoProduto)

    exibirResultado(veredito)
    limparInputs()
    boxSectionResultado.scrollIntoView({ behavior: 'smooth' })


})

function limparInputs() {
    inputSalario.value = ''
    inputHorasDia.value = ''
    inputDiasSemanas.value = ''
    inputProduto.value = ''
    inputPrecoProduto.value = ''
}

function validaFormulario() {
    document.querySelector('.mensagem-erro') ? document.querySelector('.mensagem-erro').remove() : false;
    let inputs = forms.querySelectorAll('input')
    for (let input of inputs) {
        if (!input.value) {
            false;
        }
    }

    const mensagemInputVazio = document.createElement('p')
    mensagemInputVazio.innerHTML = 'Preencha todos os campos corretamente.';
    mensagemInputVazio.classList.add('text-red-500/90');
    mensagemInputVazio.classList.add('mensagem-erro');
    forms.appendChild(mensagemInputVazio);
    divResultado.classList.add('hidden')
}

function exibirResultado(resultadoVeredito) {
    if (!resultadoVeredito) {
        validaFormulario()
        return
    } else {
        document.querySelector('.mensagem-erro') ? document.querySelector('.mensagem-erro').remove() : false;
        divResultado.classList.remove('hidden');
    }


    boxVeredito.classList.remove(
        'bg-green-950/20',
        'bg-yellow-950/20',
        'bg-orange-950/20',
        'bg-red-950/20',
        'bg-purple-950/20'
    )
    boxVeredito.classList.remove(
        'border-green-900/70',
        'border-yellow-900/70',
        'border-orange-900/70',
        'border-red-900/70',
        'border-purple-900/70'
    )

    quadroHorasDeVida.innerHTML = resultadoVeredito.horasParaCompra;
    quadroDiasDeTrabalho.innerHTML = resultadoVeredito.diasTrabalhoParaCompra;
    quadroSemanasDeTrabalho.innerHTML = resultadoVeredito.semanasParaCompra;
    quadroSalarios.innerHTML = resultadoVeredito.salariosNecessarios;
    quadroPercentual.innerHTML = resultadoVeredito.percentualDoSalario + '%';
    quadroVeredito.innerHTML = resultadoVeredito.vereditoFinal[0];
    quadroMensagemVeredito.innerHTML = resultadoVeredito.vereditoFinal[1]
    quadroEmojiVeredito.innerHTML = resultadoVeredito.vereditoFinal[2]
    quadroMensagemFinal.innerHTML = resultadoVeredito.vereditoFinal[3]
    quadroValorHora.innerHTML = `R$${resultadoVeredito.valorHora}`

    boxVeredito.classList.add(resultadoVeredito.vereditoFinal[4][0])
    boxVeredito.classList.add(resultadoVeredito.vereditoFinal[4][1])

}




