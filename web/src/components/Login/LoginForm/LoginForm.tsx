import LoginButton from "../loginButton/LoginButton";
import LoginInput from "../loginInput/LoginInput";
import "./LoginForm.css";
import womanImage from "../../../assets/mulher.png";
import adoptImage from "../../../assets/Group 1.png";

function LoginForm() {
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
            <LoginInput type="email" label="E-mail" placeholder="E-mail" />
            <LoginInput type="password" label="Senha" placeholder="Senha" />
          </form>
          <LoginButton text="ENTRAR" />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
