import "./Friend.css"

function Friend({ele,ChangeView}){

  return (
    <>
      <div className="card card-hover border-bottom pointer" onClick={()=>ChangeView(()=>ele.nickname)}>
        <div className="cir">

        </div>
        <h5 id="name">{ele.nickname}</h5>
        <div id="mscount"></div>
      </div>
    </>
  )
}

export default Friend;