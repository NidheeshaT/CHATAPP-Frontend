import "./Chat.css"
import {React,useEffect,useState} from "react"
import { io } from "socket.io-client"
const socket =io("http://localhost")

function Chat(){

  let scroll={
    "overflow-y ":"scroll"
  }
  const [messages,setMessages]=useState([]);
  const [message,setMessage]=useState("");

  useEffect(()=>{
    socket.on("m",(data)=>{
      setMessages((prev)=>[...prev,data]);
      console.log("hi")
    })
  },[])

  const getMessage= (e)=>{
    e.preventDefault()
    setMessages((prev)=>[...prev,{value:message,al:"right"}]);
    setMessage("")
    socket.emit("message",{value:message,al:"left"});
  }
  useEffect(()=>{
    document.getElementById("chats").scrollTop=document.getElementById("chats").scrollHeight
  },[messages])
  return (
    <>
        <div id="chat-section">
            <div id="chat-wrap">
              <div id="chats" style={scroll}>
                {messages.map((ms,key)=>{
                  return(<div className={ms.al} key={key}>{ms.value}</div>)
                })}
              </div>

            </div>
            <form id="message" onSubmit={getMessage}>
                <input type="text" id="ms" value={message} onChange={event=>{setMessage(event.target.value)}} required/>
                <button type="submit" id="btn">Send</button>
            </form>
        </div>

    </>
  )
}

export default Chat;