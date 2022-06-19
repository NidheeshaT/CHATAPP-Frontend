import "./Nav.css"
import { useState } from "react";
import {Link,Outlet} from "react-router-dom"



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
		"aLinkgnItems":"stretch"
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
				<li>
					<Link to="/">Chat</Link> 
				</li>
				<li>
					<Link to="/">About</Link> 
				</li>
				<li>
					<Link to="/profile">Login</Link>	
				</li>
			</ul>
			<Outlet/>
		</div>
    </nav>

  )

}


export default Nav;