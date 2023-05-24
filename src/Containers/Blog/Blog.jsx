import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Blog/blog.css';
import  List from "./List"

function Blog() {
    const [isExpanded, setExpanded]= useState(false)
    const [rows, setRows]= useState(1)

    const [Blogs , setNewBlogs] = useState(null)
    const [formBlog, setFormBlog] = useState({
      title: "",
      content: ""
    })

    useEffect(() => {
      getBlogs()
        } ,[])

    function getBlogs() {
      axios({
          method: "GET",
          url:"/apis/blog-list/",
        }).then((response)=>{
          const data = response.data
          setNewBlogs(data)
        }).catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
            }
        })}

    function createBlog(event) {
        axios({
          method: "POST",
          url:"/apis/blog-create/",
          data:{
            title: formBlog.title,
            content: formBlog.content
           }
        })
        .then((response) => {
          getBlogs()
        })

        setFormBlog(({
          title: "",
          content: ""}))
        setExpanded(false)
        event.preventDefault()
    }

    function DeleteBlog(id) {
        axios({
          method: "DELETE",
          url:`/apis/blog-delete/${id}/`,
        })
        .then((response) => {
          getBlogs()
        })
    }

    function handleChange(event) { 
        const {value, name} = event.target
        setFormBlog(prevBlog => ({
            ...prevBlog, [name]: value})
        )}

    function BlogShow(){
        setExpanded(true)
        setRows(3)
      }

  return (

     <div className='blog-container'>

        <form className="create-blog">
          {isExpanded && <input onChange={handleChange} text={formBlog.title} name="title" placeholder="Title" value={formBlog.title} />}
          <textarea onClick={BlogShow} onChange={handleChange} name="content" placeholder="Write blog..." rows={rows} value={formBlog.content} />
          {isExpanded && <button onClick={createBlog}>
                            Create
                        </button>}
        </form>

        { Blogs && Blogs.map(Blog => <List
        key={Blog.id}
        id={Blog.id}
        title={Blog.title}
        content={Blog.content} 
        // deletion={DeleteBlog}
        />
        )}

    </div>

  );
}

export default Blog;
