import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './Clone.css';

export default function Signup(){

    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function submitHandler(e){
        e.preventDefault();

        try{
            const response = await fetch('https://insta-backend-hr3a.onrender.com/signup',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: fullName,
                    email: email,
                    userName: username,
                    password: password
                })
            })

            const data = await response.json();
            console.log(data);

        }catch(error){
            console.log(error);
        }
    }


  return (

    <div>
        <div className="auth-page-container">
            <form onSubmit={submitHandler}  className="auth-form-container">

                <h1>Instagram</h1>
                <p>Sign up to see photos and videos from your friends.</p>
        
                <button className="btns ">Log in with Facebook</button>

                <div className="or-separator">
                    <span className="or">OR</span>
                </div>

                <div className="form-group">
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Mobile No or Email" className="form-control" />
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" className="form-control" />
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="form-control" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="form-control" />
                </div>

                <p>People who use our service may have uploaded your contact information to Instagram. <a href="#">Learn More</a> </p>
                <p>By signing up, you agree to our Terms, <a href="#">Data Policy</a> and <a href="#">Cookies Policy</a> .</p>
                <button type="submit"  className="btns"> Sign Up </button>

                <p> Already, have an account? <Link to="/signin"> Login </Link> </p>
            </form>                
        </div>
    </div>
  )
}

