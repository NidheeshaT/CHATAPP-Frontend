import "./Chats.css"
import {React,useContext,useEffect,useState} from "react"
import InputBar from "../../utilities/InputBar"
import socket from "../../contollers/socket"
import {messageContext} from "../../contexts/messageContext"

function Chat({view}){

  const [messages,setMessages]=useContext(messageContext);
  const [message,setMessage]=useState("");
  const [curchat,setCurchat]=useState([{}])

  useEffect(()=>{
    socket.on("message",(from,data)=>{
      setMessages((prev)=>{
        if(!prev[from])
        {
          prev[from]=[data]
        }
        else{
          prev[from].push(data)
        }
        return prev
      });
      
      if(from===view)
      {
        setCurchat((prev)=>{
        if(prev)
          return [...prev,data]
        else
          return [data]})
      }
    })
  },[])

  const getMessage=(e)=>{
    e.preventDefault()
    setMessages((prev)=>{
      const data={message:message,al:"right"}
      if(!prev[view])
      {
        prev[view]=[data]
      }
      else{
        prev[view].push(data)
      }
      return prev
    });
    setCurchat((prev)=>
    {
      if(prev)
      return [...prev,{message:message,al:"right"}]
      else
        return [{message:message,al:"right"}]
    }
    
    )
    socket.emit("message",view,message);
    setMessage("")
  }
  useEffect(()=>{
    document.getElementById("chats").scrollTop=document.getElementById("chats").scrollHeight
  },[curchat])

  useEffect(()=>{
    let temp=[]
    messages[view]?temp=messages[view]:temp=[]
    setCurchat(()=>temp)
  },[view] )
  return (
    <>
        <div id="chat-section">
            <div id="chat-wrap">
              <div id="chats">
                {curchat?curchat.map((ms,key)=>{
                  return(<div className={ms.al} key={key}>{ms.message}</div>)
                }):<h1>Type to chat</h1>}
              </div>

            </div>
            <InputBar btn='Send' result={getMessage} value={message} setValue={setMessage}/>
        </div>

    </>
  )
}

export default Chat;