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
    <div id="contact-home" className="contact-home-index-container">
      <h2 className="blog-home-title">Let me a message here:</h2>
      <ContactForm />

      <div className="footer-arrows-social-container">
        <div className="footer-up-arrows">
          <Link href="#" as={"/"}>
            <Icon 
              icon="charm:arrow-up" 
              width={50} 
              className="footer-social-up-arrow"
            />
          </Link>
        </div>

        <div className="footer-social">
          <div className="footer-social-item-container">
            <Link href={"https://www.linkedin.com/in/fparedesr112/"}>
              <a target={"_blank"}>
              <Icon
                icon="mdi:linkedin"
                width={50}
                className="footer-social-icon"
              />
              </a>
            </Link>
          </div>
          <div className="footer-social-item-container">
            <Link href={"https://www.instagram.com/ferparrios/"}>
              <a target={"_blank"}>
                <Icon
                  icon="akar-icons:instagram-fill"
                  width={50}
                  className="footer-social-icon"
                />
              </a>
            </Link>
          </div>
          <div className="footer-social-item-container">
            <Link href={"https://twitter.com/ferparrios"}>
              <a target={"_blank"}>
              <Icon
                icon="akar-icons:twitter-fill"
                width={50}
                className="footer-social-icon"
              />
              </a>
            </Link>
          </div>
          <div className="footer-social-item-container">
            <Link href={"https://github.com/ferparrios"}>
              <a target={"_blank"}>
              <Icon
                icon="akar-icons:github-fill"
                width={50}
                className="footer-social-icon"
              />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
