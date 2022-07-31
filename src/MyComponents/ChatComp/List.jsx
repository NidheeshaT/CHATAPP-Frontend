import People from "./People"
import { profileContext } from "../../contexts/profile"
import { useContext } from "react"


function Peoples({render,comp:Comp,ChangeView,empty}){
    return(
    <>
            {
        render&&render!==[]?
        render.map((ele,key)=>{
            return( <Comp name={ele} key={key} ChangeView={ChangeView}/>)
        })
        :<div style={{textAlign:"center"}}>{empty}</div>
      }
    </>
    )

}

export default Peoples;