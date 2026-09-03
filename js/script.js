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
            return ['TRANQUILO', 'Vai ser feliz!', '&#129297;', 'Pode comprar. Seu salário nem vai perceber.', ['border-green-900/70', 'bg-green-950/20']];
        } else if (percentualSalarioFormatado >= 10 && percentualSalarioFormatado <= 30) {
            return ['QUESTIONÁVEL', 'Pense bem se vale a pena.', '&#129300;', 'Seu bolso vai sentir. Mas ainda vai respirar.', ['border-yellow-900/70', 'bg-yellow-950/20']];
        } else if (percentualSalarioFormatado >= 30 && percentualSalarioFormatado <= 70) {
            return ['CORAJOSO', 'Nada mais importa?', '&#128559;', 'Seu salário vai lembrar dessa compra por um bom tempo.', ['border-orange-900/70', 'bg-orange-950/20']];
        } else if (percentualSalarioFormatado >= 70 && percentualSalarioFormatado <= 150) {
            return ['PÉSSIMA IDEIA', 'Espere um momento melhor.', '&#129324;', 'Seu cartão de crédito começou a suar.', ['border-red-900/70', 'bg-red-950/20']];
        } else if (percentualSalarioFormatado > 150) {
            return ['VOCÊ ENLOUQUECEU', 'Melhor achar outro emprego antes.', '&#128128;', 'Você está tentando comprar isso ou comprar a própria falência?', ['border-purple-900/70', 'bg-purple-950/20']];
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




/**
//============== Testando funcoes =================
console.log('===== TESTE: calcularCustoReal =====');

const testesCustoReal = [
    {
        nome: 'PS5 - salário médio',
        dados: [3000, 8, 5, 'PlayStation 5', 5000],
        valido: true
    },

    {
        nome: 'Fone barato',
        dados: [3000, 8, 5, 'Fone Bluetooth', 150],
        valido: true
    },

    {
        nome: 'Notebook',
        dados: [5000, 8, 5, 'Notebook', 4500],
        valido: true
    },

    {
        nome: 'Celular caro',
        dados: [2500, 8, 6, 'iPhone', 7000],
        valido: true
    },

    {
        nome: 'Salário alto',
        dados: [10000, 8, 5, 'Notebook Gamer', 8000],
        valido: true
    },

    {
        nome: 'Trabalha 6 horas por dia',
        dados: [3000, 6, 5, 'Console', 5000],
        valido: true
    },

    {
        nome: 'Trabalha 12 horas por dia',
        dados: [5000, 12, 6, 'Carro', 30000],
        valido: true
    },

    {
        nome: 'Trabalha 7 dias por semana',
        dados: [3000, 8, 7, 'TV', 3000],
        valido: true
    },

    // ===== INVÁLIDOS =====

    {
        nome: 'Salário zero',
        dados: [0, 8, 5, 'PS5', 5000],
        valido: false
    },

    {
        nome: 'Salário negativo',
        dados: [-3000, 8, 5, 'PS5', 5000],
        valido: false
    },

    {
        nome: 'Horas por dia zero',
        dados: [3000, 0, 5, 'PS5', 5000],
        valido: false
    },

    {
        nome: 'Horas por dia acima de 12',
        dados: [3000, 13, 5, 'PS5', 5000],
        valido: false
    },

    {
        nome: 'Dias por semana zero',
        dados: [3000, 8, 0, 'PS5', 5000],
        valido: false
    },

    {
        nome: 'Dias por semana acima de 7',
        dados: [3000, 8, 8, 'PS5', 5000],
        valido: false
    },

    {
        nome: 'Produto vazio',
        dados: [3000, 8, 5, '', 5000],
        valido: false
    },

    {
        nome: 'Preço zero',
        dados: [3000, 8, 5, 'PS5', 0],
        valido: false
    },

    {
        nome: 'Preço negativo',
        dados: [3000, 8, 5, 'PS5', -5000],
        valido: false
    },

    {
        nome: 'Salário NaN',
        dados: [NaN, 8, 5, 'PS5', 5000],
        valido: false
    },

    {
        nome: 'Preço Infinity',
        dados: [3000, 8, 5, 'PS5', Infinity],
        valido: false
    }
];

testesCustoReal.forEach((teste) => {

    const resultado = calcularCustoReal(...teste.dados);

    const passou = teste.valido
        ? resultado !== false
        : resultado === false;

    console.log(
        `${passou ? '✅' : '❌'} ${teste.nome}`,
        '| Resultado:',
        resultado
    );

});

const resultadoPS5 = calcularCustoReal(
    3000,
    8,
    5,
    'PlayStation 5',
    5000
);

console.log('===== RESULTADO PS5 =====');
console.log('Horas mensais:', resultadoPS5.horasMensais);
console.log('Valor da hora:', resultadoPS5.valorHora);
console.log('Horas para compra:', resultadoPS5.horasParaCompra);
console.log('Dias de trabalho:', resultadoPS5.diasTrabalhoParaCompra);
console.log('Semanas:', resultadoPS5.semanasParaCompra);
console.log('Salários:', resultadoPS5.salariosNecessarios);
console.log('Percentual:', resultadoPS5.percentualDoSalario);
console.log('Veredito:', resultadoPS5.vereditoFinal);
*/


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

const boxVeredito = document.querySelector('#box-veredito')
const boxSectionResultado = document.querySelector('#box-section-resultado')

const divResultado = document.querySelector('#resultado')

let salario;
let horasPorDia;
let diasPorSemana;
let produto;
let precoProduto;

forms.addEventListener('submit', function (event) {
    event.preventDefault();

    salario = Number(inputSalario.value);
    horasPorDia = Number(inputHorasDia.value);
    diasPorSemana = Number(inputDiasSemanas.value);
    produto = inputProduto.value;
    precoProduto = Number(inputPrecoProduto.value);

    const veredito = calcularCustoReal(salario, horasPorDia, diasPorSemana, produto, precoProduto)

    exibirResultado(veredito)
    limparInputs()


})

function limparInputs(){
    inputSalario.value = ''
    inputHorasDia.value = ''
    inputDiasSemanas.value = ''
    inputProduto.value = ''
    inputPrecoProduto.value = ''
}


function exibirResultado(resultadoVeredito) {

    if (!resultadoVeredito) {
        alert('Preencha os campos corretamente') 
        return
    } else {
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

    boxVeredito.classList.add(resultadoVeredito.vereditoFinal[4][0])
    boxVeredito.classList.add(resultadoVeredito.vereditoFinal[4][1])
    boxSectionResultado.scrollIntoView({behavior: 'smooth'})
}




