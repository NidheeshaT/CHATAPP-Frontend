import './App.css';
import Nav from './MyComponents/NavComp/Nav'
import ChatPage from "./MyComponents/ChatComp/ChatPage"
import ProfilePage from './MyComponents/ProfileComp/ProfilePage';
import LoginPage from './MyComponents/LoginComp/LoginPage';
import {useState,useEffect} from "react"
import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom"

function App() {
  const [smscreen,setScreen]=useState(1);
  useEffect(()=>{
		if(window.innerWidth<=700){
			setScreen(1);
		}	
		else{
			setScreen(0);
		}
		window.addEventListener("resize",()=>{
			if(window.innerWidth<=700){
				setScreen(1);
			}	
			else{
				setScreen(0);
			}
		})
		// setProfile(0)
	},[])
	// const [profile,setProfile]=useState(()=>{return {name:"Nidheesha",friends:["hello","hello","hello","hello","hello","hello","ehllo","hello","hello","hello","hello","hello","hello","ehllo","hello","hello","hello","hello","hello","hello","ehllo"]}})
	const [profile,setProfile]=useState(()=>0)
	
	return (
    <>
    <BrowserRouter>
    		<Nav sm={smscreen} profile={profile}/>
		<Routes>
        	<Route path="/"	element={<ChatPage sm={smscreen} profile={profile}/>}/>
			
			<Route path="profile" element={profile?<ProfilePage sm={smscreen} profile={profile}/>:<Navigate to="/login"/>}/>
			
			<Route path="login"	element={profile?<Navigate to="/profile"/>:<LoginPage sm={smscreen} profile={profile} setProfile={setProfile}/>}/>
			<Route path='*' element={<div>404 bad request</div>}/>
		</Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
