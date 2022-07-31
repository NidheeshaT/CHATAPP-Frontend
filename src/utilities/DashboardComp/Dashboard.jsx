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
  let show={
		"width":"100%",
    "gridColumn":"1/span2"
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
    <main style={props.left?sm?{gridTemplateColumns:"40px 1fr"}:{}:{display:"block"}}>
      <div id="ham" onClick={hamfunc} style={props.left&&sm?{}:none}>
				<span style={blk}></span>
				<span style={blk}></span>
				<span style={blk}></span>
			</div>
      <aside id="top-left" style={sm?ham?{}:none:{}}>
        {render(props.topleft)}
      </aside>
      <section id="top-right" style={sm?ham?none:{}:{}}>
        {render(props.topright)}
      </section>

      <aside id="side-bar" style={props.left?sm?ham?show:none:{}:none}>
        {render(props.left)}
      </aside>
      <section id="main-bar" style={sm||!props.left?ham?none:show:{}}>
        {render(props.right)}
      </section>
    </main>
  )
}



export default Dashboard;