import "./Header.css";
import womanImage from "../../assets/mulher-com-cachorro-1.png";
import adoptImage from "../../assets/Group 1.png";
import { Link } from "react-router-dom";

type HeaderProps = {
  navigate: boolean;
  navigateText?: string;
  home?: boolean;
  animais?: boolean;
  tutores?: boolean;
  adocoes?: boolean;
};

function Header(props: HeaderProps) {
  return (
    <div className="header-content">
      <div className="image-area-header">
        <div className="header-title">
          <p> O seu site de gerenciamento de adoção de Pets!</p>
          <div className="header-navbar">
            <Link to="/">
              <img
                src={adoptImage}
                alt="logo"
                className="title-image header-logo"
              ></img>
            </Link>

            {props.navigate ? (
              <div className="header-buttons">
                {props.home ? (
                  <div className="header-selected-button">
                    <p className="header-button">HOME</p>
                    <div className="header-underline-bar"></div>
                  </div>
                ) : (
                  <Link to="/home">
                    <div className="header-button">HOME</div>
                  </Link>
                )}
                {props.tutores ? (
                  <div className="header-selected-button">
                    <p className="header-button">TUTORES</p>
                    <div className="header-underline-bar"></div>
                  </div>
                ) : (
                  <Link to="/tutores">
                    <div className="header-button">TUTORES</div>
                  </Link>
                )}
                {props.adocoes ? (
                  <div className="header-selected-button">
                    <p className="header-button">ADOÇÕES</p>
                    <div className="header-underline-bar"></div>
                  </div>
                ) : (
                  <Link to="/adocoes">
                    <div className="header-button">ADOÇÕES</div>
                  </Link>
                )}
                {props.animais ? (
                  <div className="header-selected-button">
                    <p className="header-button">ANIMAIS</p>
                    <div className="header-underline-bar"></div>
                  </div>
                ) : (
                  <Link to="/animais">
                    <div className="header-button">ANIMAIS</div>
                  </Link>
                )}
              </div>
            ) : (
              <div className="header-navigate-text">{props.navigateText}</div>
            )}
          </div>
        </div>
        <img
          src={womanImage}
          alt="mulher com cachorro"
          className="image-header"
        ></img>
      </div>
    </div>
  );
}

export default Header;
