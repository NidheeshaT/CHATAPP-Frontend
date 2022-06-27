import Dashboard from "../Dashboard";
import Login from "./Login"


function LoginPage({sm,profile,setProfile}){

  return (
    <Dashboard sm={sm} left={<></>} right={<Login profile={profile} setProfile={setProfile}/>}/>
  )
}



export default LoginPage;