function ReqHead({head,setHead})
{
    let style= { 
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
    }

    return (
        <div  style={style} className='wh-100'>
            <div className='text-center' style={{gridColumn:'1/span 2'}}>Requests</div>
            <div className={`pointer hover-secondary text-center${head==='sent'? " click-primary":""}`} onClick={(e)=>setHead('sent')}>Sent</div>
            <div className={`pointer hover-secondary text-center${head==='recieved'?" click-primary":""}`} onClick={(e)=>setHead('recieved')}>Recieved</div>
        </div>

    )
}

export default ReqHead