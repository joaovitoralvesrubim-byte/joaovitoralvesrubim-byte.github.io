//1
let totalM = 0;
let somaM = 0;
let totalF = 0;
let somaF = 0;
let resposta1 = () => {
    let sexo = document.getElementById("q1_sexo").value;
    let altura = Number(document.getElementById("q1_altura").value);
    let resposta = document.getElementById("q1_resposta");

    if (altura <= 0 || !Number.isFinite(altura)) {
        resposta.textContent = "Digite uma altura válida.";
        return;
    }
    if (sexo === "M") {
        somaM += altura;
        totalM++;
    } else {
        somaF += altura;
        totalF++;
    }
    let mediaM = totalM > 0 ? (somaM / totalM).toFixed(2) : "Sem dados";
    let mediaF = totalF > 0 ? (somaF / totalF).toFixed(2) : "Sem dados";

    resposta.innerHTML =
        "Homens: " + totalM +
        " participantes — Média: " + mediaM + " m<br>" +
        "Mulheres: " + totalF +
        " participantes — Média: " + mediaF + " m";
};

//2
let resposta2 = () => {
    let n = Number(document.getElementById("q2_inteiro").value);
    let resposta = document.getElementById("q2_resposta");

    if (!Number.isInteger(n) || n < 1) {
        resposta.textContent = "Digite um inteiro positivo.";
        return;
    }
    let quantidade = 0;
    let numero = 1;
    while (quantidade < n) {
        numero++;
        let primo = true;
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                primo = false;
                break;
            }
        }
        if (primo) {
            quantidade++;
        }
    }
    resposta.textContent = "O " + n + "º primo é " + numero + ".";
};

//3
let resposta3_add = () => {
    let campo = document.getElementById("q3_nome");
    let nome = campo.value.trim();
    if (nome === "") {
        return;
    }
    let lista = document.getElementById("q3_lista");
    let item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);
    campo.value = "";
};
let resposta3_ordena_asc = () => {
    let lista = document.getElementById("q3_lista");
    let nomes = [];
    lista.querySelectorAll("li").forEach(function(item) {
        nomes.push(item.textContent);
    });
    nomes.sort(function(a, b) {
        return a.localeCompare(b, "pt-BR");
    });
    lista.innerHTML = "";
    nomes.forEach(function(nome) {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
};
let resposta3_ordena_desc = () => {
    let lista = document.getElementById("q3_lista");
    let nomes = [];
    lista.querySelectorAll("li").forEach(function(item) {
        nomes.push(item.textContent);
    });
    nomes.sort(function(a, b) {
        return b.localeCompare(a, "pt-BR");
    });
    lista.innerHTML = "";
    nomes.forEach(function(nome) {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
};

//4
let resposta4_azul = () => {
    document.body.style.backgroundColor = "blue";
};
let resposta4_branco = () => {
    document.body.style.backgroundColor = "white";
};
let resposta4_verde = () => {
    document.body.style.backgroundColor = "green";
};
let resposta4_cinza = () => {
    document.body.style.backgroundColor = "gray";
};

//5
let resposta5 = () => {
    let termo = document.getElementById("q5_termo").value;
    let artigo = document.getElementById("questao5_texto");
    let resposta = document.getElementById("q5_resposta");
    let texto = artigo.textContent;
    let original = texto;
    if (termo === "") {
        resposta.textContent = "Digite um texto para pesquisar.";
        return;
    }
    let quantidade = 0;
    let posicao = texto.indexOf(termo);
    while (posicao !== -1) {
        quantidade++;
        texto = texto.slice(posicao + termo.length);
        posicao = texto.indexOf(termo);
    }
    if (quantidade === 0) {
        resposta.textContent = "A busca não retornou nenhum resultado.";
        artigo.textContent = original;
        return;
    }
    let partes = original.split(termo);
    artigo.innerHTML = "";
    partes.forEach(function(parte, indice) {
        artigo.appendChild(document.createTextNode(parte));
        if (indice < partes.length - 1) {
            let destaque = document.createElement("span");
            destaque.className = "destaque";
            destaque.textContent = termo;
            artigo.appendChild(destaque);
        }
    });
    resposta.textContent =
        "O termo \"" + termo + "\" aparece " + quantidade + " vezes.";
};
