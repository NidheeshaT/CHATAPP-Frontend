import "./Dashboard.css"
import Profile from "./Profile.jsx";
import Chat from "./Chat.js"
import {useState} from "react"
import {Routes,Route} from "react-router-dom"
import Login from "./Login";

function Dashboard(props){

  const [profile,SetProfile]=useState({name:"Nidheesha",description:"Hello there Im using walkietalkie"})
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
    if(profile) {
      return(<Route path="profile" element={ <Profile profile={profile}/>}/>)
    }
    else{
      return(<Route path="profile" element={ <Login/>}/>)
    }
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
        <Routes>
            <Route path="/" element={<Chat/>}/>
            {Verify()}
        </Routes>
        {/* */}
      </section>
    </main>
  )
}



export default Dashboard;