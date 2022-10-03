export function Alphanumeric(props) {
  const setPass = (pass) => {
    props.setAlPass(pass.target.value);
  };
  const validatePass = () => {
    const text = /[a-zA-Z]/;
    const num = /[0-9]/;
    const pwd = props.alPass;
    if (pwd === "") {
      return <div></div>;
    } else {
      if (text.test(pwd) && num.test(pwd)) {
        return <div className="correctPass">Password Alphanumeric</div>;
      } else {
        return <div className="inCorrectPass">Password Not Alphanumeric</div>;
      }
    }
  };
  return (
    <div className="alphaNumeric Question">
      <h1>Ex3: Alphanumeric Password</h1>
      <div className="inputs">
        <label htmlFor="">Enter Password</label>
        <input onChange={setPass} type="password" />
      </div>
      {validatePass()}
    </div>
  );
}
