export function PasswordMatching(props) {
  const setPwd = (pass) => {
    props.setPass(pass.target.value);
  };

  const setCpwd = (cPass) => {
    props.setConfirmPass(cPass.target.value);
  };

  const setMatch = () => {
    if (props.pass === "") {
      return <div></div>;
    }
    if (props.confirmPass === "") {
      return <div></div>;
    }
    if (props.pass === props.confirmPass) {
      return <div className="correctPass">Password Matched</div>;
    } else {
      return <div className="inCorrectPass">Password Doesn't Match</div>;
    }
  };

  return (
    <div className="passWordMatching Question">
      <h1>Ex2: Password Matching</h1>

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
