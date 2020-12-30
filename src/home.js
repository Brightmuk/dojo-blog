import {useState} from 'react';
const Home = () => {
    const [name, setName] =useState('Bright');

    const handleClick = ()=>{
       setName('Mukonesi');
    }

    return ( 
        <div className="home">
        <h2>Home</h2>
        <p>{name}</p>
        <button onClick={handleClick}>Click me</button>

        </div>
     );
}
 
export default Home;