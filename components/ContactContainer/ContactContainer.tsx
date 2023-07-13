import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { en } from "../../i18n/en";
import { es } from "../../i18n/es";
import { fr } from "../../i18n/fr";

export const ContactContainer = () => {
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [emailResponse, setEmailResponse] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState(false);

  const { locale } = useRouter();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setEmailResponse(true);
    setLoadingEmail(true);
    emailjs
      .sendForm(
        "service_972boay",
        "template_grzz54i",
        e.target,
        "Ddv_q4Cnj9A0idnNG"
      )
      .then((res) => {
        setTimeout(() => {
          console.log(res);
          setEmailResponse(false);
          setLoadingEmail(false);
          setThankYouMessage(true);
        }, 3000);
      })
      .then(() => {
        setTimeout(() => {
          setThankYouMessage(false);
        }, 5000);
      })
      .catch((err) => console.log(err));
  };

  const messageBox = () => {
    if (locale == "es") {
      return es.sendMessage;
    } else if (locale == "fr") {
      return fr.sendMessage;
    } else {
      return en.sendMessage;
    }
  };

  return (
    <section
      className="section is-medium is-primary has-text-centered  bottom-div"
      id="contact"
    >
      <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
          {[
            locale === "es-PE" && es.contactTitle,
            locale === "en-US" && en.contactTitle,
            locale === "fr-CA" && fr.contactTitle,
          ]}
        </h1>
      {loadingEmail ? (
        <div className="box has-text-centered is-narrow container">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : thankYouMessage ? (
        <div className="thankyou-container">
          <Icon icon="akar-icons:circle-check" color="white" width="100" />
          <p className="thankyou-message">
            {[
              locale === "es-PE" && es.graciasMensaje,
              locale === "en-US" && en.thankYouMessage,
              locale === "fr-CA" && fr.merciMessage,
            ]}
          </p>
        </div>
      ) : (
        <form className="contact-form-home-container" onSubmit={sendEmail}>
          <div className="container is-narrow">
            <div className="box">
              <div className="field">
                <label className="label">
                  {[
                    locale === "es-PE" && es.contactInputOne,
                    locale === "en-US" && en.contactInputOne,
                    locale === "fr-CA" && fr.contactInputOne,
                  ]}
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    id="exampleFormControlInput1"
                    placeholder="Peter Parker"
                    name="name"
                    required={true}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">
                  {[
                    locale === "es-PE" && es.contactInputTwo,
                    locale === "en-US" && en.contactInputTwo,
                    locale === "fr-CA" && fr.contactInputTwo,
                  ]}
                </label>

                <input
                  type="email"
                  className="input"
                  id="exampleFormControlInput1"
                  placeholder="peter@spiderman.com"
                  name="email"
                  required={true}
                />
              </div>

              <div className="field">
                <label className="label">
                  {[
                    locale === "es-PE" && es.contactInputThree,
                    locale === "en-US" && en.contactInputThree,
                    locale === "fr-CA" && fr.contactInputThree,
                  ]}
                </label>
                <div className="control">
                  <textarea
                    className="textarea"
                    id="exampleFormControlTextarea1"
                    rows={5}
                    name="message"
                    required={true}
                  ></textarea>
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  {/* <button className="button is-link">Send Message</button> */}
                  <input
                    type="submit"
                    value={messageBox()}
                    className="button is-link"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
      {/* </div> */}
    </section>
  );
};
