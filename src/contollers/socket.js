import { io } from "socket.io-client"

const socket =io("http://localhost:80",
{
  withCredentials:true,
  mode:"cors", headers: {
  "Access-Control-Allow-Origin":true
}, 
credentials:"include",
autoConnect:false
})

export default socket