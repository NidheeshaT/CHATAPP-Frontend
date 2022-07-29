import "./People.css"

function People({name,ChangeView}){

  return (
    <>
      <div id="card" onClick={()=>ChangeView(()=>1)}>
        <div id="pic">

        </div>
        <h5 id="name">{name}</h5>
        <div id="mscount"></div>
      </div>
    </>
  )
}

export default People;