
function List(props){
    function handleClick(){
  props.deleteblog(props.id)
}
function handleEdit() {
  props.editblog(props);
}
  return (
      <div className="blog">
        < img src={props.image} style={{  width:"100%", position:"relative"}}/>
        <h1 >  {props.title} </h1>
        <p > {props.content}</p>
        <button onClick={handleEdit}>Edit</button>
        
        <button onClick={handleClick}>Delete</button>
      </div>
  )
}

export default List;