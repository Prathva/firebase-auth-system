import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const logIn = async () =>{
       try {
        await signInWithEmailAndPassword(getAuth(), email, password);
        navigate('/');
       } catch (error) {
            setError(error.message);
       }
    }

    return(
        <>
            <div className="loginForm">
            <h1>Login</h1>
            { error && <p className="error">{error}</p>}
            <div>
                <label>User Email</label><br/>
                <input type="email" placeholder="Your email address" value={email} onChange={ e => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password</label><br/>
                <input type="password" placeholder="Your password" value={password} onChange={ e => setPassword(e.target.value)} />
            </div>
            <button onClick={logIn}>Log In</button>
            <Link className="link" to="/create-account">Don't have an account? Create one here</Link>
            </div>
        </>
    )
    }
    
    export default LoginPage;