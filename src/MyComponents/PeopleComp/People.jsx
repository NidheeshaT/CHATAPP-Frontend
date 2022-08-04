import { useContext } from "react"
import { displayContext } from "../../contexts/display"
import { profileContext } from "../../contexts/profile"
import fetchData from "../../contollers/fetch"


function People({ele}){

    const [profile,setProfile]=useContext(profileContext)
    const [display,setDisplay]=useContext(displayContext)

    const requestSend= async (e)=>{
      e.preventDefault()
      let res=await fetchData("requests/send",{friendname:ele.nickname})
      if(res.error)
      {
        setDisplay({type:'r',msg:res.error})
      }
  
      else{
        setProfile(res)
        setDisplay({type:'g',msg:"Success"})
      }
    }

  return (
    <>
    <div className="card border-bottom">
        <div className="card">
          <h5 id="name">{ele.nickname}</h5>
          <i>{ele.description}</i>
        </div>
        <button onClick={requestSend} className="small-button pointer">Add</button>
    </div>
    </>
  )
}

export default People;