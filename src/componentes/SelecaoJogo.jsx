import React, { Component } from "react";
import JogoDaVelha from "./jogoDaVelha/JogoDaVelha";
import Sudoku from "./sudoku/Sudoku";

function ListaJogos(props) {
  return (
    <select onChange={(event) => props.onSelect(event.target.value)}>
      <option value="">Selecione um jogo</option>
      <option value="sudoku">Sudoku</option>
      <option value="velha">Jogo da Velha</option>
    </select>
  );
}

class SelecaoJogo extends Component {
  constructor(props) {
    super(props);
    this.state = { modalidade: null };
  }

  handleSelect(value) {
    this.setState({ modalidade: value });
  }

  render() {
    let jogo = <div>Selecione o que você quer jogar</div>;
    if (this.state.modalidade === "sudoku") {
      jogo = (
        <div>
          <h4>vamos jogar sudoku</h4>
          <Sudoku />
        </div>
      );
    } else if (this.state.modalidade === "velha") {
      jogo = (
        <div>
          <h4>vamos jogar jogo da velha</h4>
          <JogoDaVelha />
        </div>
      );
    }

    return (
      <>
        <ListaJogos onSelect={(value) => this.handleSelect(value)} />
        {jogo}
      </>
    );
  }
}

export default SelecaoJogo;
