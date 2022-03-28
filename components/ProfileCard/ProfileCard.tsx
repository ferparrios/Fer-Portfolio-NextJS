import React,  {useEffect} from "react";
import { useProfileCard } from "./ProfileCardHooks";


export const ProfileCard = () => {

  const {
    profileImage
  } = useProfileCard()

  
  
  return (
    <div className="profile-card">
      <div className="profile-card-image-container">
        <img src={profileImage} className="profile-card-image" alt="..." />
      </div>
      <div className="profile-card-text-container">
        <h1 className="profile-card-title">Hello, I am Fer</h1>
        <p className="profile-card-text">
          Hello, I am Fer, I work as a frontend developer with over than 5 years of experience in web projects, currently I work with React and React Native. If you like my job please contact me in all social media like @ferparrios.
        </p>
      </div>
    </div>
  );
};

// export default ProfileCard
