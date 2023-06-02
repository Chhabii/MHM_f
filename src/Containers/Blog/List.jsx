function List(props){
  function handleClick(){
    props.deleteblog(props.id);
  }

  function handleEdit() {
    props.editblog(props);
  }

  return (
    <div className="blog-list">
      <img src={props.image} style={{ width:"100%" }} alt={props.title} />
      <div className="blog-content">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <div className="blog-actions">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleClick}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default List;
