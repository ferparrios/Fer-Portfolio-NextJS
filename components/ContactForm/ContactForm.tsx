import { useRouter } from "next/router";
import React, { useState } from "react";
import { en } from "../../i18n/en";
import { es } from "../../i18n/es";
import { fr } from "../../i18n/fr";
import emailjs from "emailjs-com";
import { Icon } from '@iconify/react';

export const ContactForm = () => {
  const { locale, locales, defaultLocale, route } = useRouter();
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [emailResponse, setEmailResponse] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState(false);

  const sendEmail = (e) => {
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

  return (
    <>
      {loadingEmail ? (
        <div className="loading-image">
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
          <p className="thankyou-message">Thank You for your Message</p>
        </div>
      ) : (
        <form className="contact-form-home-container" onSubmit={sendEmail}>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label contact-label"
            >
              {[
                locale === "es-PE" && es.contactInputOne,
                locale === "en-US" && en.contactInputOne,
                locale === "fr-CA" && fr.contactInputOne,
              ]}
            </label>
            <input
              type="text"
              className="form-control form-input-text"
              id="exampleFormControlInput1"
              placeholder="Peter Parker"
              name="name"
              required={true}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label contact-label"
            >
              {[
                locale === "es-PE" && es.contactInputTwo,
                locale === "en-US" && en.contactInputTwo,
                locale === "fr-CA" && fr.contactInputTwo,
              ]}
            </label>
            <input
              type="email"
              className="form-control form-input-text"
              id="exampleFormControlInput1"
              placeholder="peter@spiderman.com"
              name="email"
              required={true}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label contact-label"
            >
              {[
                locale === "es-PE" && es.contactInputThree,
                locale === "en-US" && en.contactInputThree,
                locale === "fr-CA" && fr.contactInputThree,
              ]}
            </label>
            <textarea
              className="form-control form-input-text"
              id="exampleFormControlTextarea1"
              rows={5}
              name="message"
              required={true}
            ></textarea>
          </div>

          <div className="form-input-button-container">
            <input
              type="submit"
              value="Send Message"
              className="form-input-button-submit"
            />
          </div>
        </form>
      )}
    </>
  );
};
