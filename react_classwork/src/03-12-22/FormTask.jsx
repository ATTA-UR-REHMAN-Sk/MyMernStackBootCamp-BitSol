import React from "react";

// const FormTask = () => {
//   useEffect(() => {
//     setTimeout(() => {
//       MyForm();
//     }, 2000);
//   }, []);

//   function MyForm() {
//     const [name, setName] = useState("");

//     const handleSubmit = (event) => {
//       event.preventDefault();
//       alert(`The name you entered was: ${name}`);
//     };
//     return (
//       <div>
//         (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Enter your name:
//             <input
//               type="text"
//               //placeholder="EnterName"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </label>
//           <input type="submit" />
//         </form>
//         );
//       </div>
//     );
//   }
// };

// export default FormTask;

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert("A name was submitted: " + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <br />
//         <br />
//         <label>
//           <input
//             type="text"
//             placeholder="DeveloperName"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <br></br>
//         <label>
//           <input
//             type="text"
//             placeholder="UserName"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <br></br>
//         <label>
//           <input
//             type="text"
//             placeholder="EmailName"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <br></br>
//         <label>
//           <input
//             type="text"
//             placeholder="Password"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <br></br>
//         <label>
//           <input
//             type="text"
//             placeholder="Address"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <br></br>
//         <label>
//           FeedBack:
//           <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>

//         <br />
//         <br />

//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// export default NameForm;

import { useState } from "react";
import Acknowledge from "./Acknowledge";

const UserComponent = () => {
  //var inputValue = "";
  const [devName, setDeveloperName] = useState("");
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Address, setAddress] = useState("");
  const [FeedBack, setFeedBack] = useState("");
  const [Btn, setBtn] = useState(false);

  const handleClick = () => {
    setBtn(true);
  };

  const hanldeChange = (params, val) => {
    if (val === 1) setDeveloperName(params.target.value);
    if (val === 2) setUserName(params.target.value);
    if (val === 3) setEmail(params.target.value);
    if (val === 4) setPassword(params.target.value);
    if (val === 5) setAddress(params.target.value);
    if (val === 6) setFeedBack(params.target.value);
  };
  // const hanldeName = (params) => {
  //     setName(params.target.value);
  // };
  // const hanldeAge = (params) => {
  //     setAge(params.target.value);
  // };

  return (
    <>
      {Btn === false ? (
        <div>
          <h1>User Form</h1>
          <br />
          <input
            placeholder="DeveloperName"
            onChange={(event, val) => hanldeChange(event, 1)}
          />
          <br />
          <br />
          <input
            placeholder="UserName"
            onChange={(event, val) => hanldeChange(event, 2)}
          />
          <br />
          <br />
          <input
            placeholder="Email"
            onChange={(event, val) => hanldeChange(event, 3)}
          />
          <br />
          <br />
          <input
            placeholder="Password"
            onChange={(event, val) => hanldeChange(event, 4)}
          />
          <br />
          <br />
          <input
            placeholder="Address"
            onChange={(event, val) => hanldeChange(event, 5)}
          />
          <br />
          <br />
          <input
            placeholder="FeedBack"
            onChange={(event, val) => hanldeChange(event, 6)}
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
        <Acknowledge
          DeveloperName1={devName}
          USername={UserName}
          Pass={Password}
        />
      )}
    </>
  );
};

export default UserComponent;
