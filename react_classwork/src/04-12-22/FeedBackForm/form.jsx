//import React from "react";
import { useState } from "react";
import ResultOutput from "./formResult";
import TextField from "./formtext";

const Form = () => {
  const [developerNm, setDeveloperNm] = useState("");
  const [developerUnm, setUsrNm] = useState("");
  const [developerEmail, setEmail] = useState("");
  const [developerPass, setPass] = useState("");
  const [developerAdd, setAddres] = useState("");
  const [Btn, setBtn] = useState(false);

  const handleClick = () => {
    setBtn(true);
  };

  return (
    <>
      {Btn === false ? (
        <div>
          <br />
          <br />
          <TextField
            placeholder="Developer Name"
            onChange={(params) => setDeveloperNm(params)}
            value={developerNm}
          />
          <br />
          <br />
          <TextField
            placeholder="User Name"
            onChange={(params) => setUsrNm(params)}
            value={developerUnm}
          />
          <br />
          <br />
          <TextField
            placeholder="Email"
            onChange={(params) => setEmail(params)}
            value={developerEmail}
          />
          <br />
          <br />
          <TextField
            placeholder="Password"
            onChange={(params) => setPass(params)}
            value={developerPass}
          />
          <br />
          <br />
          <TextField
            placeholder="Address"
            onChange={(params) => setAddres(params)}
            value={developerAdd}
          />
          <br />
          <br />
          <lable>Satisfiction :</lable>
          <input type="radio" name="radio" id="rbt1" />
          <label for="rbt1"> Yes</label>
          <input type="radio" name="radio" id="rbt2" />
          <label for="rbt2"> No</label>
          <br />
          <br />
          <button onClick={() => handleClick()}>Submit</button>
        </div>
      ) : (
        <ResultOutput
          DeveloperName1={developerNm}
          USername={developerUnm}
          Pass={developerPass}
        />
      )}
    </>
  );
};

export default Form;
