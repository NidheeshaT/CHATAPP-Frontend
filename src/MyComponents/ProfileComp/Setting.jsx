import fetchData from "../../contollers/fetch"
import { profileContext } from "../../contexts/profile"
import { useContext } from "react"

function Setting({ele}){
    
    const [profile,setProfile]=useContext(profileContext)
    const run=async()=>{
        const res=await fetchData("logout",{})
        if(!res.error)
        {
            setProfile(()=>0)
        }
    }

    return (<>
        <div className="card border-bottom pointer hover-secondary" onClick={run}>
        <div className="card">{ele}
        </div>
    </div>
    </>)
}

export default Setting