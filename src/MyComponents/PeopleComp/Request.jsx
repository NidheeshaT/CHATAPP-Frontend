function Request({ele,control}){
    return (
      <>
      <div className="card border-bottom">
          <div className="card">
            <h5 id="name">{ele.nickname}</h5>
          </div>
          {control==='sent'?{}:<button className="small-button pointer" style={{marginRight:'3px'}}>Accept</button>}
          <button className="small-button pointer">Cancel</button>
      </div>
      </>
    )
  }
  
  export default Request;