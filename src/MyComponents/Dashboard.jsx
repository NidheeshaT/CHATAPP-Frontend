import "./Dashboard.css"

import {useState} from "react"

function Dashboard(props){

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
      <div id="ham" onClick={hamfunc} style={props.sm?hamStyle:none}>
				<span style={blk}></span>
				<span style={blk}></span>
				<span style={blk}></span>
			</div>
      <aside id="side-bar" style={props.sm?ham?show:none:{}}>
        {render(props.left)}
      </aside>
      <section id="main-bar">
        {render(props.right)}
      </section>
    </main>
  )
}



export default Dashboard;