export function DisableSubmit(props) {
  const setPwd = (pass) => {
    props.setPass(pass.target.value);
  };

  const setCpwd = (cPass) => {
    props.setCpass(cPass.target.value);
  };

  const printPass = () => {
    console.log(props.pass);
  };

  const setMatch = () => {
    if (props.pass === "") {
      return <div></div>;
    }
    if (props.cPass === "") {
      return <div></div>;
    }
    if (props.pass === props.cPass) {
      return (
        <button onClick={printPass} type="submit">
          Submit
        </button>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <div className="Question disableSubmit">
      <h1>Ex4: Disable Submit</h1>

      <div>
        <div className="inputs">
          <label htmlFor="pwd">Enter Password: </label>
          <input onChange={setPwd} type="password" />
        </div>

        <div className="inputs">
          <label htmlFor="pwd">Confirm Password: </label>
          <input onChange={setCpwd} type="password" />
        </div>
      </div>

      {setMatch()}
    </div>
  );
}
