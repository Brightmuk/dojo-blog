import { Link, useHistory } from "react-router-dom";

const BlogList = ({blogs,title}) => {
    const history = useHistory();

    const handleDelete = (id)=>{
        fetch('http://localhost:8000/blogs/'+id,{
            method: 'DELETE',
        }).then(()=>{
          
        })
      }

    return ( 
        <div className="blog-list">
            <h2 className="text-center">{title}</h2>
            <br/>
             {blogs.map((blog)=>(
              
              <div className="blog-preview" key={blog.id}>
                 <h3>{blog.title}</h3>
                 <p className="author"> by {blog.author}</p>
                 <div className="blog-preview-footer">
                     <div  className="post-time">posted {blog.postTime}</div>
                  <Link to={"blog/"+blog.id}>
                     <button className="btn-primary">View</button>
                  </Link>
                     <button className="btn-danger" onClick={(e)=>handleDelete(blog.id)}>Delete</button>
                 </div>
              </div>

           ))}
        </div>
     );
}
 
export default BlogList;