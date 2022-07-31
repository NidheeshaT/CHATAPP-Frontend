import Dashboard from '../utilities/DashboardComp/Dashboard'
import Register from "../MyComponents/RegisterComp/Register"


function RegisterPage(){

  return (
    <Dashboard right={<Register/>}/>
  )
}



export default RegisterPage;