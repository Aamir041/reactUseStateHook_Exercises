import { useState } from "react";

export function SwitchTabs() {
  const [feild, setFeild] = useState();
  const changeFeild = (arg) => {
    if (arg == "Home") {
      setFeild(
        <p>
          This is <span style={{ color: "Blue" }}>Home</span>{" "}
        </p>
      );
    } else if (arg == "About") {
      setFeild(
        <p>
          This is <span style={{ color: "Red" }}>About</span>
        </p>
      );
    } else if (arg == "Profile") {
      setFeild(
        <p>
          This is <span style={{ color: "Green" }}>Profile</span>{" "}
        </p>
      );
    }
  };
  return (
    <div>
      <h1>Ex8: Switch Tabs</h1>
      <div className="switchTabs">
        <a onClick={() => changeFeild("Home")}>Home</a>
        <a onClick={() => changeFeild("About")}>About</a>
        <a onClick={() => changeFeild("Profile")}>Profile</a>
      </div>
      <div>{feild}</div>
    </div>
  );
}
