import React, { Component } from 'react';
import {FaFacebookSquare}  from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import {FaGoogle} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai";
import './login.css';
import bg from './image/undraw_mobile_interface_wakp.svg';
import avatar from './image/undraw_profile_pic_ic5t (1).svg';



 export class signup extends Component {

    
   
    render() {

    return (
        <div>
           <img className="test"/>
	<div className="container">
		<div className="img">
			<img src={bg}/>
		</div>
		<div className="login-content">
		<form action="#" class="sign-up-form">
				<img src={avatar}/>
				
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
               <FaFacebookSquare/>
              </a>
              <a href="#" className="social-icon">
                <AiFillTwitterCircle/>
              </a>
              <a href="#" className="social-icon">
                <FaGoogle/>
              </a>
              <a href="#" className="social-icon">
                <AiFillLinkedin/>
              </a>
            </div>           	
            </form>
        </div>
    </div>
               
        </div>
        
    )
}
}

export default signup
