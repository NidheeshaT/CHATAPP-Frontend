import "./People.css"

function People(props){


  return (
    <>
      <div id="card">
        <div id="pic">

        </div>
        <h5 id="name">{props.name}</h5>
        <div id="mscount"></div>
      </div>
    </>
  )
}

export default People;