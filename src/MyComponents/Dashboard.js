import "./Dashboard.css"
import Profile from "./Profile.jsx";
import {useState,useEffect} from "react"

function Dashboard(){

  let none={
    "display":"none"
  }

  const [smscreen,setScreen]=useState(1);
  useEffect(()=>{
		if(window.innerWidth<=550){
			setScreen(1);
		}	
		else{
			setScreen(0);
		}
		window.addEventListener("resize",()=>{
			if(window.innerWidth<=550){
				setScreen(1);
			}	
			else{
				setScreen(0);
			}
		})
	},[])
  return (
    <main>
      <aside id="side-bar" style={smscreen?none:{}}>

      </aside>
      <section id="main-bar">
        {/* <Chat/> */}
        <Profile/>
      </section>
    </main>
  )
}

export default Dashboard;