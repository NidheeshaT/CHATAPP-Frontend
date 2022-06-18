import "./Nav.css"
import { useEffect, useState } from "react";



function Nav(){
	
	let none={
		"display":"none"
	}
	let fr={
		"position":"absolute",
		"flexDirection":"column",
		"display":"block",
		"width":"100%",
		"left":"0px",
		"top":"41.6px",
		"alignItems":"stretch"
	}
	const [smscreen,setScreen]=useState(1);
	const [ham,hamSet]=useState(0);
	let hamfunc=()=>{
		if(ham)
			hamSet(0);
		else
			hamSet(1);
	}
	useEffect(()=>{
		if(window.innerWidth<=425){
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
    <nav id="navbar">
		<div id="logo">WT</div>
		<div id="links">
			<div id="ham" onClick={hamfunc} style={smscreen?{}:none}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<ul style={smscreen?ham?fr:none:{}}>
				<li><a href="/">Chat</a> </li>
				<li><a href="/">About</a></li>	
				<li><a href="/">Login</a></li>	
			</ul>
		</div>
    </nav>

  )

}


export default Nav;