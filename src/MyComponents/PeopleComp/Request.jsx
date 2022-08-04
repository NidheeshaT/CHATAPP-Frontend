import { useContext } from "react"
import { displayContext } from "../../contexts/display"
import fetchData from "../../contollers/fetch"

function Request({ele,control}){

  const [display,setDisplay]=useContext(displayContext)
  const requestAccept= async ()=>{
    let res=await fetchData("requests/accept",{friendname:ele.nickname})
    if(res.error)
    {
      setDisplay({type:'r',msg:res.error})
    }
    else{
      setDisplay({type:'g',msg:"Success"})
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
    }
  }

  return (
    <>
    <div className="card border-bottom">
        <div className="card">
          <h5 id="name">{ele.nickname}</h5>
        </div>
        {control==='sent'?{}:
        <button onClick={requestAccept} className="small-button pointer" style={{marginRight:'3px'}}>Accept</button>}
        <button onClick={requestCancel} className="small-button pointer">Cancel</button>
    </div>
    </>
  )
}
  
  export default Request;