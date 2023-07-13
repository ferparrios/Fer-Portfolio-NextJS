import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Icon } from "@iconify/react";

export const ContactContainer = () => {
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [emailResponse, setEmailResponse] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState(false);

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

  return (
    <section className="section is-medium is-primary has-text-centered  bottom-div" id="contact">
      {loadingEmail ? (
        <div
          // style={{
          //   width: 500,
          //   borderColor: "black",
          //   height: 500,
          //   borderWidth: 2,
          //   justifyContent: "center",
          //   alignItems: "center"
          // }}
          className="box has-text-centered is-narrow container"
        >
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
          <div className="container is-narrow">
            <div className="box">
              <div className="field">
                <label className="label">Your Name</label>
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
                <label className="label">Your Email</label>

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
                <label className="label">Your Message</label>
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
                    value="Send Message"
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
