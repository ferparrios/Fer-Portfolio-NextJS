import React, { useState, useEffect} from 'react'

export const useProfileCard = () => {
  const [profileImage, setProfileImage] = useState("")

  useEffect(() => {
    const profileFer = async () => {
      const res = await fetch('https://api.github.com/users/ferparrios')
      const data = await res.json()
      // console.log('Data Profile ', data.avatar_url)
      setProfileImage(data.avatar_url)
    }
    profileFer()
  }, [])
  


  return {
    profileImage
  }
}
