import React from 'react';
import Logo from '../../_assets/img/logo-maec.svg';
import Facebook from '../../_assets/img/facebook-icon.svg';
import Instagram from '../../_assets/img/instagram-icon.svg';
import Linkedin from '../../_assets/img/linkedin-icon.svg';

const Header= () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="logo">
              <a href="./">
                <img src={Logo} alt="Logo MA&C Advocacia e Consultoria" />
              </a>
            </div>
            <div className="info">
              <div className="item hour">
                <span>De Seg. a Sex.</span>
                <span>8:00 - 18:00h</span>
              </div>
              <div className="item phone">
                <span>Ligue para nós</span>
                <span>62.3946.6301</span>
              </div>
              <div className="item social-networks">
                <ul className="unlisted">
                  <li>
                    <a href="https://www.facebook.com/MAC-Advocacia-e-Consultoria-188948015035911/" rel="noopener noreferrer" target="_blank">
                      <img src={Facebook} alt="Ícone facebook"/>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/macadvocaciaeconsultoria/" target="_blank" rel="noopener noreferrer">
                      <img src={Instagram} alt="Ícone Instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://br.linkedin.com/in/rafael-martins-de-a-cardoso-30ab60159" target="_blank" rel="noopener noreferrer">
                      <img src={Linkedin} alt="Ícone Linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="item button">
                <button type="button" className="btn" data-toggle="modal" data-target="#contactModal">SOLICITAR CONTATO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
