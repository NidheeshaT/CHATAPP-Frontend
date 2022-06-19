import './App.css';
import Nav from './MyComponents/Nav.jsx'
import Dashboard from './MyComponents/Dashboard';
import {useState,useEffect} from "react"
import {BrowserRouter} from "react-router-dom"

function App() {
  const [smscreen,setScreen]=useState(1);
  useEffect(()=>{
		if(window.innerWidth<=600){
			setScreen(1);
		}	
		else{
			setScreen(0);
		}
		window.addEventListener("resize",()=>{
			if(window.innerWidth<=600){
				setScreen(1);
			}	
			else{
				setScreen(0);
			}
		})
	},[])


  return (
    <>
    <BrowserRouter>
    	<Nav sm={smscreen}/>
        <Dashboard sm={smscreen}/>
    </BrowserRouter>
    </>
  );
}

export default App;
