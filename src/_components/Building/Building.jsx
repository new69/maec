import React from 'react';

const Building = () => {
  return (
    <div id="house" className="tabcontent">
      <div className="row">
        <div className="col-md-6">
          <div className="box-btn-tab left">
            <button className="head rent">Contratos de aluguel</button>
            <div className="content">
              <p>O contrato de aluguel é fundamental na relação entre o dono de um imóvel e seu inquilino. Ele determina o fim da negociação e o momento em que o imóvel passa a ser usado pela outra parte. É por ele que tanto o inquilino quanto o proprietário acordam sobre seus direitos e deveres, além de se protegerem   de um possível não cumprimento pela outra parte. O ideal é que ambas as partes sentem e conversem com clareza, para que ambos tenham noção do seu papel e que todas as dúvidas sejam sanadas.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box-btn-tab right">
            <button className="head buy-sell-contract">Contratos de compra e venda</button>
            <div className="content">
              <p>Comprar ou vendar um apartamento, casa, terreno ou ponto comercial requer que sejam feitos diversos documentos, para que o imóvel seja totalmente transferido. É preciso ter bastante cautela, para não perder dinheiro.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="box-btn-tab left">
            <button className="head exit-door">Despejo</button>
            <div className="content">
              <p>Quando o inquilino não cumpre com as obrigações descritas no contrato, como pagamento ou uso correto do imóvel, é preciso contar com o auxílio de um especialista em direito imobiliário. Estamos prontos para isso.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box-btn-tab right">
            <button className="head consult">Consulta de Contratos<br /> Imobiliários e Financiamentos </button>
            <div className="content">
              <p>No dia a dia, é comum as pessoas precisarem de um contrato. Seja sobre a venda de um imóvel, aluguel, na prestação de serviço ou na contratação de financiamento.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="box-btn-tab left">
            <button className="head lotment">Compliance Imobiliário em<br /> Loteamentos</button>
            <div className="content">
              <p>Existem muitas normas, leis e diretrizes a serem seguidas ao se fazer um loteamento, desde o local onde o imóvel será construído até o histórico judicial dos proprietários deste. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Building;
