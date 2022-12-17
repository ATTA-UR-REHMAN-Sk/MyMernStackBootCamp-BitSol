import React from "react";
import { useState } from "react";

const GuestComponent = () => {
//var inputValue = "";
const [email, setEmail] = useState("");
const [Name, setName] = useState("");
const [Age, setAge] = useState("");

const handleClick = () => {
 alert(Name +"   "+ email +"   "+ Age);
};



const hanldeChange = (params,val) => {
    if(val===1)setName(params.target.value);
    if(val===2)setEmail(params.target.value);
    if(val===3)setAge(params.target.value);
};
// const hanldeName = (params) => {
//     setName(params.target.value);
// };
// const hanldeAge = (params) => {
//     setAge(params.target.value);
// };

    return (
        <div>
          <h1>User Form</h1>
          <input placeholder="Name" onChange={(event ,val) => hanldeChange(event,1)}/>
          <input placeholder="email" onChange={(event ,val) => hanldeChange(event,2)}/>
          <input placeholder="Age" onChange={(event ,val) => hanldeChange(event,3)}/>
          <button onClick={() => handleClick()}>Click Me</button>  
        </div>
    );
};

export default GuestComponent