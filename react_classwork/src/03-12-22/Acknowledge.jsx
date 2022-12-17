import React from "react";

function Acknowledge(props) {
  const { DeveloperName1, USername, Pass } = props;
  return (
    <>
      <div>
        <h1>Thanks for your Feedback:-</h1>
        <h3>Username:{USername}</h3>
        <h3>Developer Name:{DeveloperName1}</h3>
        <h3>Password:{Pass}</h3>
      </div>
    </>
  );
}

export default Acknowledge;
