import Dashboard from "../Dashboard";
import Profile from "./Profile"


function ProfilePage({smscreen,profile}){

  return (
    <Dashboard sm={smscreen} profile={profile} left={<></>} right={<Profile profile={profile}/>}/>
  )
}



export default ProfilePage;