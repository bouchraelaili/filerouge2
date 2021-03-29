import React, { Component } from 'react';
import {MdAccountCircle} from "react-icons/md";
import {RiLockPasswordLine} from "react-icons/ri";


import './login.css';
import wave from './image/wave.svg';
import bg from './image/undraw_mobile_interface_wakp.svg';
import avatar from './image/undraw_profile_pic_ic5t (1).svg';



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
           		   		<MdAccountCircle/>
           		   </div>
           		   <div className="div">
           		   		
           		   		<input type="text" className="input" placeholder="Username"/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
					  <RiLockPasswordLine/>
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
