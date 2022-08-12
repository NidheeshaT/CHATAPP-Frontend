function ReqHead({head,setHead})
{
    let style= { 
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        padding:"3px 0px"
    }

    return (
        <div  style={style} className='wh-100'>
            <div className='text-center' style={{gridColumn:'1/span 2'}}>Requests</div>
            <div className={`pointer hover-bottom text-center${head==='sent'? " click-bottom":""}`} onClick={(e)=>setHead('sent')}>Sent</div>
            <div className={`pointer hover-bottom text-center${head==='recieved'?" click-bottom":""}`} onClick={(e)=>setHead('recieved')}>Recieved</div>
        </div>

    )
}

export default ReqHead