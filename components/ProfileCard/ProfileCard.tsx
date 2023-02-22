import { en } from "i18n/en";
import { es } from "i18n/es";
import { fr } from "i18n/fr";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useProfileCard } from "./ProfileCardHooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ProfileImageContainer } from "@components/ProfileImageContainer/ProfileImageContainer";

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
        <div className="column is-half is-offset-one-quarter">
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
      {/* <ProfileImageContainer /> */}
      {/* {loading ? (
        <div className="skeleton"></div>
      ) : (
        <div className="profile-card-image-container">
          <img src={profileImage} className="profile-card-image" alt="..." />
        </div>
      )}

      <div className="profile-card-text-container">
        {loading ? (
          <>
            <div className="skeleton-text"></div>
            <div className="skeleton-presentation-text"></div>
            <div className="skeleton-presentation-text"></div>
            <div className="skeleton-presentation-text"></div>
            <div className="skeleton-presentation-text"></div>
            <div className="skeleton-presentation-text"></div>
            <div className="skeleton-presentation-text"></div>
          </>
        ) : (
          <>
            <h1 className="profile-card-title">
              {[
                locale === "en-US" && en.profileTitle,
                locale === "es-PE" && es.profileTitle,
                locale === "fr-CA" && fr.profileTitle,
              ]}
            </h1>
            <p className="profile-card-text">
              {[
                locale === "en-US" && en.profileDescription,
                locale === "es-PE" && es.profileDescription,
                locale === "fr-CA" && fr.profileDescription,
              ]}
            </p>
          </>
        )}
      </div>

      {loading ? (
        <div className="skeleton-profile-button"></div>
      ) : (
        <div className="profile-card-button-container">
          <div className="profile-card-button">
            <Link href="#blog-home">
              <p className="profile-card-text">
                Check my content &nbsp;
                <FontAwesomeIcon icon={faChevronRight} />
                <FontAwesomeIcon icon={faChevronRight} />
              </p>
            </Link>
          </div>
        </div>
      )} */}
    </section>
  );
};

// export default ProfileCard
