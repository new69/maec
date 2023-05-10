import React from 'react';

const Families = () => {
  return (
    <div id="family" className="tabcontent">
      <div className="row">
        <div className="col-md-6">
          <div className="box-btn-tab left">
            <button className="head wedding-contract">Contratos de namoro</button>
            <div className="content">
              <p>O contrato de namoro pode ser público ou particular, podendo ser assinado por agentes capazes (maiores ou emancipados) e pretende estabelecer os limites e objetivos de uma relação, preservando-se, com isso, os patrimoniais individuais.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box-btn-tab right">
            <button className="head wedding">Contratos pré-nupciais</button>
            <div className="content">
              <p>Esse contrato é feito antes do casamento,  principalmente, quando o casal opta pelo regime diverso do chamado regime legal ou convencional, neste caso, o regime da comunhão parcial de bens.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="box-btn-tab left">
            <button className="head testament">Planejamento sucessório</button>
            <div className="content">
              <p>O planejamento sucessório é importante por diversos motivos. Você pode resolver questões financeiras com mais tempo e segurança. Além disso, esse processo requer um planejamento essencial para se tomar as melhores decisões em caso de falecimento. Isso sem falar que o planejamento familiar permite que o patrimônio da família e seus beneficiários sejam protegidos.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box-btn-tab right">
            <button className="head family">Holding familiar</button>
            <div className="content">
              <p>A Holding Familiar é bastante eficiente para se realizar o planejamento financeiro, tributário e sucessório dos bens e participações de uma família, além de realizar uma importante blindagem patrimonial para que os bens dos membros da família não sejam colocados em risco devido à ação de má-gestão feita por terceiros.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="box-btn-tab left">
            <button className="head business-and-finance">Inventário e partilha de bens</button>
            <div className="content">
              <p>Os inventários e partilhas hoje podem ser feitos pelo meio judicial (ou seja, com a abertura de um processo na Justiça comum) ou pelo meio extrajudicial, onde os herdeiros, capazes e de comum acordo podem fazê-lo por uma Escritura Pública.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box-btn-tab right">
            <button className="head letter">Testamentos</button>
            <div className="content">
              <p>No testamento, realizado pela livre vontade da pessoa e antes do seu falecimento, ela pode deixar livremente à sua escolha, para quem ela quiser, pelo menos metade de seus bens.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="box-btn-tab left">
            <button className="head wedding-ring">Separação e divórcio</button>
            <div className="content">
              <p>Infelizmente como em outros casos societários, o casamento, também chamada sociedade conjugal pode chegar ao fim. Hoje à exemplo do inventário, a separação e divórcio podem ser judicial ou extrajudicial.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Families;
