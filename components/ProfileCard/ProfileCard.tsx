import { en } from "i18n/en";
import { es } from "i18n/es";
import { fr } from "i18n/fr";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useProfileCard } from "./ProfileCardHooks";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import { ProfileImageContainer } from "@components/ProfileImageContainer/ProfileImageContainer";

export const ProfileCard = () => {
  const { profileImage } = useProfileCard();

  const { locale, locales, defaultLocale } = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <section className="section-primary hero is-white">
      <div className="hero-body column is-three-fifths is-offset-one-fifth">
        <div className="is-half is-offset-one-quarter">
          <img src="images/fer-avatar-png.png" alt="" />
        </div>
      </div>
      <div className="hero-foot column is-three-fifths is-offset-one-fifth">
        <div className="box">
          <p className="subtitle">Hi, my name is</p>
          <h1 className="title">Fernando Paredes Rios.</h1>
          <p>
            I like to create amazing applications for the web and smartphones,
            check some of my work here.
          </p>
        </div>
      </div>
    </section>
  );
};

// export default ProfileCard
