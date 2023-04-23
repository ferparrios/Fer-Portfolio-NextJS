import React, { useState } from "react";
import { ContactForm } from "@components/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";
import Link from "next/link";

export const ContactContainer = () => {
  const [mouseInstagramOver, setMouseInstagramOver] = useState(false);
  const [mouseTwitterOver, setmouseTwitterOver] = useState(false);
  const [mouseLinkedinOver, setmouseLinkedinOver] = useState(false);
  const [mouseGithubOver, setmouseGithubOver] = useState(false);

  return (
    // <div id="contact-home" className="contact-home-index-container is-mobile columns">
    //   <h2 className="blog-home-title">Let me a message here:</h2>
    //   <ContactForm />

    //   <div className="footer-arrows-social-container">
    //     <div className="footer-up-arrows">
    //       <Link href="#" as={"/"}>
    //         <Icon
    //           icon="charm:arrow-up"
    //           width={50}
    //           className="footer-social-up-arrow"
    //         />
    //       </Link>
    //     </div>

    //   </div>
    // </div>
    <div className="bottom-div">
      <div className="container is-narrow">
        <div className="box">
          <div className="field">
            <label className="label">Your Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Your Email</label>
            <div className="control has-icons-right">
              <input
                className="input is-danger"
                type="email"
                placeholder="Email input"
                value=""
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          <div className="field">
            <label className="label">Your Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Send Message</button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};
