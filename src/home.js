import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import Loader from './Loader';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [error, setError] = useState(null);

    const handleDelete = (id)=>{
      const newBlogs = blogs.filter(blog=>blog.id!==id)
      setBlogs(newBlogs);
    }
    useEffect(()=>{
     fetch(' http://localhost:8000/blogs')
     .then(res=>{
        if(!res.ok){
          throw Error('An error occured, try again later.')
        }
        return res.json()
     })
     .then(data=>{
        console.log(data);
        setBlogs(data)
        setError(null);
     })
     .catch(err=>{
      setError(err.message);
      setBlogs([]);
     })
    },[])

    return ( 
        <div className="home">
           {error && <div className="text-center danger-text">{error}</div>}
          { 
         blogs!=null?
           <BlogList blogs={blogs} title="Today's blogs" handleDelete={handleDelete}/>
           :<Loader/>
          }

        </div>
     );
}
 
export default Home;