import React from "react";

function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
      style={{ background: props.color }}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    let color = "#ffffcc";
    if (
      this.props.winningPositions &&
      this.props.winningPositions.includes(i)
    ) {
      color = "#f47171";
    }
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        color={color}
      />
    );
  }

  render() {
    const lista = [0, 1, 2];
    return (
      <div>
        {lista.map((item, i) => {
          return (
            <div className="board-row" key={i}>
              {lista.map((itemInterno, iInterno) => {
                return this.renderSquare(3 * i + iInterno);
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Board;
