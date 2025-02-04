import React, { useEffect, useState } from "react";
import "src/components/Contacte/Contacte.css";
import logo from "src/icons/imagotip_lleidahack_blanc.png";
import instagramLogo from "src/icons/instagram.png";
import linkedinLogo from "src/icons/linkedin.png";
import twitterLogo from "src/icons/X.png";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { contacte } from "src/services/AuthenticationService";
import SuccessFeedback from "src/components/Feedbacks/SuccesFeedback";
import FailFeedback from "src/components/Feedbacks/FailFeedback";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Nom requerit"),
  email: Yup.string()
    .email("El correu ha de ser una adreça de correu vàlida")
    .required("Correu requerit"),
  subject: Yup.string().required("Títol del missatge requerit"),
  message: Yup.string().required("Missatge requerit"),
});

const ContactePage = () => {
  const [mailSended, setMailSended] = useState(false);
  const [mailStatus, setMailStatus] = useState(false);

  const handleSubmit = async (values) => {
    const onMail = await contacte(
      values.name,
      values.subject,
      values.email,
      values.message,
    );

    if (onMail.success) {
      setMailStatus(true); //primer fiquem que el estat es correcte
      setMailSended(true); //Despres indiquem que ja es pot carregar la pagina de status
    } else {
      setMailStatus(false); //primer fiquem que el estat es incorrecte
      setMailSended(true); //Despres indiquem que ja es pot carregar la pagina de status
    }
  };

  const handleButtonClick = () => {
    window.location.reload();
  };

  useEffect(() => {
    // Coloca el scroll en la parte superior cuando el componente se monta
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-all">
      {!mailSended ? (
        <>
          <h1 className="title-contacte">Contacte</h1>
          <div className="contact-container">
            <div className="logo-container">
              <h2 className="title-logo">
                Esdeveniment organitzat per LleidaHack
              </h2>
              <img src={logo} alt="Logo" className="logo" />
              <div className="social-logos">
                <a
                  href="https://www.twitter.com/lleidahack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twitterLogo}
                    alt="Twitter"
                    className="social-logo"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/lleidahack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedinLogo}
                    alt="LinkedIn"
                    className="social-logo"
                  />
                </a>
                <a
                  href="https://www.instagram.com/lleidahack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instagramLogo}
                    alt="Instagram"
                    className="social-logo"
                  />
                </a>
              </div>
            </div>
            <div className="form-container-contacte">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="form-contacte">
                  <div className="formik-field">
                    <label htmlFor="name">Nom:</label>
                    <Field type="text" id="name" name="name" />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error-message"
                    />
                  </div>

                  <div className="formik-field">
                    <label htmlFor="email">Correu:</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error-message"
                    />
                  </div>

                  <div className="formik-field">
                    <label htmlFor="subject">Títol del missatge:</label>
                    <Field type="text" id="subject" name="subject" />
                    <ErrorMessage
                      name="subject"
                      component="div"
                      className="error-message"
                    />
                  </div>

                  <div className="formik-field">
                    <label htmlFor="message">Missatge:</label>
                    <Field as="textarea" id="message" name="message" rows="4" />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="button-submit-container">
                    <button className="button-submit" type="submit">
                      Enviar
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </>
      ) : (
        <>
          {!mailStatus ? (
            <>
              <FailFeedback
                title={`Error enviant el teu missatge.`}
                text={`Sembla que algo ha fallat mentre registravem el teu missatge.`}
                hasButton={true}
                buttonLink={`/contacte`}
                buttonText={`Intentar novament`}
                italic={`Torna a intentar-ho novament. En cas que segueixi fallant, contacta amb nosaltres utilitzant \n les nostres xarxes socials que trobarás a la part inferior de la pantalla.`}
                onButtonClick={handleButtonClick}
              />
            </>
          ) : (
            <>
              <SuccessFeedback
                title="Missatge enviat correctament."
                text={`Gracies per contactar amb LleidaHack. El teu missatge s'ha enviat correctament. \n En cas que necesitesim ficar-nos en contacte amb tu, ho fariem amb el correu 
                que ens has proporcionat.`}
                hasButton={true}
                buttonLink="/#home"
                buttonText="Tornar al inici"
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ContactePage;
