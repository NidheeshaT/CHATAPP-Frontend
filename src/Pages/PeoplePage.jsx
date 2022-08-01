import Dashboard from '../utilities/DashboardComp/Dashboard'
import List from '../utilities/List'
import People from '../MyComponents/PeopleComp/People'
import Inputbar from '../utilities/InputBar'
import Request from '../MyComponents/PeopleComp/Request'
import ReqHead from '../MyComponents/PeopleComp/ReqHead'
import { useState } from 'react'
function PeoplePage()
{
    const [scr,setScr]=useState(()=>'')
    const [head,setHead]=useState(()=>'sent')
    function run(e)
    {
        e.preventDefault()
    }

    return (
        <Dashboard topright={<Inputbar btn='Search' result={run} value={scr} setValue={setScr}/>} 
        right={<List render={[{nickname:'hello',description:"hello"},{nickname:'hello',description:"hello"}]} comp={People}/>}
        left={<List render={head==='sent'?[{nickname:'hello',description:"hello"}]:[{nickname:'world',description:"world"}]} comp={Request}/>}
        topleft={<ReqHead head={head} setHead={setHead}/>}
        />
    )
}

export default PeoplePage