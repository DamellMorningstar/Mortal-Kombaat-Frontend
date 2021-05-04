import React,{useState} from 'react'
import './LoginForm.css'
import { Link, useHistory } from "react-router-dom";

const url = `http://localhost:3000/login`


const LoginForm = ({setCurrentUser}) => {
    
    const history = useHistory();
    const [formData, setFormData] = useState({
      username: "",
      password: "",
    });
  
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
        console.log(e.target.value)
    };
      const handleSubmit = (e) => {
          e.preventDefault()
        console.log("click")
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(formData),
        })
          .then(response => response.json())
          .then(fighter =>
            setCurrentUser(fighter)
          )
          history.push('/')
      }

    return (
        <>
            <form onSubmit={handleSubmit}>
        <div className="login-div">

            <div className="logo"></div>
            <div className="title">MortalKombaat</div>
            <div className="sub-title">Beta</div>
            <div className="fields">
                <div className="username"><input name="username" onChange={handleChange} value={formData.username} type='text' className='user-input' placeholder='username' /></div>
                <div className="password"><input name="password" onChange={handleChange} value={formData.password} type='text' className='pass-input' placeholder='password'/></div>
            </div>
            <button className="signin-button">Login</button>
            <div className="link">
                <a href="#">Forgot password?</a> or <a href="#">Sign Up</a>
            </div>

          
          
            </div>
            </form>
        </>
    )
} 

export default LoginForm
