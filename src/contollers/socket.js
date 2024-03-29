import { io } from "socket.io-client"
import fetchData from "./fetch"

const url=process.env.REACT_APP_ENV==="production"?process.env.REACT_APP_BACKEND_URL:"http://localhost"

const socket =io(url,
{
  withCredentials:true,
  mode:"cors", headers: {
  "Access-Control-Allow-Origin":true
}, 
credentials:"include",
autoConnect:false
})

function activate(newmessage,setNewMessages,setProfile)
{
  socket.connect()
  socket.on("message",(from,data)=>{
    setNewMessages(()=>[from,data]);
  })
  socket.on("refetch",async ()=>{
    const res=await fetchData("info",{})
    if(!res.error)
    {
      setProfile((prev)=>{ return {...prev,...res} })
    }
  })
}


export {activate}
export default socket