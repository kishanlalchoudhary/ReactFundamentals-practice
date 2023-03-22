import React from "react";

export default function WelcomeDialog(props) {
  return (
    <>
      <Dialog title="welcome to React Course" content="This is React Course" />
      <Dialog title="welcome to React Course" content="This is React Course" />
      <Dialog title="welcome to React Course" content="This is React Course" />
    </>
  );
}

function FancyBorder(props) {
  return <div>{props.children}</div>;
}

function Dialog(props) {
  return (
    <FancyBorder>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </FancyBorder>
  );
}
