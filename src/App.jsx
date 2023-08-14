import "./styles.css";
import { useState } from "react";
import { strengthCalc } from "./utils/strengthCalc";
import { CheckBox } from "./components/CheckBox";
import { Button } from "./components/Button";
import { generatePassword } from "./utils/generatePassword";
export default function App() {
  const [password, setPassword] = useState("h4%Zjw");
  const [passwordLength, setPasswordLength] = useState(6);
  const [copyPass, setCopyPass] = useState(false);
  const [error, setError] = useState("");

  const [options, setOptions] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Special characters", state: false }
  ]);

  const handleOptionClick = (index) => {
    const updatedData = options?.map((obj, i) =>
      i === index ? { ...obj, state: !obj.state } : { ...obj }
    );
    setOptions([...updatedData]);
  };
  return (
    <div className="App">
      <span className="span">
        <p className="passText">{password}</p>
        <Button
          text={copyPass ? "Copied" : "Copy"}
          cb={() => {
            navigator.clipboard.writeText(password);
            setCopyPass(true);
            setTimeout(() => setCopyPass(false), 1500);
          }}
          className="copyBtn"
        />
      </span>
      <span className="span">
        <p>Strength:</p>
        <p>{strengthCalc(password?.length)}</p>
      </span>
      <p className="borderTop"> Config New password:</p>
      <section className="checkBoxes">
        {options?.map((option, index) => (
          <CheckBox
            key={option?.title}
            text={option?.title}
            cb={() => handleOptionClick(index)}
            checked={option?.state}
          />
        ))}
      </section>
      <input
        className="range"
        value={passwordLength}
        onChange={(e) => setPasswordLength(e.target.value)}
        type="range"
        min={4}
        max={20}
        step={1}
      />
      <span className="span">
        <p>Character length</p>
        <p>{passwordLength}</p>
      </span>
      <small style={{ visibility: !error ? "hidden" : "" }} className="error">
        {error}
      </small>
      <Button
        text="GENERATE password"
        cb={() => {
          const generatedPassword = generatePassword(passwordLength, options);
          if (generatedPassword.length > 0) {
            setPassword(generatedPassword);
          } else {
            setError("Please select at-least 1 filter");
            setTimeout(() => {
              setError("");
            }, 2000);
          }
        }}
        className="newPassBtn"
      ></Button>
    </div>
  );
}
