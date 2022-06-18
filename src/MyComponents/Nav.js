import "./Nav.css"
import { useEffect, useState } from "react";



function Nav(props){
	
	let none={
		"display":"none"
	}
	let show={
		"position":"absolute",
		"flexDirection":"column",
		"display":"block",
		"width":"100%",
		"left":"0px",
		"top":"41.6px",
		"alignItems":"stretch"
	}
	const [ham,hamSet]=useState(0);
	let hamfunc=()=>{
		if(ham)
			hamSet(0);
		else
			hamSet(1);
	}


  return (
    <nav id="navbar">
		<div id="logo">WT</div>
		<div id="links">
			<div id="ham" onClick={hamfunc} style={props.sm?{}:none}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<ul style={props.sm?ham?show:none:{}}>
				<li><a href="/">Chat</a> </li>
				<li><a href="/">About</a></li>	
				<li><a href="/">Login</a></li>	
			</ul>
		</div>
    </nav>

  )

}


export default Nav;