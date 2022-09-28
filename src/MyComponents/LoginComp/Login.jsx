import { useState } from "react";
import { useContext } from "react";
import { profileContext } from "../../contexts/profile";
import { displayContext } from "../../contexts/display";
import {activate} from "../../contollers/socket";
import { newmessageContext } from "../../contexts/newMessage";
import fetchData from "../../contollers/fetch"

function Login(){

  const [newmessage,setNewMessage]=useContext(newmessageContext)
  const [profile,setProfile]=useContext(profileContext)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [display,setDisplay]=useContext(displayContext)

  const  verifyData= async (e)=>{
    e.preventDefault()
    let res=await fetchData("login",{email:email,password:password})

    if(res.error)
    {
      setDisplay({type:'r',msg:res.error})
    }
    else{
      setProfile(res)
      activate(newmessage,setNewMessage,setProfile);
    }

  }

  return (
    <>
        <section className="form">
            <form onSubmit={verifyData}>
                <div className="form-caption">LOGIN:</div>
                <div>
                  <label htmlFor="useremail">Email:
                  </label>
                  <input type="email" value={email} onChange={e=>{setEmail(e.target.value)}}
                   name="useremail" id="useremail" required/>
                </div>
                <div>
                  <label htmlFor="password">Password:
                  </label>
                  <input type="password" value={password} onChange={e=>{setPassword(e.target.value)}}
                   name="password" id="password" required />
                </div>
                <button className="button pointer" type="submit">Login</button>
            </form>
        </section>


    </>
  )
}

export default Login;