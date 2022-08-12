import { useContext } from "react"
import { displayContext } from "../../contexts/display"
import { profileContext } from "../../contexts/profile"
import fetchData from "../../contollers/fetch"

function Request({ele,control}){

  const [display,setDisplay]=useContext(displayContext)
  const [profile,setProfile]=useContext(profileContext)
  const requestAccept= async ()=>{
    let res=await fetchData("requests/accept",{friendname:ele.nickname})
    if(res.error)
    {
      setDisplay({type:'r',msg:res.error})
    }
    else{
      setDisplay({type:'g',msg:"Success"})
      setProfile(res)
    }
  }
  const requestCancel= async()=>{
    let endpoint=control==='sent'?'cancel':'reject'
    let res=await fetchData(`requests/${endpoint}`, {friendname:ele.nickname})

    if(res.error)
    {
      setDisplay({type:'r',msg:res.error})
    }
    else{
      setDisplay({type:'g',msg:"Success"})
      setProfile(res)
    }
  }

  return (
    <>
    <div className="card border-bottom">
        <div className="card">
          <h5 id="name">{ele.nickname}</h5>
        </div>
        {control==='sent'?<></>
        :<button onClick={requestAccept} className="button pointer" style={{marginRight:'3px'}}>Accept</button>
        }
        <button onClick={requestCancel} className="button pointer">{control==='sent'?"Cancel":"Reject"}</button>
    </div>
    </>
  )
}
  
  export default Request;