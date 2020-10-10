import React from "react";
import solucoes from './SolucoesSudoku'

function Square(props) {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <select
      style={{ width: "40px", height: "40px", background: props.color }}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    >
      <option value={0}> </option>
      {nums.map((num) => {
        return <option key={num} value={num}>{num}</option>;
      })}
    </select>
  );
}

class Sudoku extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: solucoes[aleatorioInteiro(1,20)],
    };
  }

  componentDidMount(){
    const setupInicial = 

  }

  renderSquare(j, i) {
    let color = "#ffffcc";
    filtroConjuntosCompletos(this.state.squares).forEach(lista => {
      lista.forEach(par => {
        if (par[0] === j & par[1] === i) {
          color = "#66cc88"
      }})
    })
    return (
      <Square
        key={[j,i]}
        value={this.state.squares[j][i]}
        onChange={(value) => this.onChange(value,j,i)}
        color={color}
      />
    );
  }

  onChange(value, j, i) {
    const squares = this.state.squares.slice();
    const linha = squares[j].slice()
    linha[i] = parseInt(value);
    squares[j] = linha;
    this.setState({squares: squares});
    console.log(filtroConjuntosCompletos(squares));
  }

  renderLargeSquare(j) {
    const lista = [0, 1, 2];
    return (
      <div style={{ display: "inline-block", border: "thin solid black" }}>
        {lista.map((item, i) => {
          return (
            <div className="board-row" key={i}>
              {lista.map((itemInterno, iInterno) => {
                return this.renderSquare(j, 3 * i + iInterno);
              })}
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    const mensagem = verificacaoGeral(this.state.squares) ? "Você venceu essa!!" : "";
    const lista = [0, 1, 2];
    return (
      <>
      <h3>{mensagem}</h3>
      <div>
        {lista.map((item, i) => {
          return (
            <div className="board-row" key={i}>
              {lista.map((itemInterno, iInterno) => {
                return <span key={iInterno}>{this.renderLargeSquare(3 * i + iInterno)}</span>;
              })}
            </div>
          );
        })}
      </div>
      </>
    );
  }
}


function geracaoLinhas(lista){
  const [q1, q2, q3, q4, q5, q6, q7, q8, q9] = lista;
  const [hor1, hor2, hor3] = [[...q1.slice(0,3), ...q2.slice(0,3), ...q3.slice(0,3)], [...q1.slice(3,6), ...q2.slice(3,6), ...q3.slice(3,6)], [...q1.slice(6,9), ...q2.slice(6,9), ...q3.slice(6,9)]];
  const [hor4, hor5, hor6] = [[...q4.slice(0,3), ...q5.slice(0,3), ...q6.slice(0,3)], [...q4.slice(3,6), ...q5.slice(3,6), ...q6.slice(3,6)], [...q4.slice(6,9), ...q5.slice(6,9), ...q6.slice(6,9)]];
  const [hor7, hor8, hor9] = [[...q7.slice(0,3), ...q8.slice(0,3), ...q9.slice(0,3)], [...q7.slice(3,6), ...q8.slice(3,6), ...q9.slice(3,6)], [...q7.slice(6,9), ...q8.slice(6,9), ...q9.slice(6,9)]];

  // inversao para gerar verticais
  const listaTransposta = lista.map(item => {
    return [item[0], item[3], item[6], item[1], item[4], item[7], item[2], item[5], item[8]]
  })
  
  const [q1v, q2v, q3v, q4v, q5v, q6v, q7v, q8v, q9v] = listaTransposta;

  const [ver1, ver2, ver3] = [[...q1v.slice(0,3), ...q4v.slice(0,3), ...q7v.slice(0,3)], [...q1v.slice(3,6), ...q4v.slice(3,6), ...q7v.slice(3,6)], [...q1v.slice(6,9), ...q4v.slice(6,9), ...q7v.slice(6,9)]];
  const [ver4, ver5, ver6] = [[...q2v.slice(0,3), ...q5v.slice(0,3), ...q8v.slice(0,3)], [...q2v.slice(3,6), ...q5v.slice(3,6), ...q8v.slice(3,6)], [...q2v.slice(6,9), ...q5v.slice(6,9), ...q8v.slice(6,9)]]; 
  const [ver7, ver8, ver9] = [[...q3v.slice(0,3), ...q6v.slice(0,3), ...q9v.slice(0,3)], [...q3v.slice(3,6), ...q6v.slice(3,6), ...q9v.slice(3,6)], [...q3v.slice(6,9), ...q6v.slice(6,9), ...q9v.slice(6,9)]];

  return [hor1, hor2, hor3, hor4, hor5, hor6, hor7, hor8, hor9, ver1, ver2, ver3, ver4, ver5, ver6, ver7, ver8, ver9]
}

function verificacao(lista){
  const quadradosInternos =  lista.map(listaInterna => {
    if (listaInterna.includes(0) | listaInterna.reduce(function(acumulador, valorAtual){return acumulador+valorAtual}) !== 45)
        return false
    Array(9).forEach(num => {
      let item = listaInterna.pop()
      if(listaInterna.includes(item))
        return false
    }) 
    return true
  })

  const linhas = geracaoLinhas(lista).map(listaInterna => {
    if (listaInterna.includes(0) | listaInterna.reduce(function(acumulador, valorAtual){return acumulador+valorAtual}) !== 45)
        return false
    Array(9).forEach(num => {
      let item = listaInterna.pop()
      if(listaInterna.includes(item))
        return false
    }) 
    return true
  })
  
  return [...quadradosInternos, ...linhas]
}



function listaPosicoes() {
  const listaPosicoes = []
  let item = []
  //quadrados:
  for(let j = 0; j < 9; j++){
    for(let i = 0; i < 9; i++){
      item.push([j,i])
    }
    listaPosicoes.push(item);
    item = []
  }
  return [...listaPosicoes, ...geracaoLinhas(listaPosicoes)]
}

function filtroConjuntosCompletos(lista){
  const listaVerificada = verificacao(lista)
  let listaConjuntosCompletos = listaPosicoes().filter((item, i) => listaVerificada[i])
  listaConjuntosCompletos.map(element => {
    return element.toString()
  })
  return listaConjuntosCompletos
}

function verificacaoGeral(lista){
  const novaLista = verificacao(lista).filter(item => !item);
  if(novaLista.length === 0) return true
  return false
}

function aleatorioInteiro(min,max) {
  return parseInt(Math.random()*((max+1)-min)+min)
}

export default Sudoku;
