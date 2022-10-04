function List({render,control,comp:Comp,ChangeView,empty}){
    return(
    <>
            {
        render&&render.length!==0?
        render.map((ele,key)=>{
            return( <Comp ele={ele} control={control} key={key} ChangeView={ChangeView}/>)
        })
        :<div style={{textAlign:"center"}}>{empty}</div>
      }
    </>
    )

}

export default List;