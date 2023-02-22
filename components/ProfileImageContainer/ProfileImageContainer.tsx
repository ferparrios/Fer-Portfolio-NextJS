import { useProfileCard } from "@components/ProfileCard/ProfileCardHooks";
import React from "react";

export const ProfileImageContainer = () => {
  const { profileImage } = useProfileCard();

  return (
    <div
      // style={{
      //   width: "20rem",
      //   borderWidth: 2,
      //   borderColor: "red",
      //   borderRadius: 50,
      //   margin: 50,
      // }}
      className="columns"
    >
      <img
        src={profileImage}
        style={{
          width: "100%", 
        }}
        alt="..."
      />
    </div>
  );
};
