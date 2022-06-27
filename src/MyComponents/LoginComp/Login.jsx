import "./Login.css"
import { useState } from "react";
import {Navigate} from "react-router-dom"

function Login({profile,setProfile}){

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const  verifyData= async (e)=>{
    e.preventDefault()
    // setProfile({name:email,friends:["harry"]})
    // localStorage.setItem("profile", JSON.stringify({name:email,friends:["harry"]}))
    let res=await fetch("http://localhost/login")
    let k=await res.json()
    setProfile(k)

  }

  return (
    <>
        <section id="log">
            <form onSubmit={verifyData}>
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