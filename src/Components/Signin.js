import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './Clone.css';

export default function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submitHandler(e){
        e.preventDefault();

        try{
            const response = await fetch('https://insta-backend-hr3a.onrender.com/signin',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
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
            <form onSubmit={submitHandler} className="auth-toggle-container">
                <div className="form-group">
                    <h1>Instagram</h1>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Phone number, username, or email" className="form-control" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="form-control" required />
                </div>
                <button type="submit" className="btns">Log In</button>

                <div className="or-separator">
                    <span className="or">OR</span>
                </div>

                <button type="button" className="btns">Log in with Facebook</button>

                <a href="#" className="forgot-password">Forgot password?</a> 
                <p>Don't have an account? <Link to="/signup"> Signup </Link> </p>

            </form>
        </div>
    );
}