import { useState } from "react";
import React from "react";
import TxtFld from "./textfield";
import TableOutput from "./tableForm";

const PizzaForm = () => {
  const [developerNm, setDeveloperNm] = useState("");
  const [developerUnm, setUsrNm] = useState("");
  const [developerEmail, setEmail] = useState("");
  //   const [developerPass, setPass] = useState("");
  //   const [developerAdd, setAddres] = useState("");
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
          <TxtFld
            placeholder="Developer Name"
            onChange={(params) => setDeveloperNm(params)}
            value={developerNm}
          />
          <TxtFld
            placeholder="User Name"
            onChange={(params) => setUsrNm(params)}
            value={developerUnm}
          />
          <br></br>
          <TxtFld
            placeholder="Email"
            onChange={(params) => setEmail(params)}
            value={developerEmail}
          />
          <t />
          <t />
          <button onClick={() => handleClick()}>Submit</button>
        </div>
      ) : (
        <TableOutput
          DeveloperName1={developerNm}
          USername={developerUnm}
          Pass={developerEmail}
        />
      )}
    </>
  );
};

export default PizzaForm;
