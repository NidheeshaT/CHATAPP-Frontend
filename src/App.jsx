import './App.css';
import Nav from './MyComponents/Nav.jsx'
import Dashboard from './MyComponents/Dashboard';
import Chat from "./MyComponents/Chat"
import {useState,useEffect} from "react"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Peoples from './MyComponents/Peoples';
import Profile from './MyComponents/Profile';
import Login from './MyComponents/Login';

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
	},[])
	const [profile,SetProfile]=useState({name:"Nidheesha",description:"Hello there Im using walkietalkie",friends:["Harry","Prajwal","Nagaraj","Satvik"]})
	
	return (
    <>
    <BrowserRouter>
    		<Nav sm={smscreen}/>
		<Routes>
        	<Route path="/"	element={<Dashboard sm={smscreen} left={<Peoples profile={profile}/>} right={<Chat/>} profile={profile}/>}/>
			{
				profile?<Route path="profile"	element={<Dashboard sm={smscreen} left={<></>} right={<Profile profile={profile}/>} profile={profile}/>}/>
				:<Route path="profile"	element={<Dashboard sm={smscreen} left={<></>} right={<Login/>} profile={profile}/>}/>
			}
			

		</Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
