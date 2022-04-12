import { useRouter } from "next/router";
import React from "react";
import { en } from "../../i18n/en";
import { es } from "../../i18n/es";
import { fr } from "../../i18n/fr";

export const ContactForm = () => {
  const { locale, locales, defaultLocale, route } = useRouter();

  return (
    <div className="contact-form-home-container">
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
          type="email"
          className="form-control form-input-text"
          id="exampleFormControlInput1"
          placeholder="Peter Parker"
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
        ></textarea>
      </div>

      <div className="form-input-button-container">
        <input
          type="submit"
          value="Send Message"
          className="form-input-button-submit"
        />
      </div>
    </div>
  );
};
