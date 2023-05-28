// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../Blog/blog.css';
// import  List from "./List"

// function Blog() {
//     const [isExpanded, setExpanded]= useState(false)
//     const [rows, setRows]= useState(1)

//     const [Blogs , setNewBlogs] = useState(null)
//     const [formBlog, setFormBlog] = useState({
//       title: "",
//       content: "",
//       image: null,
//     })

//     useEffect(() => {
//       getBlogs()
//         } ,[])


//     // const showBlogs = async () => {
//     //   const response = await axios.get('http://localhost:8000/img/')
//     //   console.log(response.data)
//     // }

//     // useEffect(() => {
//     //   showBlogs()
//     //     } ,[])


//     function getBlogs() {
//       axios({
//           method: "GET",
//           url:"/apis/blog-list/",
//         }).then((response)=>{
//           const data = response.data
//           setNewBlogs(data)
//         }).catch((error) => {
//           if (error.response) {
//             console.log(error.response);
//             console.log(error.response.status);
//             console.log(error.response.headers);
//             }
//         })}

//     function createBlog(event) {
//         axios({
//           method: "POST",
//           url:"/apis/blog-create/",
//           data:{
//             title: formBlog.title,
//             content: formBlog.content,
//             image: formBlog.image
//            }
//         })
//         .then((response) => {
//           getBlogs()
//         })

//         setFormBlog(({
//           title: "",
//           content: "",
//         image: null}))
//         setExpanded(false)
//         event.preventDefault()
//     }

//     function DeleteBlog(id) {
//         axios({
//           method: "DELETE",
//           url:`/apis/blog-delete/${id}/`,
//         })
//         .then((response) => {
//           getBlogs()
//         })
//     }

//     function handleChange(event) { 
//         const {value, name} = event.target
//         setFormBlog(prevBlog => ({
//             ...prevBlog, [name]: value})
//         )}

//     function BlogShow(){
//         setExpanded(true)
//         setRows(2)
//       }

//   return (

//      <div className='blog-container'>

//         <form className="create-blog">
//           {isExpanded && <input onChange={handleChange} text={formBlog.title} name="title" placeholder="Title" value={formBlog.title} />}
//           <textarea onClick={BlogShow} onChange={handleChange} name="content" placeholder="Write blog..." rows={rows} value={formBlog.content} />
//           {isExpanded && <input onClick={BlogShow} onChange={handleChange} type="file" name="image" value={formBlog.image} />}
//           {isExpanded && <button onClick={createBlog}>
//                             Create
//                         </button>}
//         </form>

//         { Blogs && Blogs.map(Blog => <List
//         key={Blog.id}
//         id={Blog.id}
//         image={Blog.image}
//         title={Blog.title}
//         content={Blog.content} 
//         // deletion={DeleteBlog}
//         />
//         )}

//     </div>

//   );
// }

// export default Blog;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../Blog/blog.css';
// import List from './List';

// function Blog() {
//   const [isExpanded, setExpanded] = useState(false);
//   const [rows, setRows] = useState(1);
//   const [Blogs, setNewBlogs] = useState(null);
//   const [formBlog, setFormBlog] = useState({
//     title: '',
//     content: '',
//     image: null,
//   });

//   const [currentBlogId, setCurrentBlogId] = useState(null);

//   useEffect(() => {
//     getBlogs();
//   }, []);

//   function getBlogs() {
//     axios({
//       method: 'GET',
//       url: '/apis/blog-list/',
//     })
//       .then((response) => {
//         const data = response.data;
//         setNewBlogs(data);
//       })
//       .catch((error) => {
//         if (error.response) {
//           console.log(error.response);
//           console.log(error.response.status);
//           console.log(error.response.headers);
//         }
//       });
//   }

//   function createBlog(event) {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('title', formBlog.title);
//     formData.append('content', formBlog.content);
//     formData.append('image', formBlog.image);

//     axios({
//       method: 'POST',
//       url: '/apis/blog-create/',
//       data: formData,
//     })
//       .then((response) => {
//         getBlogs();
//         setFormBlog({
//           title: '',
//           content: '',
//           image: null,
//         });
//         setExpanded(false);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }


//   function editBlog(blog) {
//     setFormBlog({
//       title: blog.title,
//       content: blog.content,
//       image: null,
//     });
//     setCurrentBlogId(blog.id);
//     setExpanded(true);
//     setRows(2);
//   }

//   function handleChange(event) {
//     const { value, name } = event.target;
//     setFormBlog((prevBlog) => ({
//       ...prevBlog,
//       [name]: value,
//     }));
//   }

//   function handleImageChange(event) {
//     const file = event.target.files[0];
//     setFormBlog((prevBlog) => ({
//       ...prevBlog,
//       image: file,
//     }));
//   }

//   function BlogShow() {
//     setExpanded(true);
//     setRows(2);
//   }

//   return (
//     <div className='blog-container'>
//       <form className='create-blog'>
//         {isExpanded && (
//           <input
//             onChange={handleChange}
//             type='text'
//             name='title'
//             placeholder='Title'
//             value={formBlog.title}
//           />
//         )}
//         <textarea
//           onClick={BlogShow}
//           onChange={handleChange}
//           name='content'
//           placeholder='Write blog...'
//           rows={rows}
//           value={formBlog.content}
//         />
//         {isExpanded && (
//           <input
//             onClick={BlogShow}
//             onChange={handleImageChange}
//             type='file'
//             name='image'
//             className='styled-input'
//           />
//         )}
//         {isExpanded && (
//           <button onClick={createBlog}>
//             Create
//           </button>
//         )}
//       </form>

//       {Blogs &&
//         Blogs.map((Blog) => (
//           <List
//             key={Blog.id}
//             id={Blog.id}
//             image={Blog.image}
//             title={Blog.title}
//             content={Blog.content}
//           />
//         ))}
//     </div>
//   );
// }

// export default Blog;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Blog/blog.css';
import List from './List';

function Blog() {
  const [isExpanded, setExpanded] = useState(false);
  const [rows, setRows] = useState(1);
  const [Blogs, setNewBlogs] = useState(null);
  const [formBlog, setFormBlog] = useState({
    title: '',
    content: '',
    image: null,
  });

  const [currentBlogId, setCurrentBlogId] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Track if currently editing

  useEffect(() => {
    getBlogs();
  }, []);

  function getBlogs() {
    axios({
      method: 'GET',
      url: '/apis/blog-list/',
    })
      .then((response) => {
        const data = response.data;
        setNewBlogs(data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  function createBlog(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', formBlog.title);
    formData.append('content', formBlog.content);
    formData.append('image', formBlog.image);

    if (isEditing) {
      // Perform update if currently editing
      axios({
        method: 'PUT',
        url: `/apis/blog-update/<str:pk>/`,
        data: formData,
      })
        .then((response) => {
          getBlogs();
          setFormBlog({
            title: '',
            content: '',
            image: null,
          });
          setExpanded(false);
          setIsEditing(false);
          setCurrentBlogId(null);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // Perform create if not currently editing
      axios({
        method: 'POST',
        url: '/apis/blog-create/',
        data: formData,
      })
        .then((response) => {
          getBlogs();
          setFormBlog({
            title: '',
            content: '',
            image: null,
          });
          setExpanded(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function editBlog(blog) {
 
    setFormBlog({
      title: blog.title,
      content: blog.content,
      image: null,
    });
    setCurrentBlogId(blog.id);
    setExpanded(true);
    setRows(2);
    setIsEditing(true); // Set the editing mode
    
  }
  function deleteBlog(id) {
    axios.delete(`/apis/blog-delete/${id}/`)
      .then((response) => {
        getBlogs(); // Refresh the blog list after deletion
      })
      .catch((error) => {
        console.log(error);
      });
  }


  function handleChange(event) {
    const { value, name } = event.target;
    setFormBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    setFormBlog((prevBlog) => ({
      ...prevBlog,
      image: file,
    }));
  }

  function BlogShow() {
    setExpanded(true);
    setRows(2);
    setIsEditing(false); // Reset the editing mode when showing the blog form
  }

  return (
    <div className='blog-container'>
      <form className='create-blog'>
        {isExpanded && (
          <input
            onChange={handleChange}
            type='text'
            name='title'
            placeholder='Title'
            value={formBlog.title}
          />
        )}
        <textarea
          onClick={BlogShow}
          onChange={handleChange}
          name='content'
          placeholder='Write blog...'
          rows={rows}
          value={formBlog.content}
        />
        {isExpanded && (
          <input
            onClick={BlogShow}
            onChange={handleImageChange}
            type='file'
            name='image'
            className='styled-input'
          />
        )}
        {isExpanded && (
          <button onClick={createBlog}>
            {isEditing ? 'Update' : 'Create'}
          </button>
        )}
      </form>

      {Blogs &&
        Blogs.map((Blog) => (
          <List
            key={Blog.id}
            id={Blog.id}
            image={Blog.image}
            title={Blog.title}
            content={Blog.content}
            editblog={editBlog} // Pass the editBlog function as a prop
            deleteblog={deleteBlog}
            
          />
          
        )
        
        )}
    </div>
  );
}

export default Blog;
