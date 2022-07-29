import "./Login.css"
import { useState } from "react";
import {Navigate} from "react-router-dom"
import { useContext } from "react";
import { profileContext } from "../../contexts/profile";

function Login(){

  const [profile,setProfile]=useContext(profileContext)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const  verifyData= async (e)=>{
    e.preventDefault()
    // setProfile({name:email,friends:["harry"]})
    // localStorage.setItem("profile", JSON.stringify({name:email,friends:["harry"]}))
    let res=await fetch("http://localhost:80/login", {
      method: 'POST',
      mode:"cors",
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        "Access-Control-Allow-Origin":true
      },
      body: JSON.stringify({email:email,password:password}),
      credentials:"include"
    })

    console.log(res)

    let k=await res.json()
    if(k.error)
    {
      console.log(k)
    }

    else{
      setProfile(k)
    }

  }

  return (
    <>
        <section id="log">
            <form onSubmit={verifyData}>
                <div style={{marginTop:'0'}}>LOGIN:</div>
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
                <button type="submit">Login</button>
            </form>
        </section>


    </>
  )
}

export default Login;