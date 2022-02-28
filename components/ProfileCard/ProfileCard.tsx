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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eius tempore, sed labore aliquam molestias, dolorum quasi ad repellendus voluptate iste laboriosam porro voluptatum rerum eum reiciendis adipisci perspiciatis id!
          Sit voluptas odit nesciunt ab voluptate enim quas optio dolorem, soluta id ad sequi beatae quasi magni laudantium architecto et ex distinctio eos consequatur placeat maiores repudiandae quaerat! Ipsam, ea?
        </p>
      </div>
    </div>
  );
};

// export default ProfileCard
