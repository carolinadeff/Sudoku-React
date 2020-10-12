import React from "react";
import { filtroConjuntosCompletos } from "./helpers";
import Square from "./Square";

class LargeSquare extends React.Component {
  renderSquare(j, i) {
    let color = "#ffffcc";

    filtroConjuntosCompletos(this.props.squares).forEach((lista) => {
      lista.forEach((par) => {
        if ((par[0] === j) & (par[1] === i)) {
          color = "#66cc88";
        }
      });
    });

    return (
      <Square
        key={[j, i]}
        value={this.props.squares[j][i]}
        onChange={(value) => this.props.onChange(value, j, i)}
        color={color}
        tipo={this.props.tipos[j][i]}
      />
    );
  }

  render() {
    const lista = [0, 1, 2];
    return (
      <div style={{ border: "thin solid black" }}>
        {lista.map((item, i) => {
          return (
            <div style={{ display: "flex" }} className="board-row" key={i}>
              {lista.map((itemInterno, iInterno) => {
                return this.renderSquare(this.props.j, 3 * i + iInterno);
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default LargeSquare;
