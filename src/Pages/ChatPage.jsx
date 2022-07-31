import Dashboard from "../utilities/DashboardComp/Dashboard";
import List from "../utilities/List";
import People from "../MyComponents/ChatComp/People";
import Chats from "../MyComponents/ChatComp/Chats";
import NoChats from "../MyComponents/ChatComp/NoChats";
import { useState } from "react";
import SearchBar from "../utilities/Searchbar";
import { useContext } from "react";
import { profileContext } from "../contexts/profile";


function ChatPage(){  
  const [view,ChangeView]=useState(()=>0)
  const [profile]=useContext(profileContext)

  return (
    <>  
      <Dashboard topleft={<SearchBar/>}  left={<List comp={People} render={profile.friends} ChangeView={ChangeView} empty={"No friends"}/>} right={view?<Chats view={view}/>:<NoChats/>}/>
    </>
  )
}



export default ChatPage;