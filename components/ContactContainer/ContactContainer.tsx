import React, { useState, ChangeEvent, FormEvent } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useRouter } from "next/router";
import { es } from "i18n/es";
import { en } from "i18n/en";
import { fr } from "i18n/fr";

export const ContactContainer = () => {
  const { locale } = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, message: "" }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Nombre requerido" }));
      return;
    }

    if (!email.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Correo requerido" }));
      return;
    }

    if (!message.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Mensaje requerido",
      }));
      return;
    }
    setLoading(true);

    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/ajax/fprios112@gmail.com", {
        name: name,
        email: email,
        message: message,
      })
      .then((response) => {
        if (response.status == 200) {
          setLoading(false);
          setName("");
          setEmail("");
          setMessage("");
        }
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const placeHolderName = () => {
    if (locale === "es-PE") {
      return es.formName;
    } else if (locale === "en-US") {
      return en.formName;
    } else {
      return fr.formName;
    }
  };

  const placeHolderEmail = () => {
    if (locale === "es-PE") {
      return es.formEmail;
    } else if (locale === "en-US") {
      return en.formEmail;
    } else {
      return fr.formEmail;
    }
  };

  const placeHolderTextArea = () => {
    if (locale === "es-PE") {
      return es.formTextArea;
    } else if (locale === "en-US") {
      return en.formTextArea;
    } else {
      return fr.formTextArea;
    }
  };

  const enviarText = () => {
    if (locale === "es-PE") {
      return es.formButton;
    } else if (locale === "en-US") {
      return en.formButton;
    } else {
      return fr.formButton;
    }
  };

  const enviandoText = () => {
    if (locale === "es-PE") {
      return es.formSending;
    } else if (locale === "en-US") {
      return en.formSending;
    } else {
      return fr.formSending;
    }
  };

  return (
    <section className="md:my-20" id="contact">
      <div className="px-10 w-10/12 my-4 mx-auto border-2 rounded-3xl shadow max-w-6xl py-8 hover:bg-gray-200">
        <div className="md:flex items-start justify-center">
          <div className="md:w-6/12 md:p-6 pb-6">
            <p className="md:text-3xl text-xl">
              {[
                locale === "es-PE" && es.formMessage,
                locale === "en-US" && en.formMessage,
                locale === "fr-CA" && fr.formMessage,
              ]}
            </p>
          </div>
          <form onSubmit={handleSubmit} method="POST" className="md:w-6/12">
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder={placeHolderName()}
                className={`w-full px-3 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:border-blue-500`}
                value={name}
                onChange={handleNameChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder={placeHolderEmail()}
                className={`w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:border-blue-500`}
                value={email}
                onChange={handleEmailChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder={placeHolderTextArea()}
                className={`w-full px-3 py-2 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:border-blue-500`}
                value={message}
                onChange={handleMessageChange}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition duration-500 ease-in-out"
            >
              {loading ? enviandoText() : enviarText()}
            </button>
            <input type="hidden" name="_next" value={"https://www.ferparedesrios.dev"} />
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      </div>
    </section>
  );
};
