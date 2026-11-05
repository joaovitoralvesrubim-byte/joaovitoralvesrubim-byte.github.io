let paises = [];
let paisesFiltrados = [];
let ordenacaoAtual = "";

const URL_API = "https://api.restcountries.com/countries/v5";
const CHAVE_API = "rc_live_66fa32df9cb641429af77cce355e686e";
const TAMANHO_PAGINA = 100;

const campoBusca = document.querySelector("#campoBusca");
const filtroRegiao = document.querySelector("#filtroRegiao");
const listaPaises = document.querySelector("#listaPaises");
const estatisticas = document.querySelector("#estatisticas");
const mensagemStatus = document.querySelector("#mensagemStatus");
const modalDetalhes = document.querySelector("#modalDetalhes");
const conteudoDetalhes = document.querySelector("#conteudoDetalhes");
const botoesOrdenacao = document.querySelectorAll(".ordenacao button");

function escaparHTML(texto) {
  const elemento = document.createElement("div");
  elemento.textContent = texto == null ? "" : String(texto);
  return elemento.innerHTML;
}

function obterNome(pais) {
  return pais.names && pais.names.common ? pais.names.common : "País sem nome";
}

function obterCodigo(pais) {
  if (!pais.codes) {
    return "";
  }

  return pais.codes.alpha_3 || pais.codes.alpha_2 || "";
}

function obterCodigoBandeira(pais) {
  return pais.codes && pais.codes.alpha_2 ? pais.codes.alpha_2.toLowerCase() : "";
}

function obterArea(pais) {
  if (typeof pais.area === "number") {
    return pais.area;
  }

  return pais.area && pais.area.kilometers ? Number(pais.area.kilometers) : 0;
}

function textoDeItem(item) {
  if (typeof item === "string" || typeof item === "number") {
    return String(item);
  }

  if (item && typeof item === "object") {
    return item.name || item.common || item.official || item.english_name || item.native_name || "";
  }

  return "";
}

function formatarLista(valor) {
  let itens = [];

  if (Array.isArray(valor)) {
    itens = valor;
  } else if (valor && typeof valor === "object") {
    itens = Object.values(valor);
  }

  const textos = itens.map(function (item) {
    return textoDeItem(item);
  }).filter(function (item) {
    return item !== "";
  });

  return textos.length > 0 ? textos.join(", ") : "Não informado";
}

function formatarMoedas(moedas) {
  if (!moedas || typeof moedas !== "object") {
    return "Não informado";
  }

  const listaMoedas = Object.entries(moedas).map(function (entrada) {
    const codigo = entrada[0];
    const nome = textoDeItem(entrada[1]);
    return nome ? nome + " (" + codigo + ")" : codigo;
  });

  return listaMoedas.length > 0 ? listaMoedas.join(", ") : "Não informado";
}

function formatarNumero(numero) {
  return new Intl.NumberFormat("pt-BR").format(numero || 0);
}

function formatarArea(area) {
  return formatarNumero(area) + " km²";
}

function criarUrlDaPagina(offset) {
  return URL_API + "?limit=" + TAMANHO_PAGINA + "&offset=" + offset;
}

async function buscarPagina(offset) {
  const resposta = await fetch(criarUrlDaPagina(offset), {
    headers: {
      Authorization: "Bearer " + CHAVE_API
    }
  });

  if (!resposta.ok) {
    throw new Error("Erro HTTP: " + resposta.status);
  }

  return resposta.json();
}

async function carregarPaises() {
  try {
    mensagemStatus.textContent = "Carregando países...";
    let offset = 0;
    let existemMaisPaginas = true;
    const todosOsPaises = [];

    while (existemMaisPaginas) {
      const dados = await buscarPagina(offset);
      const paginaAtual = dados.data && Array.isArray(dados.data.objects) ? dados.data.objects : [];
      const meta = dados.data && dados.data.meta ? dados.data.meta : {};

      paginaAtual.forEach(function (pais) {
        todosOsPaises.push(pais);
      });

      existemMaisPaginas = Boolean(meta.more) && paginaAtual.length > 0;
      offset += paginaAtual.length;
    }

    paises = todosOsPaises;
    console.log("Países recebidos da API:", paises);
    aplicarFiltros();
  } catch (erro) {
    console.error("Erro ao carregar países:", erro);
    mensagemStatus.classList.add("mensagem-status--erro");
    mensagemStatus.textContent = "Não foi possível carregar os países. Confira a chave da API e as origens liberadas no painel da REST Countries.";
  }
}

function criarBandeira(pais) {
  const codigo = obterCodigoBandeira(pais);

  if (!codigo) {
    return "<div class=\"bandeira-sem-imagem\">🏳️</div>";
  }

  const urlBandeira = "https://flags.restcountries.com/v5/w320/" + codigo + ".png";
  return "<img src=\"" + urlBandeira + "\" alt=\"Bandeira de " + escaparHTML(obterNome(pais)) + "\">";
}

function exibirPaises(lista) {
  listaPaises.innerHTML = "";

  if (lista.length === 0) {
    listaPaises.innerHTML = "<p>Nenhum país foi encontrado com esses filtros.</p>";
    return;
  }

  const fragmento = document.createDocumentFragment();

  lista.forEach(function (pais) {
    const cartao = document.createElement("button");
    const nome = obterNome(pais);
    const capital = formatarLista(pais.capitals);
    const populacao = Number(pais.population) || 0;

    cartao.type = "button";
    cartao.className = "pais";
    cartao.innerHTML =
      criarBandeira(pais) +
      "<div class=\"pais__conteudo\">" +
        "<h2>" + escaparHTML(nome) + "</h2>" +
        "<p><strong>Capital:</strong> " + escaparHTML(capital) + "</p>" +
        "<p><strong>População:</strong> " + formatarNumero(populacao) + "</p>" +
        "<p><strong>Região:</strong> " + escaparHTML(pais.region || "Não informada") + "</p>" +
      "</div>";

    cartao.addEventListener("click", function () {
      detalhesPais(obterCodigo(pais));
    });

    fragmento.appendChild(cartao);
  });

  listaPaises.appendChild(fragmento);
}

function aplicarFiltros() {
  const termoBusca = campoBusca.value.trim().toLocaleLowerCase("pt-BR");
  const regiaoEscolhida = filtroRegiao.value;

  // filter() mantém somente os países que passam pelos dois filtros.
  paisesFiltrados = paises.filter(function (pais) {
    const nome = obterNome(pais).toLocaleLowerCase("pt-BR");
    const correspondeAoNome = nome.includes(termoBusca);
    const correspondeARegiao = regiaoEscolhida === "" || pais.region === regiaoEscolhida;
    return correspondeAoNome && correspondeARegiao;
  });

  aplicarOrdenacao();
  exibirPaises(paisesFiltrados);
  calcularEstatisticas(paisesFiltrados);
  mensagemStatus.classList.remove("mensagem-status--erro");
  mensagemStatus.textContent = paisesFiltrados.length + " país(es) encontrado(s).";
}

function aplicarOrdenacao() {
  paisesFiltrados.sort(function (paisA, paisB) {
    if (ordenacaoAtual === "populacao") {
      return (Number(paisB.population) || 0) - (Number(paisA.population) || 0);
    }

    if (ordenacaoAtual === "area") {
      return obterArea(paisB) - obterArea(paisA);
    }

    return obterNome(paisA).localeCompare(obterNome(paisB), "pt-BR");
  });
}

function atualizarBotoesDeOrdenacao() {
  botoesOrdenacao.forEach(function (botao) {
    botao.classList.remove("botao-ativo");
  });

  const idDoBotao = "ordenar" + ordenacaoAtual.charAt(0).toUpperCase() + ordenacaoAtual.slice(1);
  const botaoAtivo = document.querySelector("#" + idDoBotao);

  if (botaoAtivo) {
    botaoAtivo.classList.add("botao-ativo");
  }
}

function ordenarPorNome() {
  ordenacaoAtual = "nome";
  atualizarBotoesDeOrdenacao();
  aplicarFiltros();
}

function ordenarPorPopulacao() {
  ordenacaoAtual = "populacao";
  atualizarBotoesDeOrdenacao();
  aplicarFiltros();
}

function ordenarPorArea() {
  ordenacaoAtual = "area";
  atualizarBotoesDeOrdenacao();
  aplicarFiltros();
}

// reduce() soma os valores dos países que estão aparecendo na tela.
function calcularEstatisticas(lista) {
  const totais = lista.reduce(function (acumulador, pais) {
    acumulador.populacao += Number(pais.population) || 0;
    acumulador.area += obterArea(pais);
    return acumulador;
  }, { populacao: 0, area: 0 });

  const quantidade = lista.length;
  const mediaPopulacao = quantidade > 0 ? totais.populacao / quantidade : 0;
  const mediaArea = quantidade > 0 ? totais.area / quantidade : 0;

  estatisticas.innerHTML =
    "<article class=\"estatistica\"><span>População total</span><strong>" + formatarNumero(totais.populacao) + "</strong></article>" +
    "<article class=\"estatistica\"><span>Área total</span><strong>" + formatarArea(totais.area) + "</strong></article>" +
    "<article class=\"estatistica\"><span>Média de população</span><strong>" + formatarNumero(mediaPopulacao) + "</strong></article>" +
    "<article class=\"estatistica\"><span>Média de área</span><strong>" + formatarArea(mediaArea) + "</strong></article>";
}

// find() procura no array principal o país que teve o cartão clicado.
function detalhesPais(codigo) {
  const pais = paises.find(function (item) {
    return obterCodigo(item) === codigo;
  });

  if (!pais) {
    return;
  }

  conteudoDetalhes.innerHTML =
    "<h2>" + escaparHTML(obterNome(pais)) + "</h2>" +
    "<p><strong>Capital:</strong> " + escaparHTML(formatarLista(pais.capitals)) + "</p>" +
    "<p><strong>Sub-região:</strong> " + escaparHTML(pais.subregion || "Não informada") + "</p>" +
    "<p><strong>Moedas:</strong> " + escaparHTML(formatarMoedas(pais.currencies)) + "</p>" +
    "<p><strong>Idiomas:</strong> " + escaparHTML(formatarLista(pais.languages)) + "</p>" +
    "<p><strong>Fronteiras:</strong> " + escaparHTML(formatarLista(pais.borders)) + "</p>" +
    "<p><strong>Área:</strong> " + formatarArea(obterArea(pais)) + "</p>";

  modalDetalhes.showModal();
}

campoBusca.addEventListener("input", aplicarFiltros);
filtroRegiao.addEventListener("change", aplicarFiltros);
document.querySelector("#ordenarNome").addEventListener("click", ordenarPorNome);
document.querySelector("#ordenarPopulacao").addEventListener("click", ordenarPorPopulacao);
document.querySelector("#ordenarArea").addEventListener("click", ordenarPorArea);
document.querySelector("#fecharDetalhes").addEventListener("click", function () {
  modalDetalhes.close();
});

modalDetalhes.addEventListener("click", function (evento) {
  if (evento.target === modalDetalhes) {
    modalDetalhes.close();
  }
});

carregarPaises();
