import Dashboard from '../utilities/DashboardComp/Dashboard'
import Login from "../MyComponents/LoginComp/Login"


function LoginPage(){

  return (
    <Dashboard left={<></>} right={<Login/>}/>
  )
}



export default LoginPage;