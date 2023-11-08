import "./Header.css";
import womanImage from "../../assets/mulher-com-cachorro-1.png";
import adoptImage from "../../assets/Group 1.png";

type HeaderProps = {
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
            <div>
              <img
                src={adoptImage}
                alt="logo"
                className="title-image header-logo"
              ></img>
            </div>
            <div className="header-buttons">
              {props.home ? (
                <div className="header-selected-button">
                  <p className="header-button">HOME</p>
                  <div className="header-underline-bar"></div>
                </div>
              ) : (
                <div className="header-button">HOME</div>
              )}
              {props.tutores ? (
                <div className="header-selected-button">
                  <p className="header-button">TUTORES</p>
                  <div className="header-underline-bar"></div>
                </div>
              ) : (
                <div className="header-button">TUTORES</div>
              )}
              {props.adocoes ? (
                <div className="header-selected-button">
                  <p className="header-button">ADOÇÕES</p>
                  <div className="header-underline-bar"></div>
                </div>
              ) : (
                <div className="header-button">ADOÇÕES</div>
              )}
              {props.animais ? (
                <div className="header-selected-button">
                  <p className="header-button">ANIMAIS</p>
                  <div className="header-underline-bar"></div>
                </div>
              ) : (
                <div className="header-button">ANIMAIS</div>
              )}
            </div>
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
