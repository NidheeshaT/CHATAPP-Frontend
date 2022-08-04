import { useContext } from "react";
import { profileContext } from "../../contexts/profile";
import "./Profile.css"

function Profile(){
  const [profile]=useContext(profileContext)
  return (
    <>
      <section id="profile-page">
          <div id="img"></div>
          <div className='cont'><h3>Name:</h3><span>{profile.name}</span></div>
          <div className='cont'><h3>Nickname:</h3><span>{profile.nickname}</span></div>
          <div className='cont'><h3>Email:</h3><span>{profile.email}</span></div>
          <div className='cont' style={{alignItems:"center"}}><h3>Description:</h3><span>{profile.description}</span></div>
      </section>

    </>
  )
}

export default Profile;