// import "./Login.css"

function Login(){
  return (
    <>
        <section style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}}>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

                <label htmlFor="useremail">Email</label>
                <input type="email" name="useremail" id="useremail" />
                <label htmlFor="password">password</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Login</button>
            </div>
        </section>


    </>
  )
}

export default Login;