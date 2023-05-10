import React from 'react';
import { Link } from "react-scroll";

import Logo from '../../_assets/img/logo-maec.svg';
import Hangurguer from '../../_assets/img/hamburguer-icon.svg';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="menu">
        <div className="container">
          <div className="row">
              <div className="col-md-12 navbar">
                <div className="logo">
                  <a href="./">
                    <img src={Logo} alt="Logo MA&C Advocacia e Consultoria" />
                  </a>
                </div>
                <button className="navbar-toggler">
                  <img src={Hangurguer} alt="Menu mobile" />
                </button>
                <ul className="unlisted">
                  <li className="active">
                    <Link activeClass="active"
                      className="scroll"
                      to="about-area"
                      spy={true}
                      smooth={true}
                      duration= {600}
                      offset={-100}
                    >
                      A MA&C
                    </Link>
                  </li>
                  <li>
                    <Link activeClass="active"
                      className="scroll"
                      to="acting-area"
                      spy={true}
                      smooth={true}
                      duration= {600}
                      offset={-100}
                    >
                      Áreas de atuação
                    </Link>
                  </li>
                  <li>
                    <Link activeClass="active"
                      className="scroll"
                      to="contact-area"
                      spy={true}
                      smooth={true}
                      duration= {600}
                      offset={-100}
                    >
                      Contato
                    </Link>
                  </li>
                  <li><a href="https://www.medium.com/@rafaelmacardosoadvogados" target="_blank" rel="noopener noreferrer">Blog</a></li>
                </ul>
              </div>
          </div>
        </div>
      </div>
      <div className="menu-mobile">
        <ul className="unlisted">
          <li className="active"><a href="#about-area" className="scroll-mobile mobile_menu_actions">A MA&C</a></li>
          <li><a href="#acting-area" className="scroll-mobile mobile_menu_actions">Áreas de atuação</a></li>
          <li><a href="/" data-toggle="modal" data-target="#contactModal" className="mobile_menu_actions">Contato</a></li>
          <li><a href="https://www.medium.com/@rafaelmacardosoadvogados" target="_blank" rel="noopener noreferrer">Blog</a></li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
