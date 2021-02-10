import React from "react";

function Produce(props) {
  return (
    <>
      <h1>{props.month}</h1>
      <h3>{props.selection}</h3>
    </>
  );
}

export default Produce;