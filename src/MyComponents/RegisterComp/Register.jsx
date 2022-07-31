import { useState } from "react";
import {Navigate} from "react-router-dom"
import { useContext } from "react";
import { profileContext } from "../../contexts/profile";

function Register(){

  const [profile,setProfile]=useContext(profileContext)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [nickname,setNickname]=useState("")
  const [Name,setName]=useState("")
  const [next,setNext]=useState(()=>0)

  const  verifyData= async (e)=>{
    e.preventDefault()
    // // setProfile({name:email,friends:["harry"]})
    // // localStorage.setItem("profile", JSON.stringify({name:email,friends:["harry"]}))
    // let res=await fetch("http://localhost:80/login", {
    //   method: 'POST',
    //   mode:"cors",
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //     "Access-Control-Allow-Origin":true
    //   },
    //   body: JSON.stringify({email:email,password:password}),
    //   credentials:"include"
    // })

    // console.log(res)

    // let k=await res.json()
    // if(k.error)
    // {
    //   console.log(k)
    // }

    // else{
    //   setProfile(k)
    // }

  }

  const verifyNickname=(e)=>{
    e.preventDefault()
    setNext(1)
  }
  const verifyEmail=(e)=>{
    e.preventDefault()
    setNext(2)
  }

  return (
    <>
        <section className="form">
          <form style={next===0?{}:{display:"none"}} onSubmit={verifyNickname}>
                  <div className="form-caption">Register:</div>
                  <div>
                    <label htmlFor="nickname">Nickname:
                    </label>
                    <input type="text" value={nickname} onChange={e=>{setNickname(e.target.value)}}
                    name="nickname" id="nickname" required />
                  </div>
                  <button type="submit">Next</button>
          </form>
          <form style={next===1?{}:{display:"none"}} onSubmit={verifyEmail}>
                  <div className="form-caption">Register:</div>
                  <div>
                    <label htmlFor="useremail">Email:
                    </label>
                    <input type="email" value={email} onChange={e=>{setEmail(e.target.value)}}
                    name="useremail" id="useremail" required/>
                  </div>
                  <button type="submit">Next</button>
          </form>
            <form style={next===2?{}:{display:"none"}} onSubmit={verifyData}>
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
                  <input type="password" value={password} onChange={e=>{setPassword(e.target.value)}}
                   name="password" id="password" required />
                </div>
                <div>
                  <label htmlFor="cpassword">Password:
                  </label>
                  <input type="password" value={password} onChange={e=>{setPassword(e.target.value)}}
                   name="cpassword" id="cpassword" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </section>


    </>
  )
}

export default Register;