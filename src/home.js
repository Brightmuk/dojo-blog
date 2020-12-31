import {useState} from 'react';
const Home = () => {
    const [blogs, setBlogs] =useState([
       {title:"Creating a website",body:"First, a quick review: Git uses a series of configuration files to determine non-default behavior that you may want. The first place Git looks for these values is in the system-wide [path]/etc/gitconfig file, which contains settings that are applied to every user on the system and all of their repositories. If you pass the option --system to git config, it reads and writes from this file specifically.",author:"Bright",id:1},
       {title:"The new technologies",body:"First, a quick review: Git uses a series of configuration files to determine non-default behavior that you may want. The first place Git looks for these values is in the system-wide [path]/etc/gitconfig file, which contains settings that are applied to every user on the system and all of their repositories. If you pass the option --system to git config, it reads and writes from this file specifically.",author:"Celestine",id:2},
       {title:"Is Apple a scum",body:"First, a quick review: Git uses a series of configuration files to determine non-default behavior that you may want. The first place Git looks for these values is in the system-wide [path]/etc/gitconfig file, which contains settings that are applied to every user on the system and all of their repositories. If you pass the option --system to git config, it reads and writes from this file specifically.",author:"Dwayne",id:3},
       {title:"The best foods for kids",body:"First, a quick review: Git uses a series of configuration files to determine non-default behavior that you may want. The first place Git looks for these values is in the system-wide [path]/etc/gitconfig file, which contains settings that are applied to every user on the system and all of their repositories. If you pass the option --system to git config, it reads and writes from this file specifically.",author:"Meek mill",id:4},
       {title:"How to grow taller",body:"First, a quick review: Git uses a series of configuration files to determine non-default behavior that you may want. The first place Git looks for these values is in the system-wide [path]/etc/gitconfig file, which contains settings that are applied to every user on the system and all of their repositories. If you pass the option --system to git config, it reads and writes from this file specifically.",author:"James",id:5},
    ]);

    return ( 
        <div className="home">
           {blogs.map((blog)=>(
              <div className="blog-preview" key={blog.id}>
                 <h2>{blog.title}</h2>
                 <p> by {blog.author}</p>
              </div>
           ))}
        </div>
     );
}
 
export default Home;