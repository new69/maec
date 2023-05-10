import React from 'react';

const Consult = () => {
  return (
    <section className="consult">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-9" data-aos="fade-right">
            <h2 className="title line-title">Precisa consultar um advogado?</h2>
            <p>Clique no botão e solicite agora mesmo o contato de um de nossos advogados.</p>
          </div>
          <div className="col-sm-12 col-md-3 align-v" data-aos="fade-up" data-aos-delay="300">
            <button type="button" className="btn" data-toggle="modal" data-target="#contactModal">SOLICITAR CONTATO</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Consult;
