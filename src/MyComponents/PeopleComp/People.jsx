function People({ele}){
  return (
    <>
    <div className="card border-bottom">
        <div className="card">
          <h5 id="name">{ele.nickname}</h5>
          <i>{ele.description}</i>
        </div>
        <button className="small-button pointer">Add</button>
    </div>
    </>
  )
}

export default People;