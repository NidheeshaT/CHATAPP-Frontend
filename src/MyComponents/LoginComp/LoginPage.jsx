import Dashboard from "../Dashboard";
import Login from "./Login"


function LoginPage({smscreen,profile,setProfile}){

  return (
    <Dashboard sm={smscreen} left={<></>} right={<Login profile={profile} setProfile={setProfile}/>}/>
  )
}



export default LoginPage;