function InputBar(props)
{
    return(
    <>
        <form onSubmit={props.result} style={{width:"100%",height:"100%",display:"grid",gridTemplateColumns:"1fr auto"}}>
            <input className="color-primary" type='text' value={props.value} onChange={e=>props.setValue(e.target.value)}/>
            <button className="button pointer" type="submit">{props.btn}</button>
        </form>
    </>
    )
}

export default InputBar