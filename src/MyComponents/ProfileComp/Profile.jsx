import "./Profile.css"

function Profile({profile}){
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