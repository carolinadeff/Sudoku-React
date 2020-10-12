import React from "react";

function SquareMutavel(props) {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <select
      style={{ width: "40px", height: "40px", background: props.color }}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    >
      <option value={0}> </option>
      {nums.map((num) => {
        return (
          <option key={num} value={num}>
            {num}
          </option>
        );
      })}
    </select>
  );
}

function SquareFixo(props) {
  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        background: props.color,
        color: "#5c3d3d",
        display: "inline-block",
        boxSizing: "border-box",
        border: "black thin solid",
        textAlign: "center",
      }}
    >
      <p>{props.value}</p>
    </div>
  );
}

function Square(props) {
  if (props.tipo !== 0) {
    return <SquareFixo value={props.value} color={props.color} />;
  } else {
    return (
      <SquareMutavel
        value={props.value}
        onChange={(value) => props.onChange(value)}
        color={props.color}
      />
    );
  }
}

export default Square;
