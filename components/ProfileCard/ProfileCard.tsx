import { en } from "i18n/en";
import { es } from "i18n/es";
import { fr } from "i18n/fr";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useProfileCard } from "./ProfileCardHooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
    <div className="profile-card">
      {loading ? (
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
      )}
    </div>
  );
};

// export default ProfileCard
