import React from "react";

const TxtFld = ({ placeholder, onChange, value }) => {
  return (
    <input
      placeholder={placeholder}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      value={value}
    />
  );
};

export default TxtFld;
