import React from 'react';

const Companies = () => {
  return (
    <div id="company" className="tabcontent" style={{display: 'block'}}>
      <div className="row">
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div className="box-btn-tab left">
            <button className="head office-building">Abertura de empresas</button>
            <div className="content">
              <p>Abrir uma empresa não é tão simples quanto possa parecer. Para garantir que o negócio seja legalizado e esteja pronto para funcionar, há vários documentos que precisam ser apresentados.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div className="box-btn-tab right">
            <button className="head contract">Fechamentos de empresas</button>
            <div className="content">
              <p>Caso acredite que seja a hora de encerrar o funcionamento a sua empresa, nós também estamos prontos para orientar e lidar, ao seu lado com toda a burocracia.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
          <div className="box-btn-tab left">
            <button className="head consult">Consultas e Pareceres</button>
            <div className="content">
              <p>Em caso de dúvidas ou questionamentos legais, conte conosco para análise jurídica quanto à situação de sua empresa.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
          <div className="box-btn-tab right">
            <button className="head house">Compliance imobiliário</button>
            <div className="content">
              <p>O combate à corrupção, à lavagem de dinheiro e às práticas antiéticas também é preocupação do mercado imobiliário. Para garantir o cumprimento de leis, normas e padrões, muitas empresas do segmento adotam programas de compliance. Ou seja, ações de avaliação, prevenção e correção de problemas no projeto, construção e venda de imóvel.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
          <div className="box-btn-tab left">
            <button className="head balance">Assessoria jurídica especializada para Construtoras e Incorporadoras</button>
            <div className="content">
              <p>A assessoria jurídica especializada no segmento da construção civil é fundamental para gerenciar riscos; intermediar conflitos; avaliar, propor e responder demandas judiciais, tornando a gestão da empresa mais eficiente.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
          <div className="box-btn-tab right">
            <button className="head contract-2">Contratos</button>
            <div className="content">
              <p>Um bom, completo e sobretudo claro contrato é essencial para que sua empresa preste um serviço de qualidade ou que venda seu produto.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companies;
