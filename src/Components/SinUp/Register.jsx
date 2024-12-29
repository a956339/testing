import React from 'react';
// import './LoginPage.css';
import todoImage from '../../Images/Reactangle.png';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
  return (
    <div className='main-containers'>
      <div className="image-section">
        <img src={todoImage} alt="ToDo" className="todo-image" />
      </div>

      <div className="content-section">
        <div className="sub-content-section">
          <h1>Sign up</h1>
          <input type="text" name="Username" className='user' placeholder='First Name' />
          <input type="text" name="Mobile" className='user' placeholder='Last Name' />
          <input type="password" name="Password" className='user' placeholder='E-mail address' />
          <input type="password" name="Password" className='user' placeholder='Password' />
          <input type="password" name="Password" className='user' placeholder='Re-enter the password' />
          <div className="login_btn">
            <p>Sign Up</p>
          </div>
        </div>


        <div className="query">
          <p>Already have an account? <span onClick={() => navigate("/LoginPage")}>Sign in</span></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
