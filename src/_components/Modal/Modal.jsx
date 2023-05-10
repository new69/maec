import React, {useState} from 'react';
import { toast } from 'react-toastify';
import { IMaskInput } from "react-imask";

/* img */
import Success from '../../_assets/img/done-all-icon.svg';

/* Services */
import {leadService as lead} from '../../_services';

/* Helper */
import {useForm} from '../../_filters';

const Modal = () => {
  const [buttonDisabled, setButton] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendLead = () => {
    setButton(true);
    lead.create(inputs)
      .then(() => {
        setSuccess(true);
      })
      .catch(() => {
        toast.error('Erro ao enviar formulário. Favor tentar novamente');
        window.$('#contactModal').modal('hide');
        window.$('.modal-backdrop.fade.show').remove();
      })
      .finally(() => {
        setButton(false);
      });
  }
  const {inputs, handleInputChange, handleSubmit} = useForm(sendLead, {'utm_campaign': '9uVWq5PFq7'});
  return (
    <div className="modal fade" id="contactModal" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content">
          <div className="modal-header">
            {!success &&
              <h4 className="title line-title center">Solicite agora mesmo o contato de nossos especialistas</h4>
            }
            {success &&
              <>
                <div className="success-icon">
                  <img src={Success} alt="Ícone sucesso" />
                </div>
                <h4 className="title line-title center">Mensagem enviada com sucesso!</h4>
              </>
            }
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {!success &&
              <form id="modal-form" onSubmit={handleSubmit} className="form">
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="name-modal" className="form-label"><span>Nome</span></label>
                    <input type="text" id="name-modal" name="name" className="form-control" onChange={handleInputChange} required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email-modal" className="form-label"><span>Email</span></label>
                    <input type="email" id="email-modal" name="email" className="form-control" onChange={handleInputChange} required />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="phone-modal" className="form-label"><span>Telefone</span></label>
                    <IMaskInput type="tel"
                      className="form-control"
                      id="phone-modal"
                      name="phone"
                      mask="+{55}(00)00000-0000"
                      required
                      onChange={handleInputChange} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="chosen-area" className="form-label chosen-area"><span>Área desejada</span></label>
                    <select id="chosen-area" name="interest" className="form-control" onChange={handleInputChange} required>
                      <option value="">Selecione</option>
                      <option value="business">Empresarial</option>
                      <option value="real_estate">Imobiliário</option>
                      <option value="family">Familiar</option>
                    </select>
                  </div>
                </div>
                <button type="submit" disabled={buttonDisabled} className="btn">ENVIAR</button>
              </form>
            }
            {success &&
                <p className="text-center">Entraremos em contato o mais rápido possível!</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
