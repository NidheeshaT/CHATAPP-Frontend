import './App.css';
import Nav from './utilities/NavComp/Nav'
import ChatPage from "./Pages/ChatPage"
import ProfilePage from './Pages/ProfilePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage'
import {useState,useEffect} from "react"
import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom"
import {profileContext} from "./contexts/profile"
import {smContext} from "./contexts/smallscreen"
import {displayContext} from "./contexts/display"
import { messageContext } from './contexts/messageContext';
import PeoplePage from './Pages/PeoplePage';
import Alert from './utilities/Alert';
import fetchData from './contollers/fetch';
import {activate} from './contollers/socket';
import socket from './contollers/socket';
import {newmessageContext} from './contexts/newMessage'

function App() {
  const [smscreen,setScreen]=useState(1);
  const [display,setDisplay]=useState(()=>{});
  const [messages,setMessages]=useState({})
  const [newmessage,setNewMessage]=useState(()=>{})
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
			document.querySelector('main').style.height=window.visualViewport.height-45.6+'px'
		})
		const initalise=async()=>{
			const res=await fetchData("info",{})
			if(!res.error)
			{
				setProfile(res)
				activate(newmessage,setNewMessage,setProfile)
			}
		}
		initalise()

	},[])

	const [profile,setProfile]=useState(()=>0)
	
	return (
    <>
	<profileContext.Provider value={[profile,setProfile]}>
	<smContext.Provider value={[smscreen,setScreen]}>
	<displayContext.Provider value={[display,setDisplay]}>
	<messageContext.Provider value={[messages,setMessages]}>
	<newmessageContext.Provider value={[newmessage,setNewMessage]}>
    <BrowserRouter>
    		<Nav/>
			<Alert/>
		<Routes>
        	<Route path="/"	element={<ChatPage/>}/>
			
			<Route path="people" element={<PeoplePage/>}/>
			<Route path="profile" element={profile?<ProfilePage/>:<Navigate to="/login"/>}/>
			
			<Route path="login"	element={profile?<Navigate to="/profile"/>:<LoginPage/>}/>
			<Route path="register"	element={profile?<Navigate to="/profile"/>:<RegisterPage/>}/>
			<Route path='*' element={<div>404 bad request</div>}/>
		</Routes>
    </BrowserRouter>
	</newmessageContext.Provider>
	</messageContext.Provider>
	</displayContext.Provider>
	</smContext.Provider>
	</profileContext.Provider>
    </>
  );
}

export default App;
