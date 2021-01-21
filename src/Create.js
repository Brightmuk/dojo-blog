import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Bright');
    const [isPending, setIspending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        setIspending(true);
        const postTime = new Date().toDateString();
        const blog = {title, body, author, postTime}

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(blog)
        }).then(()=>{
            setIspending(false);
            history.push('/')
        })
    }

    return ( 
        <div className="create">
            <h2 className="text-center">New blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input type="text" 
                value={title} 
                onChange={(e)=>setTitle(e.target.value)}
                required></input>

                <label>Body: </label>
                <textarea 
                required
                value={body} 
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>

                <label>Author: </label>
               <select
                value={author} 
                onChange={(e)=>setAuthor(e.target.value)}
               >
                   <option value="Bright">Bright</option>
                   <option value="Dwayne">Dwayne</option>
                   <option value="Celestine">Celestine</option>
               </select>
              
              {!isPending?
               <button>Add blog</button>
               :<p>Posting...</p>
            }
            </form>
        </div>
     );
}
 
export default Create;