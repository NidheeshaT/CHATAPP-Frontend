const fetchData=  async (path,body)=>{
    
    let res=await fetch(`http://localhost:80/${path}`, {
      method: 'POST',
      mode:"cors",
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        "Access-Control-Allow-Origin":true
      },
      body: JSON.stringify(body),
      credentials:"include"
    })

    let js=await res.json()
    return js
}


export default fetchData