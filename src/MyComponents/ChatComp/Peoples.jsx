import "./Peoples.css"
import People from "./People"
import { profileContext } from "../../contexts/profile"
import { useContext } from "react"


function Peoples({ChangeView}){
    const [profile]=useContext(profileContext)
    console.log(profile)
    return(
    <>
            {
        profile&& profile.friends&& profile.friends!==[]?
        profile.friends.map((friend,key)=>{
            return(<People name={friend} key={key} ChangeView={ChangeView}/>)
        })
        :<div style={{textAlign:"center"}}>No friends</div>
      }
      <div style={{height:"50px",width:"50px",backgroundColor:"blue",margin:"auto",borderRadius:"50%"}}></div>
    </>
    )

}

export default Peoples;