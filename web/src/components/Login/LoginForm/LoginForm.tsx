import "./LoginForm.css";
import "./LoginButton.css";
import "./LoginInput.css";
import womanImage from "../../../assets/mulher.png";
import adoptImage from "../../../assets/Group 1.png";
import { ChangeEvent, useState } from "react";
import { login } from "../../../services/login";
import { useAuth } from "../../../context/AuthContext";

function LoginForm() {
  const [usuario, setUsuario] = useState({
    usuario: "",
    senha: "",
  });
  const { setAuthToken } = useAuth();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };

  function handleSubmit() {
    console.log(usuario);
    login(usuario)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        setAuthToken(token);
        console.log(token);
        window.open("/home", "_self");
      })
      .catch((error) => {
        alert("Login inválido");
      });
  }

  return (
    <div className="login-page">
      <div className="login-image-area">
        <h1 className="image-text">O seu gerenciador de Adoções!</h1>
        <img src={womanImage} alt="mulher" className="image-woman"></img>
      </div>
      <div className="login-area">
        <div className="login-form">
          <div className="title">
            <img src={adoptImage} alt="logo" className="title-image"></img>
          </div>
          <form>
            <div className="input-area">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                className="input-login"
                value={usuario.usuario}
                onChange={handleInputChange}
                name="usuario"
              />
            </div>
            <div className="input-area">
              <label>Senha</label>
              <input
                type="password"
                placeholder="Senha"
                className="input-login"
                value={usuario.senha}
                onChange={handleInputChange}
                name="senha"
              />
            </div>
          </form>
          <div>
            <button className="login-button" onClick={handleSubmit}>
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
