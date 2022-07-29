import "./Dashboard.css"
import { smContext } from "../../contexts/smallscreen"
import { useContext } from "react"

import {useState} from "react"

function Dashboard(props){

	const [sm]=useContext(smContext)

  let none={
    "display":"none"
  }
  let blk={
    "backgroundColor":"black"
  }
  let hamStyle={
    "position":"absolute",
    "top":"-45px"
  }
  let show={
		"position":"absolute",
		"width":"100%",
	}
  const [ham,hamSet]=useState(0);
	let hamfunc=()=>{
		if(ham)
			hamSet(0);
		else
			hamSet(1);
	}
  function render(ele)
  {
    return(ele)
  }
  return (
    <main>
      <div id="ham" onClick={hamfunc} style={sm?hamStyle:none}>
				<span style={blk}></span>
				<span style={blk}></span>
				<span style={blk}></span>
			</div>
      <aside id="side-bar" style={sm?ham?show:none:{}}>
        {render(props.left)}
      </aside>
      <section id="main-bar">
        {render(props.right)}
      </section>
    </main>
  )
}



export default Dashboard;