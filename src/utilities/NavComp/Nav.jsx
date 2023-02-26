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
	const [ham,hamSet]=useState(0);
	let hamfunc=()=>{
		if(ham)
			hamSet(0);
		else
			hamSet(1);
	}


  return (
    <nav id="navbar" className="px-4 py-1">
		<div id="logo" className="">NTChats</div>
		<div id="links" className="h-full">
			<div id="ham" onClick={hamfunc} className={sm?{}:'none'}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<ul className={`${sm?(ham?'show top-[100%] -right-4':'none'):''}`}>
				<li>
					<Link className="leading-none" to="/" onClick={()=>hamSet(0)}>Chat</Link> 
				</li>
				<li>
					<Link className="leading-none" to="/people" onClick={()=>hamSet(0)}>People</Link> 
				</li>
				
					{profile?<li>
						<Link className="leading-none" to="/profile" onClick={()=>hamSet(0)}>Profile</Link></li>	
						:<>
							<li>
								<Link className="leading-none" to="/login" onClick={()=>hamSet(0)}>Login</Link>	
							</li>
							<li>
								<Link className="leading-none" to="/register" onClick={()=>hamSet(0)}>Register</Link>	
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