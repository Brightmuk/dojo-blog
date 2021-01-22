import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";
import useFetch from "./UseFetch";

const BlogDetails = () => {

    const {id}= useParams()
    const { data:blog, error, isPending} = useFetch("http://localhost:8000/blogs/"+id)

    return ( 
        <div className="blog-details">
            <Link to="/">
            <p className="text-link">Back</p>
            </Link>
            <br/>
            {error && <div>{error}</div>}
            {blog!=null?
            <div className="blog">
                <h2 className="text-center">{blog.title}</h2>
                <br/>
                <div className="blog-body">
                <p>{blog.body}</p>
                </div>
                
                <br/>
                <div className="blog-footer">
                    <p className="author">by {blog.author}</p>
                    <p className="post-time"> posted {blog.postTime}</p>
                </div>
            </div>  
            :<Loader/>
            }

        </div>
     );
}
 
export default BlogDetails;