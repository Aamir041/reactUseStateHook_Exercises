export function ShowPassword(props) {
  let btnText = (def = "Show Password") => {
    return def;
  };

  const changeType = () => {
    props.inputType === "password"
      ? (props.setType("text"), props.setText("Hide Password"))
      : (props.setType("password"), props.setText("Show Password"));
  };

  return (
    <div className="Question showPass">
      <h1>Ex5: Show Password</h1>
      <div className="inputs">
        <label htmlFor=""> Enter Password</label>
        <input type={props.inputType} />
        <button onClick={changeType}>{props.changeText}</button>
      </div>
    </div>
  );
}
