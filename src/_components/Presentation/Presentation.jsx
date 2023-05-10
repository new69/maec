import React from 'react';

import ConsultingMobile from '../../_assets/img/sobre-maec-advocacia-consultoria-mobile.png'
import Consulting from '../../_assets/img/sobre-maec-advocacia-consultoria.png'

const Presentation = () => {
  return (
    <section className="presentation" id="about-area">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 box-img" data-aos="fade-right" data-aos-delay="200">
            <picture>
              <source srcSet={ConsultingMobile} media="(max-width: 1280px)" />
              <source srcSet={Consulting} media="(min-width: 1281px)" />
              <img src={Consulting} alt="Sobre a MA&C Advocacia e Consultoria" className="img-fluid" />
            </picture>
          </div>
          <div className="col-sm-12 col-md-6 box-desc align-v" data-aos="fade-right" data-aos-delay="300">
            <h2 className="title line-title">Sobre a MA&C Advocacia e Consultoria</h2>
            <p>
              Quando é preciso contratar um advogado? Essa é uma pergunta que muitas pessoas já fizeram, por terem dúvidas se devem ou não procurar pelo profissional. A verdade é que há diversas áreas no qual esse profissional pode atuar e, em muitas delas, a MA&C Advocacia e Consultoria é especialista.
            </p>
            <p>
              O escritório, coordenado pelo advogado Rafael Martins de Araújo Cardoso, OAB/GO n° 19.988, conta com profissionais qualificados para atuar em diferentes áreas do Direito. Assim, terá alguém qualificado para cuidar do seu caso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
