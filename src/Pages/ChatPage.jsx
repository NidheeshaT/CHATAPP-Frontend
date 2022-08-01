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


function ChatPage(){  
  const [view,ChangeView]=useState(()=>0)
  const [profile]=useContext(profileContext)
  const [search,setSearch]=useState(()=>'')

  return (
    <>  
      <Dashboard topleft={<InputBar btn='Search' value={search} setValue={setSearch}/>} topright={<Loading/>}  left={<List comp={Friend} render={profile.friends} ChangeView={ChangeView} empty={"No friends"}/>} right={view?<Chats view={view}/>:<NoChats/>}/>
    </>
  )
}



export default ChatPage;