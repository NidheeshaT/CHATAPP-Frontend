import "./Nav.css"
import { useState } from "react";
import {Link,Outlet} from "react-router-dom"
import { useContext } from "react";
// import Profile from "../ProfileComp/Profile";
import {profileContext} from "../../contexts/profile" 
import {smContext} from "../../contexts/smallscreen" 



function Nav(){
	
	const [profile]=useContext(profileContext)
	const [sm]=useContext(smContext)
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
		"alignItems":"stretch",
		"padding":"10px 0px"
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
			<div id="ham" onClick={hamfunc} style={sm?{}:none}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<ul style={sm?ham?show:none:{}}>
				<li>
					<Link to="/" onClick={()=>hamSet(0)}>Chat</Link> 
				</li>
				<li>
					<Link to="/people" onClick={()=>hamSet(0)}>People</Link> 
				</li>
				
					{profile?<li>
						<Link to="/profile" onClick={()=>hamSet(0)}>Profile</Link></li>	
						:<>
							<li>
								<Link to="/login" onClick={()=>hamSet(0)}>Login</Link>	
							</li>
							<li>
								<Link to="/register" onClick={()=>hamSet(0)}>Register</Link>	
							</li>
						</>
					}
				
			</ul>
			<Outlet/>
		</div>
    </nav>

  )

}


export default Nav;