import "./Chats.css"
import {React,useContext,useEffect,useState} from "react"
import InputBar from "../../utilities/InputBar"
import socket from "../../contollers/socket"
import {messageContext} from "../../contexts/messageContext"
import {newmessageContext} from "../../contexts/newMessage"
import DOMPurify from "dompurify"

function Chat({view}){

  const [messages,setMessages]=useContext(messageContext);
  const [message,setMessage]=useState("");
  const [curchat,setCurchat]=useState([])
  const [newmessage,setNewMessage]=useContext(newmessageContext)


  useEffect(()=>{
    document.getElementById("chats").scrollTop=document.getElementById("chats").scrollHeight
  },[curchat])

  useEffect(()=>{
    if(view && messages[view])
      setCurchat(()=>messages[view])
  },[view,messages] )

  useEffect(()=>{
    if(view && messages[view])
    {
      setCurchat((prev)=>messages[view])
    }
  },[messages,view])


  useEffect(()=>{
    if(newmessage)
    {
      const [from,data]=newmessage
      let temp={}
      temp[from]=messages[from]?[...messages[from],data]:[data]
      setMessages((prev)=>({...prev,...temp}));
    }
  },[newmessage])

  const getMessage=(e)=>{
    e.preventDefault()
    if(!message)
      return
    let l=message
    console.log(l)
    l=l.trimEnd()
    console.log(l)
    const br="<div><br></div>"
    let j=br.length-1;
    for(let i=l.length-1;i>=0;i--)
    {
      if(l[i]===br[j])
      {
        j--;
      }
      else
      {
        break
      }
      if(j===-1)
      {
        j=br.length-1
        l=l.slice(0,i)
      }
    }
    console.log(l)
    const data={message:l,al:"right"}
    let temp={}
    temp[view]=messages[view]?[...messages[view],data]:[data]
    setMessages((prev)=>({...prev,...temp}));
    socket.emit("message1",view,l);
    setMessage("")
    document.getElementById("k").innerHTML=""
  }

  return (
    <>
        <div className="wh-100" id="chat-section">
            <div id="chat-wrap">
              <div className="wh-100" id="chats">
                {curchat?curchat.map((ms,key)=>{
                  return(<div className={ms.al} key={key} dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(ms.message)}}></div>)
                }):<h1>Type to chat</h1>}
              </div>

            </div>
            <form onSubmit={getMessage} style={{width:"100%",height:"100%",display:"grid",gridTemplateColumns:"1fr max-content",alignItems: 'end'}}>
              <span id="k" className="bg-white color-primary br-5" style={{minHeight:'40px',wordBreak:"break-word",width:"100%",fontSize: "18px",padding:"1px"}} contentEditable  
              onInput={(e)=>{setMessage(DOMPurify.sanitize(e.target.innerHTML))}}>
              </span>
              <button className="button pointer" style={{height:'40px'}} type="submit">Send</button>
            </form>
        </div>

    </>
  )
}

export default Chat;