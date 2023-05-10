import React from 'react';
import { Link } from "react-scroll";

import FamilyMobile from '../../_assets/img/maec-carousel-familia-mobile.png'
import Family from '../../_assets/img/maec-carousel-familia.png'
import BusinessMobile from '../../_assets/img/maec-carousel-empresa-mobile.png'
import Business from '../../_assets/img/maec-carousel-empresa.png'
import PatrimonyMobile from '../../_assets/img/maec-carousel-patrimonio-mobile.png'
import Patrimony from '../../_assets/img/maec-carousel-patrimonio.png'

const Carousel = () => {
  return (
    <section className="carousel">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 owl-carousel owl-theme">
            <div className="row">
              <div className="order-12 order-sm-12 order-md-1 col-sm-12 col-md-6 box-desc align-v">
                <h1 className="title"><span className="primary line-title">Somos especialistas</span><span className="second">Em cuidar da sua família!</span></h1>
                <p className="desc">Cuidamos de todas as questões familiares legais para a sua família viver tranquila e segura.</p>
                <Link className="btn scroll"
                  to="acting-area"
                  spy={true}
                  smooth={true}
                  duration= {600}
                  offset={-100}
                >
                  SAIBA MAIS
                </Link>
              </div>
              <div className="order-1 order-sm-1 order-md-12 col-sm-12 col-md-6 box-img">
                <picture>
                  <source srcSet={FamilyMobile} media="(max-width: 1280px)" />
                  <source srcSet={Family} media="(min-width: 1281px)" />
                  <img src={Family} alt="Especialista em cuidar da sua família" className="img-fluid" />
                </picture>
              </div>
            </div>
            <div className="row">
              <div className="order-12 order-sm-12 order-md-1 col-sm-12 col-md-6 box-desc align-v">
                <h1 className="title"><span className="primary line-title">Somos especialistas</span><span className="second">Em cuidar da sua empresa!</span></h1>
                <p className="desc">Nosso trabalho consultivo oferece soluções que permitem um crescimento seguro e rentável para a sua companhia.</p>
                <Link className="btn scroll"
                  to="acting-area"
                  spy={true}
                  smooth={true}
                  duration= {600}
                  offset={-100}
                >
                  SAIBA MAIS
                </Link>
              </div>
              <div className="order-1 order-sm-1 order-md-12 col-sm-12 col-md-6 box-img">
                <picture>
                  <source srcSet={BusinessMobile} media="(max-width: 1280px)" />
                  <source srcSet={Business} media="(min-width: 1281px)" />
                  <img src={Business} alt="Especialista em cuidar da sua empresa" className="img-fluid" />
                </picture>
              </div>
            </div>
            <div className="row">
              <div className="order-12 order-sm-12 order-md-1 col-sm-12 col-md-6 box-desc align-v">
                <h1 className="title"><span className="primary line-title">Somos especialistas</span><span className="second">Em cuidar do seu patrimônio!</span></h1>
                <p className="desc">Oferecemos soluções para que você e seu patrimônio fiquem absolutamente seguros.</p>
                <Link className="btn scroll"
                  to="acting-area"
                  spy={true}
                  smooth={true}
                  duration= {600}
                  offset={-100}
                >
                  SAIBA MAIS
                </Link>
              </div>
              <div className="order-1 order-sm-1 order-md-12 col-sm-12 col-md-6 box-img">
                <picture>
                  <source srcSet={PatrimonyMobile} media="(max-width: 1280px)" />
                  <source srcSet={Patrimony} media="(min-width: 1281px)" />
                  <img src={Patrimony} alt="Especialista em cuidar do seu patrimonio" className="img-fluid" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Carousel;
