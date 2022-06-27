import Dashboard from "../Dashboard";
import Profile from "./Profile"


function ProfilePage({sm,profile}){

  return (
    <Dashboard sm={sm} profile={profile} left={<></>} right={<Profile profile={profile}/>}/>
  )
}



export default ProfilePage;