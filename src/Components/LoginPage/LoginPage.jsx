import React from 'react';
import './LoginPage.css';
import todoImage from '../../Images/Reactangle.png';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className='main-containers'>
      <div className="image-section">
        <img src={todoImage} alt="ToDo" className="todo-image" />
      </div>

      <div className="content-section">
        <div className="sub-content-section">
          <h1>Sign in</h1>
          <input type="text" name="Username" className='user' placeholder='mail@gmail.com' />
          <input type="text" name="Password" className='user' placeholder='password' />
          <div className="login_btn" onClick={()=>navigate("/Dashboard")}>
            <p>Sign In</p>
          </div>
        </div>

        <div className="line">
          <div className="leftLine">
            <hr />
          </div>
          <p>or</p>
          <div className="rightLine">
            <hr />
          </div>
        </div>

        <div className="other_methods">
          <div className="method_google">
            <p>Google</p>
          </div>

          <div className="method_google">
            <p>Facebook</p>
          </div>
        </div>


        <div className="query">
          <p>Don't have an account? <span onClick={()=>navigate("/Register")}>Sign up</span></p>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
