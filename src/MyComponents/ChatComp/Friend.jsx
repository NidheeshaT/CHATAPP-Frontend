import "./Friend.css"

function Friend({ele,ChangeView}){

  return (
    <>
      <div className="card card-hover border-bottom pointer" onClick={()=>ChangeView(()=>1)}>
        <div className="cir">

        </div>
        <h5 id="name">{ele}</h5>
        <div id="mscount"></div>
      </div>
    </>
  )
}

export default Friend;