import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import Loader from './Loader';
import useFetch from './UseFetch';

const Home = () => {
    const {data:blogs, isPending, error} = useFetch('  http://localhost:8000/blogs');
    const handleDelete = (id)=>{
      // const newBlogs = blogs.filter(blog=>blog.id!==id)
      // setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
           {error && <div className="text-center danger-text">{error}</div>}
          { blogs!=null?
           <BlogList blogs={blogs} title="Today's blogs" handleDelete={handleDelete}/>
           :<Loader/>
          }

        </div>
     );
}
 
export default Home;