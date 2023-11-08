import React from "react";
import "./LoginButton.css";
import { useNavigate } from "react-router-dom";

type LoginButtonProps = {
  text?: string;
};

function LoginButton(props: LoginButtonProps) {
  //ainda sera mudada para verificar fazer o login realmente
  const navigate = useNavigate();

  //dar um jeito de modulzar isso
  const useNavigateReact = () => {
    navigate("/home");
  };

  return (
    <button className="login-button" onClick={useNavigateReact}>
      {props.text}
    </button>
  );
}

export default LoginButton;
