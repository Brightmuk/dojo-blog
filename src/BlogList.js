const BlogList = ({blogs,title,handleDelete}) => {

    return ( 
        <div className="blog-list">
            <h2 className="text-center">{title}</h2>
            <br/>
             {blogs.map((blog)=>(
              <div className="blog-preview" key={blog.id}>
                 <h3>{blog.title}</h3>
                 <p> by {blog.author}</p>
                 <div className="blog-preview-footer">
                     <div  className="post-time">posted {blog.postTime}</div>
                     <button onClick={()=>handleDelete(blog.id)}>Delete</button>
                 </div>
              </div>
           ))}
        </div>
     );
}
 
export default BlogList;