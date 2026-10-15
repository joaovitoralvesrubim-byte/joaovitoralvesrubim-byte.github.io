//1
const nome = "   joÃO da silVA   ";

const resultado = nome.trim().toLowerCase();
console.log(resultado);

//2
const email = "aluno@exemplo.com";
if (email.endsWith("exemplo.com")){
    console.log("E-mail váçido");
} else {
    console.log("E-mail inválido");
}

//3
const frase = "JavaScript é muito interessante";

console.log("Total de caracteres: "+frase.length);
console.log("Total de caracteres sem espaço: "+frase.replaceAll(" ",""),length);


//4
const mensagem = "Estou estudando JavaScript para desenvolver aplicações web";
if (mensagem.includes("javaScript")){
    console.log("A mensagem contém JavaScript");
} else {
    console.log("A mensagem não contém JavaScript");
}

//5
const email = "carlos.silva@gmail.com";
const p = email.indexOf("@");
const nome = email.slice(0, posicao);
console.log(nome);

//6
const mensagem = "Olá, João! Seja bem-vindo, João!";
const resultado = mensagem.replaceAll("João", "Maria");
console.log(resultado);

const resultado = mensagem.replace(/João/g, "Maria");
console.log(resultado);

//7
const codigo = "abc123456";
const maiusculo = codigo.toUpperCase();
const resultado = maiusculo.slice(0,3) +"-"+maiusculo.slice(3);
console.log(resultado);

//8
function inverterString(palavra){
    return palavra.split("").reverse().join("");
}
console.log(inverterString("javascript"));

//9
function analisarSenha(senha) {
    let temMaiuscula, temMinuscula, temNumero = false;
    for (let i=0;i<senha.length;i++){
        let caractere = senha[i];
        if(caractere >="A" && caractere <="Z"){
            temMaiuscula = true;
        }
        if (caractere >="a" && caractere <="z"){
            temMinuscula = true;
        }
        if( caractere >="0" && caractere <="9"){
            temNumero = true;
        }
    }
    return senha.length >=8 && temMaiuscula && temMinuscula;
}

//10
function formatarNome(nome){
    nome = nome.trim().toLowerCase().split(" ");
    nome = nome.filter(function (palavra){
        return palavra !=="";
    }).map(function(palavra){
        return palavra[0].toUpperCase()+palavra.slice(1);
    }).join(" ");
       
}


