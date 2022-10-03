export function CountingCharacters(props) {
  const countingChara = (chara) => {
    props.setCountChara(chara.target.value.length);
  };

  return (
    <div className="Question countingChara">
      <h1>Ex1: Counting Characters</h1>
      <label className="title" htmlFor="ta">
        Enter Text Below
      </label>

      <textarea
        name="ta"
        id="textArea"
        cols="30"
        rows="10"
        onChange={countingChara}
      ></textarea>

      <div className="counts">Character Count Is: {props.countChara}</div>
    </div>
  );
}
