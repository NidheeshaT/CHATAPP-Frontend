import './ReqHead.css'

function ReqHead({head,setHead})
{

    return (
        <div id='head'>
            <div style={{gridColumn:'1/span 2'}}>Requests</div>
            <div className="pointer hover-bottom" style={head==='sent'? {borderBottom: '2px inset rgb(69, 0, 75)'}:{}} onClick={(e)=>setHead('sent')}>Sent</div>
            <div className="pointer hover-bottom" style={head==='recieved'? {borderBottom: '2px inset rgb(69, 0, 75)'}:{}} onClick={(e)=>setHead('recieved')}>Recieved</div>
        </div>

    )
}

export default ReqHead