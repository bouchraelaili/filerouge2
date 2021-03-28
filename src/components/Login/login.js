import React, { Component } from 'react';
import './login.css';
import wave from './wave.svg';
import bg from './undraw_mobile_interface_wakp.svg';
import avatar from './undraw_profile_pic_ic5t (1).svg';



 export class login extends Component {

    
   
    render() {
        
    return (
        <div>
           <img className="wave" src={wave}/>
	<div className="container">
		<div className="img">
			<img src={bg}/>
		</div>
		<div className="login-content">
			<form action="">
				<img src={avatar}/>
				<h2 className="title">Welcome</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		
           		   		<input type="text" className="input" placeholder="Username"/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	<input type="password" className="input" placeholder="Password"/>
            	   </div>
            	</div>
            	<input type="submit" className="btn" value="Login"/>

            </form>
        </div>
    </div>
               
        </div>
        
    )
}
}

export default login
