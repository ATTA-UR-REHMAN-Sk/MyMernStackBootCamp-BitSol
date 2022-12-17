// import React from "react";

// function TableOutput(props) {
//   const { DeveloperName1, USername, Pass } = props;
//   return (
//     <>
//       <div>
//         <h1>Thanks for your Feedback:-</h1>
//         <h3>Username:{USername}</h3>
//         <h3>Developer Name:{DeveloperName1}</h3>
//         <h3>Password:{Pass}</h3>
//       </div>
//     </>
//   );
// }

// export default TableOutput;
import React from "react";

function TableOutput(props) {
  const { DeveloperName1, USername, Pass } = props;
  return (
    <table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Username :{USername}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>DeveloperName :{DeveloperName1}</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>DeveloperEmail :{Pass}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableOutput;
