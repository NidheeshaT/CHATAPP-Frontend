const url=process.env.REACT_APP_ENV==="production"?process.env.REACT_APP_BACKEND_URL:"http://localhost"

const fetchData=  async (path,body)=>{
    
    let res=await fetch(`${url}/${path}`, {
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