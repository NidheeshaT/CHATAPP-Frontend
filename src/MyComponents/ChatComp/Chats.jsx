import "./Chats.css"
import {React,useEffect,useState} from "react"
import { io } from "socket.io-client"
import InputBar from "../../utilities/InputBar"
const socket =io("http://localhost")

function Chat({view}){

  const [messages,setMessages]=useState([{name:1,messages:[]}]);
  const [message,setMessage]=useState("");
  const [curchat,setCurchat]=useState([{}])

  useEffect(()=>{
    socket.on("m",(getData)=>{
      const name=getData.name
      setMessages((prev)=>{
        let i=prev.findIndex((ele)=>ele.name=name)
        if(i!==-1)
        {
          prev[i].messages.push(getData.data)
        }
        return prev
      });
      
      if(name===view)
      {
        setCurchat((prev)=>{
        if(prev)
          return [...prev,getData.data]
        else
          return [getData.data]})
      }
    })
  },[])

  const getMessage=(e)=>{
    e.preventDefault()
    setMessages((prev)=>{
      let i=prev.findIndex((ele)=>ele.name=view)
        if(i!==-1)
        {
          prev[i].messages.push({message:message,al:"right"})
        }
        return prev
    });
    setCurchat((prev)=>
    {
      if(prev)
      return [...prev,{value:message,al:"right"}]
      else
        return [{value:message,al:"right"}]}
    
    )
    setMessage("")
    socket.emit("message",message);
  }
  useEffect(()=>{
    document.getElementById("chats").scrollTop=document.getElementById("chats").scrollHeight
  },[curchat])

  useEffect(()=>{
    let temp=[]
    messages.map((ele)=>ele.name===view?temp=ele.name.messages:0)
    console.log(messages,view)
    setCurchat(()=>temp)
  },[view] )
  return (
    <>
        <div id="chat-section">
            <div id="chat-wrap">
              <div id="chats">
                {curchat?curchat.map((ms,key)=>{
                  return(<div className={ms.al} key={key}>{ms.value}</div>)
                }):<h1>Type to chat</h1>}
              </div>

            </div>
            <InputBar btn='Send' result={getMessage} value={message} setValue={setMessage}/>
        </div>

    </>
  )
}

export default Chat;