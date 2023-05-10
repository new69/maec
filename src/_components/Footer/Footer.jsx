import React, {useState} from 'react';
import { toast } from 'react-toastify';
import { IMaskInput } from "react-imask";

/* IMGS */
import Logo from '../../_assets/img/logo-concore.svg';
import Place from '../../_assets/img/place-icon.svg';
import LogoFooter from '../../_assets/img/logo-maec-footer.svg';

/* Services */
import {leadService as lead} from '../../_services';

/* Helper */
import {useForm} from '../../_filters';

const Footer = () => {
  const [buttonDisabled, setButton] = useState(false);

  const sendLead = () => {
    setButton(true);
    lead.create(inputs)
      .then(() => {
        toast.success('Formulário enviado com sucesso!')
      })
      .catch(() => {
        toast.error('Erro ao enviar formulário. Favor tentar novamente');
      })
      .finally(() => {
        setButton(false);
        window.$('#contactModal').modal('hide');
        window.$('.modal-backdrop.fade.show').remove();
      });
  }
  const {inputs, handleInputChange, handleSubmit} = useForm(sendLead, {'utm_campaign': '9uVWq5PFq7'});
  return (
    <footer>
      <section className="contact-location" id="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-contact">
              <h2 className="title line-title">Contate-nos</h2>
              <p>Para dúvidas, sugestões ou assuntos diversos, envie-nos uma mensagem pelo formulário abaixo.</p>
              <form id="footer-form" onSubmit={handleSubmit} className="form">
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label"><span>Nome</span></label>
                    <input type="text" id="name" name="name" className="form-control" onChange={handleInputChange} required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label"><span>Email</span></label>
                    <input type="email" id="email" name="email" className="form-control" onChange={handleInputChange} required />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label htmlFor="phone" className="form-label"><span>Telefone</span></label>
                    <IMaskInput type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      mask="+{55}(00)00000-0000"
                      required
                      onChange={handleInputChange} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label htmlFor="message" className="form-label"><span>Mensagem</span></label>
                    <textarea rows="2" id="message" name="message" className="form-control" onChange={handleInputChange} required></textarea>
                  </div>
                </div>
                <button type="submit" disabled={buttonDisabled} className="btn">ENVIAR MENSAGEM</button>
              </form>
            </div>
            <div className="col-1"></div>
            <div className="col-md-5 col-location">
              <h2 className="title line-title">Localização</h2>
              <iframe id="google-maps" title="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15286.182222311134!2d-49.2640363!3d-16.6996093!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcecfc715bf19f11a!2sInterative%20Coworking%20-%20Escrit%C3%B3rios%20Compartilhados!5e0!3m2!1spt-BR!2sbr!4v1567800291314!5m2!1spt-BR!2sbr" width="100%" height="207" frameBorder="0" style={{border: 0}} allowFullScreen="" className="map"></iframe>
              <div className="row">
                <div className="order-12 order-sm-12 order-md-1 col-sm-12 address">
                  <address>
                    <img src={Place} alt="Ícone Localização" />
                    <p>Rua 137, n° 556 - Interative Business Center  1° andar Setor Marista<br />Goiânia - GO CEP: 74.170-120</p>
                  </address>
                </div>
                <div className="order-1 order-sm-1 order-md-12 col-sm-12 logo">
                  <img src={LogoFooter} alt="Logo MA&C Advocacia e Consultoria" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>© Copyrights MA&C Advocacia e Consultoria todos os direitos reservados.</p>
              <p className="powered">Powered by <a href="https://www.concore.io/" target="_blank" rel="noopener noreferrer"><img src={Logo} alt="Logo Concore" /></a></p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
