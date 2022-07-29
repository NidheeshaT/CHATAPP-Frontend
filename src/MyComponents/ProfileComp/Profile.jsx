import { useContext } from "react";
import { profileContext } from "../../contexts/profile";
import "./Profile.css"

function Profile(){
  const [profile]=useContext(profileContext)
  return (
    <>
      <section id="profile-page">
          <div id="img"></div>
          <h3>{profile.name}</h3>
		  <div><span>Description:</span>{profile.description}</div>
		  <div id="cont">
		  	<span>Usage info:</span>
			<div  id="info"></div>
		  </div>
      </section>

    </>
  )
}

export default Profile;