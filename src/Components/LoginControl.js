import { useState } from "react";

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  if (isLoggedIn) {
    button = <LogoutButton logout={handleLogoutClick} />;
  } else {
    button = <LoginButton login={handleLoginClick} />;
  }

  return <div>{button}</div>;
}

function LoginButton(props) {
  return <button onClick={props.login}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.logout}>Logout</button>;
}

export default LoginControl;
