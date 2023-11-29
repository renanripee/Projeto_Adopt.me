import "./LoginButton.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

type LoginButtonProps = {
  text?: string;
};

function LoginButton(props: LoginButtonProps) {
  const [autenticado, setAutenticado] = useState(false);

  const realizarLogin = () => {
    setAutenticado(true);
  };

  return (
    <div>
      <button className="login-button" onClick={realizarLogin}>
        {props.text}
      </button>
      {autenticado && <Navigate to="/home" />}
    </div>
  );
}

export default LoginButton;
