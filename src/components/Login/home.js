import React from 'react';
import {useHistory,Link} from 'react-router-dom';
import './login.css';




const Home = () => {
    const history = useHistory();

    const logOut =()=>{

        localStorage.removeItem('token')
           history.push('/login');
        }
        
        
    return (
        <div>
           <p>Welcome</p>
           <Link  onClick={logOut} className="play-button" >log out</Link>

               
        </div>
        
    )
}


export default Home
