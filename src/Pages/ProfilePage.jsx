import Dashboard from "../utilities/DashboardComp/Dashboard";
import Profile from "../MyComponents/ProfileComp/Profile"


function ProfilePage(){

  return (
    <Dashboard left={<></>} right={<Profile/>}/>
  )
}



export default ProfilePage;