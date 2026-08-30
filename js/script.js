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
            return 'TRANQUILO';
        } else if (percentualSalarioFormatado >= 10 && percentualSalarioFormatado <= 30) {
            return 'QUESTIONÁVEL';
        } else if (percentualSalarioFormatado >= 30 && percentualSalarioFormatado <= 70) {
            return 'CORAJOSO';
        } else if (percentualSalarioFormatado >= 70 && percentualSalarioFormatado <= 150) {
            return 'PÉSSIMA IDEIA';
        } else if (percentualSalarioFormatado > 150) {
            return 'VOCÊ ENLOUQUECEU';
        }
    }

}

function ResultadoCustoReal(horasMensais, valorHora, horasParaCompra, diasTrabalhoParaCompra, semanasParaCompra, salariosNecessarios, percentualDoSalario, vereditoFinal) {
    this.horasMensais = horasMensais;
    this.valorHora = valorHora;
    this.horasParaCompra = horasParaCompra;
    this.diasTrabalhoParaCompra = diasTrabalhoParaCompra;
    this.semanasParaCompra = semanasParaCompra;
    this.salariosNecessarios = salariosNecessarios;
    this.percentualDoSalario = percentualDoSalario;
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