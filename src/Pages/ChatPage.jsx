import Dashboard from "../utilities/DashboardComp/Dashboard";
import Peoples from "../MyComponents/ChatComp/Peoples";
import Chats from "../MyComponents/ChatComp/Chats";
import NoChats from "../MyComponents/ChatComp/NoChats";
import { useState } from "react";


function ChatPage(){  
  const [view,ChangeView]=useState(()=>0)

  return (
    <>
    
      {view?<Dashboard left={<Peoples view={view} ChangeView={ChangeView}/>} right={<Chats view={view}/>}/>
      : 
      <Dashboard left={<Peoples view={view} ChangeView={ChangeView}/>} right={<NoChats/>}/>}
    </>
  )
}



export default ChatPage;