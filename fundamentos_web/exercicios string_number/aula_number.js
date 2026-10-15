//1
const valor = 17.684;
console.log(Math.round(valor));
console.log(Math.floor(valor));
console.log(Math.ceil(valor));

//2
const preco = 149.98765;
console.log(preco.toFixed(2));
const precoNumerico = Number(preco.toFixed(2));

//3
const valor1 = "25";
const valor2 = "17.5";

const n1=Number(valor1);
const v2=Number(valor2);

console.log("Soma: "+(n1+n2));
console.log("Diferença: "+(n1-n2));
console.log("Produto: "+(n1*n2));
console.log("Quociente: "+(n1/n2));

//4
const valor = "123.45";
const numero = Number(valor);

if (!Number.isNaN(numero)) {
    console.log("Valor numérico válido");
} else {
    console.log("Valor inválido");
}

//5
const numero = 42.0;

if (Number.isInteger(numero)) {
    console.log("O número é inteiro.");
} else {
    console.log("O número não é inteiro.");
}

//6
const numeros = [17, 4, 89, 32, 12, 56];

let maior = numeros[0];
let menor = numeros[0];

numeros.forEach(function(numero) {
    if (numero > maior) {
        maior = numero;
    }
    if (numero < menor) {
        menor = numero;
    }
});
console.log("Maior: " + maior);
console.log("Menor: " + menor);

//7
function gerarNumero() {
    return Math.floor(Math.random() * 100) + 1;
}
console.log(gerarNumero());

//8
const nota1 = 7.5;
const nota2 = 8.25;
const nota3 = 9.0;

const media = (nota1 + nota2 + nota3) / 3;

console.log("Média: " + media.toFixed(2));

function calcularMedia(notas) {
    let soma = 0;

    notas.forEach(function(nota) {
        soma += nota;
    });
    if (notas.length === 0) {
        return 0;
    }
    return soma / notas.length;
}

console.log(calcularMedia([7.5, 8.25, 9.0]).toFixed(2));

//9
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

//10
function analisarNumero(valor) {
    let eNumero = typeof valor === "number";
    let eInteiro = false;
    let eFinito = false;
    let eSeguro = false;

    if (eNumero && !Number.isNaN(valor)) {
        eInteiro = Number.isInteger(valor);
    }
    eFinito = Number.isFinite(valor);
    eSeguro = Number.isSafeInteger(valor);

    let resultado = {
        numero: eNumero && !Number.isNaN(valor),
        inteiro: eInteiro,
        finito: eFinito,
        seguro: eSeguro
    };
    return resultado;
}
console.log(analisarNumero(42));
console.log(analisarNumero(42.5));
console.log(analisarNumero("42"));
console.log(analisarNumero(Infinity));
console.log(analisarNumero(NaN));
