import "./Peoples.css"
import People from "./People"

function Peoples({profile}){
    return(
    <>
            {
        profile&& profile.friends?
        profile.friends.map((friend,key)=>{
            return(<People name={friend} key={key}/>)
        })
        :<div style={{textAlign:"center"}}>No friends</div>
      }
      <div style={{height:"50px",width:"50px",backgroundColor:"blue",margin:"auto",borderRadius:"50%"}}></div>
    </>
    )

}

export default Peoples;