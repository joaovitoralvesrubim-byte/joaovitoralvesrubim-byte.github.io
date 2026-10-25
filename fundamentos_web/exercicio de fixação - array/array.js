// QUESTÃO 1
{
    const frutas = ["maçã", "banana", "laranja"];

    frutas.push("uva");
    frutas.unshift("abacaxi");
    frutas.pop();
    frutas.shift();

    console.log("QUESTÃO 1:", frutas);
}

// QUESTÃO 
{
    const numeros = [10, 20, 30, 40, 50, 60];

    const parte = numeros.slice(2, 5);

    console.log("QUESTÃO 2:", parte);
    console.log("Array original:", numeros);
}

// QUESTÃO 3
{
    const cores = ["azul", "verde", "amarelo", "vermelho"];

    cores.splice(1, 2, "roxo", "laranja");

    console.log("QUESTÃO 3 - Substituição:", cores);

    cores.splice(1, 0, "preto");

    console.log("QUESTÃO 3 - Inserção:", cores);
}

// QUESTÃO 4
{
    const frontEnd = ["HTML", "CSS", "JavaScript"];
    const backEnd = ["Node.js", "Python", "Java"];

    const tecnologias = frontEnd.concat(backEnd);

    console.log("QUESTÃO 4:", tecnologias);
    console.log("Front-end original:", frontEnd);
    console.log("Back-end original:", backEnd);
}

// QUESTÃO 5
{
    const palavras = [
        "JavaScript",
        "é",
        "uma",
        "linguagem",
        "poderosa"
    ];

    const frase = palavras.join(" ");

    console.log("QUESTÃO 5:", frase);
}

// QUESTÃO 6
{
    const linguagens = ["JavaScript", "Python", "Java", "C#"];

    function temLinguagem(nome) {
        return linguagens.includes(nome);
    }

    console.log("QUESTÃO 6 - Python:", temLinguagem("Python"));
    console.log("QUESTÃO 6 - Ruby:", temLinguagem("Ruby"));

    function temLinguagemSemDiferenciarMaiusculas(nome) {
        return linguagens.some(function (linguagem) {
            return linguagem.toLowerCase() === nome.toLowerCase();
        });
    }

    console.log(
        "QUESTÃO 6 - PYTHON:",
        temLinguagemSemDiferenciarMaiusculas("PYTHON")
    );

    console.log(
        "QUESTÃO 6 - ruby:",
        temLinguagemSemDiferenciarMaiusculas("ruby")
    );
}

// QUESTÃO 7
{
    const nomes = ["Ana", "Bruno", "Carlos", "Ana", "Daniel"];

    console.log("QUESTÃO 7 - Primeira Ana:", nomes.indexOf("Ana"));
    console.log("QUESTÃO 7 - Última Ana:", nomes.lastIndexOf("Ana"));
    console.log("QUESTÃO 7 - Marcos:", nomes.indexOf("Marcos"));
}

// QUESTÃO 8
{
    const produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];

    console.log("QUESTÃO 8:");

    produtos.forEach(function (produto, indice) {
        console.log(indice + " - " + produto);
    });
}

// QUESTÃO 9
{
    const precos = [100, 250, 80, 320, 150];

    const precosComDesconto = precos.map(function (preco) {
        return preco * 0.9;
    });

    console.log("QUESTÃO 9:", precosComDesconto);
    console.log("Array original:", precos);
}

// QUESTÃO 10
{
    const numeros = [3, 8, 11, 14, 21, 26, 30, 35];

    const pares = numeros.filter(function (numero) {
        return numero % 2 === 0;
    });

    console.log("QUESTÃO 10:", pares);
}

// QUESTÃO 11
{
    const alunos = [
        { nome: "Ana", nota: 8.5 },
        { nome: "Bruno", nota: 6.0 },
        { nome: "Carlos", nota: 9.2 },
        { nome: "Daniel", nota: 7.5 }
    ];

    const alunoEncontrado = alunos.find(function (aluno) {
        return aluno.nota >= 9;
    });

    console.log("QUESTÃO 11:", alunoEncontrado);
}

// QUESTÃO 12
{
    const produtos = [
        { id: 101, nome: "Notebook" },
        { id: 205, nome: "Mouse" },
        { id: 310, nome: "Teclado" },
        { id: 450, nome: "Monitor" }
    ];

    function buscarIndice(id) {
        return produtos.findIndex(function (produto) {
            return produto.id === id;
        });
    }

    console.log("QUESTÃO 12 - ID 205:", buscarIndice(205));
    console.log("QUESTÃO 12 - ID 450:", buscarIndice(450));
    console.log("QUESTÃO 12 - ID 999:", buscarIndice(999));
}

// QUESTÃO 13
{
    const notas = [5.5, 6.0, 7.2, 8.0, 9.5];

    const existeNotaAlta = notas.some(function (nota) {
        return nota >= 9;
    });

    const existeNotaBaixa = notas.some(function (nota) {
        return nota < 6;
    });

    console.log("QUESTÃO 13 - Nota >= 9:", existeNotaAlta);
    console.log("QUESTÃO 13 - Nota < 6:", existeNotaBaixa);
}

// QUESTÃO 14
{
    const idades = [22, 31, 19, 27, 40];

    const todosMaioresDeIdade = idades.every(function (idade) {
        return idade >= 18;
    });

    console.log("QUESTÃO 14 - Primeiro array:", todosMaioresDeIdade);

    const idades2 = [22, 17, 19, 27, 40];

    const todosMaioresDeIdade2 = idades2.every(function (idade) {
        return idade >= 18;
    });

    console.log("QUESTÃO 14 - Segundo array:", todosMaioresDeIdade2);
}

// QUESTÃO 15
{
    const precos = [29.90, 49.90, 15.50, 100.00];

    const total = precos.reduce(function (acumulador, preco) {
        return acumulador + preco;
    }, 0);

    console.log("QUESTÃO 15 - Total:", total.toFixed(2));

    const itens = [
        { nome: "Caderno", preco: 20 },
        { nome: "Caneta", preco: 5 },
        { nome: "Mochila", preco: 120 }
    ];

    const totalCompra = itens.reduce(function (acumulador, item) {
        return acumulador + item.preco;
    }, 0);

    console.log("QUESTÃO 15 - Total dos itens:", totalCompra);
}

// QUESTÃO 16
{
    const numeros = [100, 8, 25, 3, 45, 12];

    const crescente = numeros.slice().sort(function (a, b) {
        return a - b;
    });

    const decrescente = numeros.slice().sort(function (a, b) {
        return b - a;
    });

    console.log("QUESTÃO 16 - Crescente:", crescente);
    console.log("QUESTÃO 16 - Decrescente:", decrescente);
    console.log("Array original:", numeros);

}

// QUESTÃO 17
{
    const fila = ["Ana", "Bruno", "Carlos", "Daniel"];

    const filaInvertida = fila.slice().reverse();

    console.log("QUESTÃO 17 - Fila invertida:", filaInvertida);
    console.log("Fila original:", fila);

}

// QUESTÃO 18
{
    const categorias = [
        ["HTML", "CSS"],
        ["JavaScript", "TypeScript"],
        ["Node.js", "Express"]
    ];

    const tecnologias = categorias.flat();

    console.log("QUESTÃO 18:", tecnologias);

    const dados = [
        ["HTML", ["CSS"]],
        ["JavaScript", ["TypeScript"]]
    ];

    console.log("QUESTÃO 18 - flat():", dados.flat());
    console.log("QUESTÃO 18 - flat(2):", dados.flat(2));
}

// QUESTÃO 19
{
    const turmas = [
        { nome: "Turma A", alunos: ["Ana", "Bruno"] },
        { nome: "Turma B", alunos: ["Carlos", "Daniel", "Eva"] }
    ];

    const nomesAlunos = turmas.flatMap(function (turma) {
        return turma.alunos;
    });

    console.log("QUESTÃO 19 - Nomes:", nomesAlunos);

    const alunosComTurma = turmas.flatMap(function (turma) {
        return turma.alunos.map(function (aluno) {
            return {
                nome: aluno,
                turma: turma.nome
            };
        });
    });

    console.log("QUESTÃO 19 - Alunos com turma:", alunosComTurma);
}

// QUESTÃO 20
{
    const vendas = [
        {
            produto: "Notebook",
            categoria: "Informática",
            valor: 3500,
            quantidade: 2
        },
        {
            produto: "Mouse",
            categoria: "Informática",
            valor: 120,
            quantidade: 5
        },
        {
            produto: "Cadeira",
            categoria: "Móveis",
            valor: 900,
            quantidade: 3
        },
        {
            produto: "Teclado",
            categoria: "Informática",
            valor: 250,
            quantidade: 4
        },
        {
            produto: "Mesa",
            categoria: "Móveis",
            valor: 1200,
            quantidade: 1
        }
    ];

    const vendasInformatica = vendas.filter(function (venda) {
        return venda.categoria === "Informática";
    });

    const vendasCalculadas = vendasInformatica.map(function (venda) {
        return {
            produto: venda.produto,
            categoria: venda.categoria,
            valor: venda.valor,
            quantidade: venda.quantidade,
            faturamento: venda.valor * venda.quantidade
        };
    });

    const faturamentoTotal = vendasCalculadas.reduce(function (total, venda) {
        return total + venda.faturamento;
    }, 0);

    const vendasOrdenadas = vendasCalculadas.slice().sort(function (a, b) {
        return b.faturamento - a.faturamento;
    });

    const maiorFaturamento = vendasOrdenadas[0];

    const nomesProdutos = vendasCalculadas.map(function (venda) {
        return venda.produto;
    });

    console.log("QUESTÃO 20 - Vendas calculadas:", vendasCalculadas);
    console.log("QUESTÃO 20 - Faturamento total:", faturamentoTotal);
    console.log("QUESTÃO 20 - Maior faturamento:", maiorFaturamento);
    console.log("QUESTÃO 20 - Nomes dos produtos:", nomesProdutos);

    const maiorValor = vendasCalculadas.reduce(function (maior, venda) {
        if (venda.faturamento > maior) {
            return venda.faturamento;
        }

        return maior;
    }, 0);

    const produtoMaiorFaturamento = vendasCalculadas.find(function (venda) {
        return venda.faturamento === maiorValor;
    });

    console.log(
        "QUESTÃO 20 - Produto de maior faturamento usando find():",
        produtoMaiorFaturamento
    );

    const vendasResumidas = vendas
        .filter(function (venda) {
            return venda.categoria === "Informática";
        })
        .map(function (venda) {
            return {
                produto: venda.produto,
                faturamento: venda.valor * venda.quantidade
            };
        });

    const totalEncadeado = vendasResumidas.reduce(function (soma, venda) {
        return soma + venda.faturamento;
    }, 0);

    const nomesEncadeados = vendasResumidas.map(function (venda) {
        return venda.produto;
    });

    console.log("QUESTÃO 20 - Pipeline:", vendasResumidas);
    console.log("QUESTÃO 20 - Total do pipeline:", totalEncadeado);
    console.log("QUESTÃO 20 - Nomes do pipeline:", nomesEncadeados);
}
