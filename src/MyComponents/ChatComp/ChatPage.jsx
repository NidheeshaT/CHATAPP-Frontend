import Dashboard from "../Dashboard";
import Peoples from "./Peoples";
import Chats from "./Chats";



function ChatPage({smscreen,profile}){

  return (
    <Dashboard sm={smscreen} profile={profile} left={<Peoples profile={profile}/>} right={<Chats/>}/>
  )
}



export default ChatPage;