import { useState } from "react";
export function Toast() {
  const [putToast, setToast] = useState("");

  const hideToast = () => setToast("");

  const dispToast = (arg) => {
    if (arg == "C1") {
      setToast(
        <div className="dispToast" id="cat1">
          <button onClick={hideToast}>X</button>
          <h1>This is Cat 1</h1>
        </div>
      );
    } else if (arg == "C2") {
      setToast(
        <div className="dispToast" id="cat2">
          <button onClick={hideToast}>X</button>
          <h1>This is Cat 2</h1>
        </div>
      );
    } else if (arg == "C3") {
      setToast(
        <div className="dispToast" id="cat3">
          <button onClick={hideToast}>X</button>
          <h1>This is Cat 3</h1>
        </div>
      );
    }
  };

  return (
    <div>
      <h1>Ex9: Toast</h1>
      <button onClick={() => dispToast("C1")}>Cat - 1 </button>
      <button onClick={() => dispToast("C2")}>Cat - 2 </button>
      <button onClick={() => dispToast("C3")}>Cat - 3 </button>
      <div>
        {putToast == "" ? (
          <div>
            <h1>Click Above</h1>
          </div>
        ) : (
          putToast
        )}
      </div>
    </div>
  );
}
