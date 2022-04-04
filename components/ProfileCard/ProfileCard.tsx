import { en } from "i18n/en";
import { es } from "i18n/es";
import { fr } from "i18n/fr";
import { useRouter } from "next/router";
import React,  {useEffect} from "react";
import { useProfileCard } from "./ProfileCardHooks";


export const ProfileCard = () => {

  const {
    profileImage
  } = useProfileCard()

  const { locale, locales, defaultLocale } = useRouter();
  // console.log("Locale: ", locale);
  // console.log("Available Locales: ", locales);
  // console.log("Defaul locale: ", defaultLocale);

  
  
  return (
    <div className="profile-card">
      <div className="profile-card-image-container">
        <img src={profileImage} className="profile-card-image" alt="..." />
      </div>
      <div className="profile-card-text-container">
        <h1 className="profile-card-title">
          {
            [
              locale === "en-US" && en.profileTitle,
              locale === "es-PE" && es.profileTitle,
              locale === "fr-CA" && fr.profileTitle
            ]
          }
        </h1>
        <p className="profile-card-text">
        {
            [
              locale === "en-US" && en.profileDescription,
              locale === "es-PE" && es.profileDescription,
              locale === "fr-CA" && fr.profileDescription
            ]
          }
        </p>
      </div>
    </div>
  );
};

// export default ProfileCard
