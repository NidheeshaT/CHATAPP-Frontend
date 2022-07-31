import Dashboard from '../utilities/DashboardComp/Dashboard'
import Login from "../MyComponents/LoginComp/Login"


function LoginPage(){

  return (
    <Dashboard right={<Login/>}/>
  )
}



export default LoginPage;