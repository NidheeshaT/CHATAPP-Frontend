import "./Dashboard.css"
import Profile from "./Profile.jsx";
import Chat from "./Chat.js"
import {useState,useEffect} from "react"

function Dashboard(props){

  let none={
    "display":"none"
  }
  let block={
    "display":"block"
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


  return (
    <main>
      <div id="ham" onClick={hamfunc} style={props.sm?hamStyle:none}>
				<span style={blk}></span>
				<span style={blk}></span>
				<span style={blk}></span>
			</div>
      <aside id="side-bar" style={props.sm?ham?show:none:{}}>

      </aside>
      <section id="main-bar">
        <Chat/>
        {/* <Profile/> */}
      </section>
    </main>
  )
}

export default Dashboard;