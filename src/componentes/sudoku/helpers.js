function geracaoLinhas(lista) {
  const [q1, q2, q3, q4, q5, q6, q7, q8, q9] = lista;
  const [hor1, hor2, hor3] = [
    [...q1.slice(0, 3), ...q2.slice(0, 3), ...q3.slice(0, 3)],
    [...q1.slice(3, 6), ...q2.slice(3, 6), ...q3.slice(3, 6)],
    [...q1.slice(6, 9), ...q2.slice(6, 9), ...q3.slice(6, 9)],
  ];
  const [hor4, hor5, hor6] = [
    [...q4.slice(0, 3), ...q5.slice(0, 3), ...q6.slice(0, 3)],
    [...q4.slice(3, 6), ...q5.slice(3, 6), ...q6.slice(3, 6)],
    [...q4.slice(6, 9), ...q5.slice(6, 9), ...q6.slice(6, 9)],
  ];
  const [hor7, hor8, hor9] = [
    [...q7.slice(0, 3), ...q8.slice(0, 3), ...q9.slice(0, 3)],
    [...q7.slice(3, 6), ...q8.slice(3, 6), ...q9.slice(3, 6)],
    [...q7.slice(6, 9), ...q8.slice(6, 9), ...q9.slice(6, 9)],
  ];

  // inversao para gerar verticais
  const listaTransposta = lista.map((item) => {
    return [
      item[0],
      item[3],
      item[6],
      item[1],
      item[4],
      item[7],
      item[2],
      item[5],
      item[8],
    ];
  });

  const [q1v, q2v, q3v, q4v, q5v, q6v, q7v, q8v, q9v] = listaTransposta;

  const [ver1, ver2, ver3] = [
    [...q1v.slice(0, 3), ...q4v.slice(0, 3), ...q7v.slice(0, 3)],
    [...q1v.slice(3, 6), ...q4v.slice(3, 6), ...q7v.slice(3, 6)],
    [...q1v.slice(6, 9), ...q4v.slice(6, 9), ...q7v.slice(6, 9)],
  ];
  const [ver4, ver5, ver6] = [
    [...q2v.slice(0, 3), ...q5v.slice(0, 3), ...q8v.slice(0, 3)],
    [...q2v.slice(3, 6), ...q5v.slice(3, 6), ...q8v.slice(3, 6)],
    [...q2v.slice(6, 9), ...q5v.slice(6, 9), ...q8v.slice(6, 9)],
  ];
  const [ver7, ver8, ver9] = [
    [...q3v.slice(0, 3), ...q6v.slice(0, 3), ...q9v.slice(0, 3)],
    [...q3v.slice(3, 6), ...q6v.slice(3, 6), ...q9v.slice(3, 6)],
    [...q3v.slice(6, 9), ...q6v.slice(6, 9), ...q9v.slice(6, 9)],
  ];

  return [
    hor1,
    hor2,
    hor3,
    hor4,
    hor5,
    hor6,
    hor7,
    hor8,
    hor9,
    ver1,
    ver2,
    ver3,
    ver4,
    ver5,
    ver6,
    ver7,
    ver8,
    ver9,
  ];
}

function verificacao(lista) {
  const quadradosInternos = lista.map((listaInterna) => {
    if (
      listaInterna.includes(0) |
      (listaInterna.reduce(function (acumulador, valorAtual) {
        return acumulador + valorAtual;
      }) !==
        45)
    )
      return false;
    Array(9).forEach((num) => {
      let item = listaInterna.pop();
      if (listaInterna.includes(item)) return false;
    });
    return true;
  });

  const linhas = geracaoLinhas(lista).map((listaInterna) => {
    if (
      listaInterna.includes(0) |
      (listaInterna.reduce(function (acumulador, valorAtual) {
        return acumulador + valorAtual;
      }) !==
        45)
    )
      return false;
    Array(9).forEach((num) => {
      let item = listaInterna.pop();
      if (listaInterna.includes(item)) return false;
    });
    return true;
  });

  return [...quadradosInternos, ...linhas];
}

function listaPosicoes() {
  const listaPosicoes = [];
  let item = [];
  //quadrados:
  for (let j = 0; j < 9; j++) {
    for (let i = 0; i < 9; i++) {
      item.push([j, i]);
    }
    listaPosicoes.push(item);
    item = [];
  }
  return [...listaPosicoes, ...geracaoLinhas(listaPosicoes)];
}

function filtroConjuntosCompletos(lista) {
  const listaVerificada = verificacao(lista);
  let listaConjuntosCompletos = listaPosicoes().filter(
    (item, i) => listaVerificada[i]
  );
  listaConjuntosCompletos.map((element) => {
    return element.toString();
  });
  return listaConjuntosCompletos;
}

function verificacaoGeral(lista) {
  const novaLista = verificacao(lista).filter((item) => !item);
  if (novaLista.length === 0) return true;
  return false;
}

function aleatorioInteiro(min, max) {
  return parseInt(Math.random() * (max + 1 - min) + min);
}

export { aleatorioInteiro, filtroConjuntosCompletos, verificacaoGeral };
