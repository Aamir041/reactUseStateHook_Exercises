import { useState } from "react";

export function DarkMode() {
  const [ogColor, setColor] = useState("whiteBg");
  const [changeTheme, setTheme] = useState("Dark Mode");

  const settingBg = () => {
    ogColor === "whiteBg" ? setColor("darkBg") : setColor("whiteBg");
    changeTheme === "Dark Mode"
      ? setTheme("White Theme")
      : setTheme("Dark Mode");
  };

  return (
    <div className="DarkMode">
      <h1>Ex11: Dark Mode</h1>
      <div className={ogColor}>
        <h4>Hello I am Aamir</h4>
      </div>
      <button onClick={settingBg}>{changeTheme}</button>
    </div>
  );
}
