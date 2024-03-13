/* 1–Crie uma função que a partir da data atual, exiba no console uma nova data da seguinte forma:
- Uma semana a mais do que o dia atual.
- Cinco meses a mais do que o mês atual.
- Dois anos a mais do que o ano atual.
O formato da data deve ser exibida no padrão dia/mês/ano. */

const dataAtual = new Date()
function dataAvancada(dataAtual){
const dia = dataAtual.getDate() + 7
const mes = dataAtual.getMonth() + 6
const ano = dataAtual.getFullYear() + 2
    return{
        dia,
        mes,
        ano
    }
}
const {dia, mes, ano} = dataAvancada(dataAtual)
console.log(`${dia}/${mes}/${ano}`)

console.log(`\n`)

/* 2 – Crie uma função que receba um determinado salário em real como parâmetro e converta esse salário para as moedas Dólar e Euro. Deverá ser feito a conversão de valores e formatação da moeda. 
Considere:
1 real = 0.20 dólar
1 real = 0.19 euro */
const salario = 2550.75;
function converterSalario(salario) {
    const salarioDolar = salario * 0.20;
    const salarioEuro = salario * 0.19;
    return {
        dolar: salarioDolar.toLocaleString('pt-br', { style: 'currency', currency: 'USD' }),
        euro: salarioEuro.toLocaleString('pt-br', { style: 'currency', currency: 'EUR' })
    };
}
const { dolar, euro } = converterSalario(salario);

console.log(`Salário em dólares: ${dolar}`);
console.log(`Salário em euros: ${euro}`);

console.log(`\n`)

/* 3 – Crie uma função que receba um nome como parâmetro e exiba no console este nome formatado somente com letras maiúsculas, somente com letras minúsculas, e em seguida exiba o número de letras que esse nome possui. */

const nome = "Daniel Augusto Mandira"
function nameConvert(nome){
    const nomeMaiusculo = nome.toUpperCase();
    const nomeMinusculo = nome.toLowerCase();
    const numeroDeLetras = nome.length;
    return{
        nomeMaiusculo,
        nomeMinusculo,
        numeroDeLetras
    }
}
const{nomeMaiusculo, nomeMinusculo, numeroDeLetras} = nameConvert(nome)
console.log(nomeMaiusculo)
console.log(nomeMinusculo)
console.log(numeroDeLetras)

