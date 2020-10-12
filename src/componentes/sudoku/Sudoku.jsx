import React from "react";
import solucoes from "./SolucoesSudoku";
import { aleatorioInteiro, verificacaoGeral } from "./helpers";
import LargeSquare from "./LargeSquare";

class Sudoku extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: solucoes[aleatorioInteiro(1, solucoes.length)],
    };
    this.tipos = this.state.squares.slice();
  }

  onChange(value, j, i) {
    const squares = this.state.squares.slice();
    const linha = squares[j].slice();
    linha[i] = parseInt(value);
    squares[j] = linha;
    this.setState({ squares: squares });
  }

  render() {
    const mensagem = verificacaoGeral(this.state.squares)
      ? "Você venceu essa!!"
      : "";
    const lista = [0, 1, 2];
    return (
      <>
        <h3>{mensagem}</h3>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {lista.map((item, i) => {
            return (
              <div className="board-row" key={i} style={{ display: "flex" }}>
                {lista.map((itemInterno, iInterno) => {
                  return (
                    <LargeSquare
                      key={iInterno}
                      j={3 * i + iInterno}
                      onChange={(value, j, i) => this.onChange(value, j, i)}
                      squares={this.state.squares}
                      tipos={this.tipos}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Sudoku;
