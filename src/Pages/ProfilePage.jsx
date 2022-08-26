import Dashboard from "../utilities/DashboardComp/Dashboard";
import Profile from "../MyComponents/ProfileComp/Profile"
import Setting from "../MyComponents/ProfileComp/Setting";
import List from "../utilities/List";


function ProfilePage(){

  return (
    <Dashboard right={<Profile/>} left={<List render={["Logout"]} comp={Setting}/>}/>
  )
}



export default ProfilePage;