export function MiniFigma(props) {
  const changeSize = (op) => {
    op === "+"
      ? props.setOperation(props.resize + 8)
      : props.setOperation(props.resize - 8);
  };
  return (
    <div>
      <h1>Ex6: Mini Figma</h1>
      <button onClick={() => changeSize("+")}>+</button>
      <button onClick={() => changeSize("-")}>-</button>
      <p style={{ fontSize: props.resize + "px" }}>Hello World</p>
    </div>
  );
}
