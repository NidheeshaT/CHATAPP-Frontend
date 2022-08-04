import { useContext, useEffect } from "react"
import { displayContext } from "../contexts/display"

function Alert()
{
    const [display,setDisplay]=useContext(displayContext)

    useEffect(()=>{
        if(display)
        {

            setTimeout(()=>{setDisplay(()=>{})},5000)
        }
    },[display])

    return(<>
        {display?<div className="display-box" style={display.type==='r'?{background:'red'}:{background:'green'}}>{display.msg}</div>:<></>}
    </>)
}

export default Alert