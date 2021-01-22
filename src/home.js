import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import Loader from './Loader';
import useFetch from './UseFetch';

const Home = () => {
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
           {error && <div className="text-center danger-text">{error}</div>}
          { blogs!=null?
           <BlogList blogs={blogs} title="Today's blogs" />
           :<Loader/>
          }

        </div>
     );
}
 
export default Home;