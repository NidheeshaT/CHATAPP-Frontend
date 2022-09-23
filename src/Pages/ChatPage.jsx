import Dashboard from "../utilities/DashboardComp/Dashboard";
import List from "../utilities/List";
import Friend from "../MyComponents/ChatComp/Friend";
import Chats from "../MyComponents/ChatComp/Chats";
import NoChats from "../MyComponents/ChatComp/NoChats";
import { useState } from "react";
import InputBar from "../utilities/InputBar";
import { useContext } from "react";
import { profileContext } from "../contexts/profile";
import Loading from "../utilities/Loading";
import { useEffect } from "react";
import socket from "../contollers/socket";
import { messageContext } from "../contexts/messageContext";

function ChatPage(){  
  const [view,ChangeView]=useState(()=>null)
  const [profile]=useContext(profileContext)
  const [search,setSearch]=useState(()=>'')
  function find(e)
  {
      e.preventDefault()
  }

  return (
    <>  
      <Dashboard topleft={<InputBar result={find} btn='Search' value={search} setValue={setSearch}/>} topright={<div>{view}</div>}  left={<List comp={Friend} render={profile.friends} ChangeView={ChangeView} empty={"No friends"}/>} right={view?<Chats view={view}/>:<NoChats/>}/>
    </>
  )
}



export default ChatPage;