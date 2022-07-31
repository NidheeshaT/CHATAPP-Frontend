function SearchBar(props)
{
    return(
    <>
        <form onSubmit={props.result} style={{width:"100%",height:"100%",display:"grid",gridTemplateColumns:"1fr 50px"}}>
            <input type="text" />
            <button type="submit">Search</button>
        </form>
    </>
    )
}

export default SearchBar