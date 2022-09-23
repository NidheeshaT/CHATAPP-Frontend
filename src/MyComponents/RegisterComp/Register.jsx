import { useState } from "react";
import {Navigate} from "react-router-dom"
import { useContext } from "react";
import { profileContext } from "../../contexts/profile";
import { displayContext } from "../../contexts/display";
import fetchData from "../../contollers/fetch"
import socket from "../../contollers/socket";

function Register(){

  const [profile,setProfile]=useContext(profileContext)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [cpassword,setcPassword]=useState("")
  const [nickname,setNickname]=useState("")
  const [Name,setName]=useState("")
  const [code,setCode]=useState()
  const [verified,setVerified]=useState("")

  const [display,setDisplay]=useContext(displayContext)
  const [next,setNext]=useState(()=>0)

  const  verifyData= async (e)=>{
    e.preventDefault()
    if(cpassword!==password)
    {
      setDisplay({type:'r',msg:'Passwords are not matching'})
      return;
    }
    let res=await fetchData("register",{nickname:nickname,name:Name,email:email,password:password})
    if(res.error)
    {
      setDisplay({type:'r',msg:res.error})
    }
    else{
      socket.connect()
      setProfile(res)
    }

  }

  const verifyNickname=async (e)=>{
    e.preventDefault()
    let res=await fetchData("checknickname",{nickname:nickname})
    if(res.error)
    {
      setDisplay({type:'r',msg:res.error})
    }
    else{
      setNext((prev)=>prev+1)
    }

  }
  const verifyEmail=async (e)=>{
    e.preventDefault()
    let res=await fetchData("checkemail",{email:email})
    if(res.error)
    {
      setDisplay({type:'r',msg:res.error})
    }
    else{
      setNext((prev)=>prev+1)
    }
  }

  const verifyCode=async (e)=>{
    e.preventDefault()
    let res=await fetchData("checkcode",{email:email,code:code})
    if(res.error)
    {
      setDisplay({type:'r',msg:res.error})
    }
    else{
      setNext((prev)=>prev+1)
    }
  }
  const resendCode=async ()=>{
    let res=await fetchData("checkemail",{email:email})
    if(res.error)
    {
      setDisplay({type:'r',msg:res.error})
    }
  }

  return (
    <>
        <section className="form">
        {next===0?
        <form onSubmit={verifyNickname}>
          <div className="form-caption">Register:</div>
          <div>
            <label htmlFor="nickname">Nickname:
            </label>
            <input type="text" value={nickname} onChange={e=>{setNickname(e.target.value)}} minLength='5'
            name="nickname" id="nickname" required />
          </div>
          <button className="button pointer" type="submit">Next</button>
          </form>:<></>
          }
          {next===1?<form onSubmit={verifyEmail}>
                  <div className="form-caption">Register:</div>
                  <div>
                    <label htmlFor="useremail">Email:
                    </label>
                    <input type="email" value={email} onChange={e=>{setEmail(e.target.value)}}
                    name="useremail" id="useremail" required/>
                  </div>
                  <button className="button pointer" type="submit">Next</button>
                  <button className="button pointer" type="submit" onClick={e=>{e.preventDefault();setNext(p=>p-1)}}>Back</button>
          </form>:<></>}
          {next===2?<form onSubmit={verifyCode}>
                  <div className="form-caption">Register:</div>
                  <div>
                    <label htmlFor="useremail">Code:
                    </label>
                    <input type="number" value={code} min={111111} max={999999} onChange={e=>{setCode(e.target.value)}}
                    name="useremail" id="useremail" required/>
                  </div>
                  <button className="button pointer" type="submit">Next</button>
                  <button className="button pointer" type="submit" onClick={e=>{e.preventDefault();resendCode()}}>Resend Code</button>
                  <button className="button pointer" type="submit" onClick={e=>{e.preventDefault();setNext(p=>p-1)}}>Back</button>
          </form>:<></>}
          {next===3?<form onSubmit={verifyData}>
                <div className="form-caption">Register:</div>
                <div>
                  <label htmlFor="name">Name:
                  </label>
                  <input type="text" value={Name} onChange={e=>{setName(e.target.value)}}
                   name="Name" id="Name" required />
                </div>
                <div>
                  <label htmlFor="password">Password:
                  </label>
                  <input type="password" value={password} onChange={e=>{setPassword(e.target.value)}} minLength='8'
                   name="password" id="password" required />
                </div>
                <div>
                  <label htmlFor="cpassword">Password:
                  </label>
                  <input type="password" value={cpassword} onChange={e=>{setcPassword(e.target.value)}}
                   name="cpassword" id="cpassword" required />
                </div>
                <button className="button pointer" type="submit">Submit</button>
                <button className="button pointer" type="submit" onClick={e=>{e.preventDefault();setNext(p=>p-1)}}>Back</button>
            </form>:<></>}
        </section>


    </>
  )
}

export default Register;