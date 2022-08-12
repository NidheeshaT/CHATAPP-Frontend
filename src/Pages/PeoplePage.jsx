import Dashboard from '../utilities/DashboardComp/Dashboard'
import List from '../utilities/List'
import People from '../MyComponents/PeopleComp/People'
import Inputbar from '../utilities/InputBar'
import Request from '../MyComponents/PeopleComp/Request'
import ReqHead from '../MyComponents/PeopleComp/ReqHead'
import { useState } from 'react'
import { useContext } from 'react'
import { profileContext } from '../contexts/profile'
import { displayContext } from "../contexts/display"
import fetchData from '../contollers/fetch'

function PeoplePage()
{
    const [profile,setProfile]=useContext(profileContext)
    const [display,setDisplay]=useContext(displayContext)
    const [scr,setScr]=useState(()=>'')
    const [head,setHead]=useState(()=>'sent')
    const [people,setPeople]=useState(()=>[])
    const  run= async (e)=>{
        e.preventDefault()
        let res=await fetchData("people", {username:scr})

        if(res.error)
        {
            setDisplay({type:'r',msg:res.error})
        }
        else{
            setPeople(res)
        }
    }

    return (
        <Dashboard topright={<Inputbar btn='Search' result={run} value={scr} setValue={setScr}/>} 
        right={<List render={people} comp={People}/>}
        left={<List render={head==='sent'?profile.requestSent:profile.requestRecieved} control={head} comp={Request}/>}
        topleft={<ReqHead head={head} setHead={setHead}/>}
        />
    )
}

export default PeoplePage