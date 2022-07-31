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
	const [profile,setProfile]=useState(()=>{return {name:"Nidheesha",friends:["hello","hello","hello","hello","hello","hello","ehllo","hello","hello","hello","hello","hello","hello","ehllo","hello","hello","hello","hello","hello","hello","ehllo"]}})
	// const [profile,setProfile]=useState(()=>0)
	
	return (
    <>
	<profileContext.Provider value={[profile,setProfile]}>
	<smContext.Provider value={[smscreen,setScreen]}>
    <BrowserRouter>
    		<Nav/>
		<Routes>
        	<Route path="/"	element={<ChatPage/>}/>
			
			<Route path="profile" element={profile?<ProfilePage/>:<Navigate to="/login"/>}/>
			
			<Route path="login"	element={profile?<Navigate to="/profile"/>:<LoginPage/>}/>
			{/* <Route path="login"	element={profile?<Navigate to="/profile"/>:<RegisterPage/>}/> */}
			<Route path='*' element={<div>404 bad request</div>}/>
		</Routes>
    </BrowserRouter>
	</smContext.Provider>
	</profileContext.Provider>
    </>
  );
}

export default App;
