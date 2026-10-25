// QUESTÃO 1
{
    console.log("\n========== QUESTÃO 1 ==========");

    const aluno = {
        nome: "Mariana",
        idade: 21,
        curso: "Sistemas de Informação"
    };

    console.log("Nome:", aluno.nome);

    console.log("Idade:", aluno["idade"]);

    const propriedade = "curso";
    console.log("Curso:", aluno[propriedade]);

    aluno.idade = 22;

    console.log("Aluno atualizado:", aluno);
}

// QUESTÃO 2
{
    console.log("\n========== QUESTÃO 2 ==========");

    const produto = {
        nome: "Notebook",
        preco: 3500,
        estoque: 10
    };

    produto.categoria = "Informática";

    produto.estoque = 8;

    produto.desconto = 10;

    delete produto.estoque;

    console.log("Produto final:", produto);
}

// QUESTÃO 3
{
    console.log("\n========== QUESTÃO 3 ==========");

    const usuario = {
        nome: "Carlos",
        email: "carlos@email.com",
        idade: 30
    };

    console.log("Possui email?", Object.hasOwn(usuario, "email"));
    console.log("Possui telefone?", Object.hasOwn(usuario, "telefone"));
    console.log("Possui idade?", Object.hasOwn(usuario, "idade"));

    const propriedades = ["email", "telefone", "idade"];

    propriedades.forEach(function (propriedade) {
        if (Object.hasOwn(usuario, propriedade)) {
            console.log("A propriedade " + propriedade + " existe.");
        } else {
            console.log("A propriedade " + propriedade + " não existe.");
        }
    });

    console.log(
        "Object.hasOwn:",
        Object.hasOwn(usuario, "email")
    );

    console.log(
        "Operador in:",
        "email" in usuario
    );
}

// QUESTÃO 4
{
    console.log("\n========== QUESTÃO 4 ==========");

    const carro = {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2024,
        cor: "preto"
    };

    console.log("Propriedades:", Object.keys(carro));

    console.log("Valores:", Object.values(carro));

    console.log("Pares:", Object.entries(carro));

    Object.entries(carro).forEach(function (par) {
        const propriedade = par[0];
        const valor = par[1];

        console.log(propriedade + ": " + valor);
    });
}

// QUESTÃO 5
{
    console.log("\n========== QUESTÃO 5 ==========");

    const produto = {
        nome: "Teclado",
        preco: 250,
        quantidade: 4
    };

    produto.total = produto.preco * produto.quantidade;

    console.log("Produto:", produto);
    console.log("Total:", produto.total);

    function calcularTotal(objeto) {
        return objeto.preco * objeto.quantidade;
    }

    const produto2 = {
        nome: "Mouse",
        preco: 120,
        quantidade: 5
    };

    console.log(
        "Total do produto 2:",
        calcularTotal(produto2)
    );
}

// QUESTÃO 6
{
    console.log("\n========== QUESTÃO 6 ==========");

    const funcionario = {
        nome: "Ana",
        cargo: "Desenvolvedora",
        endereco: {
            cidade: "Nova Friburgo",
            estado: "RJ",
            cep: "28600-000"
        }
    };

    console.log("Cidade:", funcionario.endereco.cidade);
    console.log("Estado:", funcionario.endereco.estado);
    console.log("CEP:", funcionario.endereco.cep);

    funcionario.endereco.cidade = "Rio de Janeiro";

    console.log("Endereço atualizado:", funcionario.endereco);

    console.log("Bairro:", funcionario.endereco?.bairro);

    console.log("Cidade de outro funcionário:", funcionario.outroEndereco?.cidade);
}

// QUESTÃO 7
{
    console.log("\n========== QUESTÃO 7 ==========");

    const conta = {
        titular: "João",
        saldo: 1500,

        depositar: function (valor) {
            if (valor <= 0) {
                console.log("O depósito deve ser maior que zero.");
                return;
            }

            this.saldo += valor;
            console.log("Depósito realizado:", valor);
        },

        consultarSaldo: function () {
            console.log("Titular:", this.titular);
            console.log("Saldo atual:", this.saldo);
        },

        sacar: function (valor) {
            if (valor <= 0) {
                console.log("O saque deve ser maior que zero.");
                return;
            }

            if (valor > this.saldo) {
                console.log("Saldo insuficiente.");
                return;
            }

            this.saldo -= valor;
            console.log("Saque realizado:", valor);
        }
    };

    conta.consultarSaldo();

    conta.depositar(500);
    conta.consultarSaldo();

    conta.sacar(300);
    conta.consultarSaldo();

    conta.sacar(5000);
    conta.consultarSaldo();
}

// QUESTÃO 8
{
    console.log("\n========== QUESTÃO 8 ==========");

    const alunos = [
        { nome: "Ana", nota: 8.5 },
        { nome: "Bruno", nota: 6.0 },
        { nome: "Carlos", nota: 9.2 },
        { nome: "Daniel", nota: 7.0 }
    ];

    const nomes = alunos.map(function (aluno) {
        return aluno.nome;
    });

    console.log("Nomes dos alunos:", nomes);

    const aprovados = alunos.filter(function (aluno) {
        return aluno.nota >= 7;
    });

    console.log("Alunos com nota >= 7:", aprovados);

    const melhorAluno = alunos.reduce(function (melhor, aluno) {
        if (aluno.nota > melhor.nota) {
            return aluno;
        }

        return melhor;
    });

    console.log("Aluno com maior nota:", melhorAluno);

    const somaNotas = alunos.reduce(function (soma, aluno) {
        return soma + aluno.nota;
    }, 0);

    const media = somaNotas / alunos.length;

    console.log("Média da turma:", media.toFixed(2));

    const alunosOrdenados = alunos.slice().sort(function (a, b) {
        return b.nota - a.nota;
    });

    console.log("Alunos ordenados:", alunosOrdenados);
}

// QUESTÃO 9
{
    console.log("\n========== QUESTÃO 9 ==========");

    const dadosPessoais = {
        nome: "Marina",
        idade: 28
    };

    const dadosProfissionais = {
        cargo: "Analista",
        salario: 4500
    };

    const pessoa = Object.assign(
        {},
        dadosPessoais,
        dadosProfissionais
    );

    pessoa.resumo =
        pessoa.nome +
        " tem " +
        pessoa.idade +
        " anos, trabalha como " +
        pessoa.cargo +
        " e recebe R$ " +
        pessoa.salario.toFixed(2) +
        ".";

    console.log("Pessoa:", pessoa);

    console.log("Dados pessoais originais:", dadosPessoais);
    console.log("Dados profissionais originais:", dadosProfissionais);
}

// QUESTÃO 10
{
    console.log("\n========== QUESTÃO 10 ==========");

    const produtos = [
        {
            id: 1,
            nome: "Notebook",
            categoria: "Informática",
            preco: 3500,
            estoque: 4
        },
        {
            id: 2,
            nome: "Mouse",
            categoria: "Informática",
            preco: 120,
            estoque: 15
        },
        {
            id: 3,
            nome: "Cadeira",
            categoria: "Móveis",
            preco: 900,
            estoque: 6
        },
        {
            id: 4,
            nome: "Teclado",
            categoria: "Informática",
            preco: 250,
            estoque: 10
        }
    ];

    function listarNomes(lista) {
        return lista.map(function (produto) {
            return produto.nome;
        });
    }

    console.log("Nomes dos produtos:", listarNomes(produtos));

    function calcularValoresEstoque(lista) {
        return lista.map(function (produto) {
            return {
                nome: produto.nome,
                valorEstoque: produto.preco * produto.estoque
            };
        });
    }

    const valoresEstoque = calcularValoresEstoque(produtos);

    console.log("Valor em estoque por produto:", valoresEstoque);

    function calcularEstoqueTotal(lista) {
        return lista.reduce(function (total, produto) {
            return total + produto.preco * produto.estoque;
        }, 0);
    }

    const valorTotal = calcularEstoqueTotal(produtos);

    console.log(
        "Valor total do estoque: R$",
        valorTotal.toFixed(2)
    );

    function encontrarMaisCaro(lista) {
        return lista.reduce(function (maisCaro, produto) {
            if (produto.preco > maisCaro.preco) {
                return produto;
            }

            return maisCaro;
        });
    }

    console.log("Produto mais caro:", encontrarMaisCaro(produtos));

    function filtrarInformatica(lista) {
        return lista.filter(function (produto) {
            return produto.categoria === "Informática";
        });
    }

    console.log(
        "Produtos de Informática:",
        filtrarInformatica(produtos)
    );

    function buscarPorId(lista, id) {
        return lista.find(function (produto) {
            return produto.id === id;
        });
    }

    const idProcurado = 3;

    console.log(
        "Produto com ID " + idProcurado + ":",
        buscarPorId(produtos, idProcurado)
    );

    function criarResumo(lista) {
        return {
            quantidadeProdutos: lista.length,
            valorTotalEstoque: calcularEstoqueTotal(lista)
        };
    }

    console.log("Resumo do estoque:", criarResumo(produtos));

    const relatorio = produtos.map(function (produto) {
        return {
            id: produto.id,
            nome: produto.nome,
            categoria: produto.categoria,
            preco: produto.preco,
            estoque: produto.estoque,
            valorEstoque: produto.preco * produto.estoque
        };
    });

    console.log("Relatório completo:", relatorio);

    console.log(
        "Propriedades do primeiro produto:",
        Object.keys(produtos[0])
    );
}
