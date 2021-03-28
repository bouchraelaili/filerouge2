import React, { Component } from 'react';
import { IconName } from "react-icons/ai";
import './login.css';
import wave from './wave.svg';
import bg from './undraw_mobile_interface_wakp.svg';
import avatar from './undraw_profile_pic_ic5t (1).svg';



 export class signup extends Component {

    
   
    render() {

    return (
        <div>
           <img className="wave" src={wave}/>
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
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
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
