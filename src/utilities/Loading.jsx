function Loading()
{
    let square={width:"20px",height:"20px","border":"2px solid rgb(0,76,255)",margin:"10px"}
    return ( 
        <>
            <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div style={square} className="rotate1">

                </div>
                <div style={square} className="rotate2">

                </div>
                <div style={square} className="rotate3">

                </div>
            </div>
        </>
    )
}

export default Loading