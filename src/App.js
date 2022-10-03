import "./styles.css";

import { CountingCharacters } from "./CountingCharacters";
import { useState } from "react";
import { PasswordMatching } from "./PasswordMatching";
import { Alphanumeric } from "./Alphanumeric";
import { DisableSubmit } from "./DisableSubmit";
import { ShowPassword } from "./ShowPassword";
import { MiniFigma } from "./MiniFigma";
import { Kart } from "./Kart";
import { SwitchTabs } from "./SwitchTabs";
import { Toast } from "./Toast";
import { Todo } from "./Todo";
import { DarkMode } from "./DarkMode";
import { LikedList } from "./LikedList";

export default function App() {
  // for ex1
  const [countChara, setCountChara] = useState(0);

  // for ex2
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  // for ex3
  const [alPass, setAlPass] = useState("");

  // for ex4
  const [ex4Pass, ex4SetPass] = useState("");
  const [ex4cPass, ex4SetcPass] = useState("");

  // for ex5
  const [inputType, setType] = useState("password");
  const [changeText, setText] = useState("Show Password");

  // for ex6
  const [resize, setOperation] = useState(8);

  return (
    <div className="App">
      <CountingCharacters
        countChara={countChara}
        setCountChara={setCountChara}
      />
      <div className="separator"></div>
      <PasswordMatching
        pass={pass}
        setPass={setPass}
        confirmPass={confirmPass}
        setConfirmPass={setConfirmPass}
      />
      <div className="separator"></div>
      <Alphanumeric alPass={alPass} setAlPass={setAlPass} />
      <div className="separator"></div>
      <DisableSubmit
        pass={ex4Pass}
        setPass={ex4SetPass}
        cPass={ex4cPass}
        setCpass={ex4SetcPass}
      />
      <div className="separator"></div>
      <ShowPassword
        inputType={inputType}
        setType={setType}
        changeText={changeText}
        setText={setText}
      />
      <div className="separator"></div>
      <MiniFigma resize={resize} setOperation={setOperation} />
      <div className="separator"></div>
      <Kart />
      <div className="separator"></div>
      <SwitchTabs />
      <div className="separator"></div>
      <Toast />
      <div className="separator"></div>
      <Todo />
      <div className="separator"></div>
      <DarkMode />
      <div className="separator"></div>
      <LikedList />
      <div className="separator"></div>
    </div>
  );
}
