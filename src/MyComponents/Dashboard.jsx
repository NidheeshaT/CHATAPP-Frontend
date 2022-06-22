import "./Dashboard.css"
import Profile from "./Profile.jsx";
import Peoples from "./Peoples";

import {useState} from "react"
import {Routes,Route} from "react-router-dom"
import Login from "./Login";
import { render } from "@testing-library/react";

function Dashboard(props){

  let none={
    "display":"none"
  }
  let blk={
    "backgroundColor":"black"
  }
  let hamStyle={
    "position":"absolute",
    "top":"-45px"
  }
  let show={
		"position":"absolute",
		"width":"100%",
	}
  const [ham,hamSet]=useState(0);
	let hamfunc=()=>{
		if(ham)
			hamSet(0);
		else
			hamSet(1);
	}
  function Verify(){
    if(props.profile) {
      return(<Route path="profile" element={ <Profile profile={props.profile}/>}/>)
    }
    else{
      return(<Route path="profile" element={ <Login/>}/>)
    }
  }
  function render(ele)
  {
    return(ele)
  }
  return (
    <main>
      <div id="ham" onClick={hamfunc} style={props.sm?hamStyle:none}>
				<span style={blk}></span>
				<span style={blk}></span>
				<span style={blk}></span>
			</div>
      <aside id="side-bar" style={props.sm?ham?show:none:{}}>
        {render(props.left)}
      </aside>
      <section id="main-bar">
        {render(props.right)}
      </section>
    </main>
  )
}



export default Dashboard;