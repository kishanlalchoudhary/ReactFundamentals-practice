import React from "react";

function Welcome(props) {
  console.log(props);
  return (
    // <h1>Hello, {props.user.firstname} {props.user.lastname} from Welcome Component</h1>
    <h1>Hello, {props.name}</h1>
  );
}

export default Welcome;
