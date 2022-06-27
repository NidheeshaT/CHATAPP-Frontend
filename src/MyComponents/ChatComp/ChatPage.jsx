import Dashboard from "../Dashboard";
import Peoples from "./Peoples";
import Chats from "./Chats";



function ChatPage({sm,profile}){

  return (
    <Dashboard sm={sm} profile={profile} left={<Peoples profile={profile}/>} right={<Chats/>}/>
  )
}



export default ChatPage;