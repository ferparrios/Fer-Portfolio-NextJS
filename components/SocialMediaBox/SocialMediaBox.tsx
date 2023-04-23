import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

export const SocialMediaBox = () => {
  return (
    <div className="container">
      <div className="columns box social-media-box ">
        <div className="column social-media-box">
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
        <div className="column  social-media-box">
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
        <div className="column  social-media-box">
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
        <div className="column  social-media-box">
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
  );
};
