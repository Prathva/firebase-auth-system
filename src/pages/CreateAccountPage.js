import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccountPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const createAccount = async () => {
        try {
            if(password !== confirmPassword){
                setError('Password and confirm password do not match');
                return;
            }

            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/');
        } catch (error) {
           setError(error.message);
        }
    }

    return(
        <>
            <div className="loginForm">
            <h1>Create an Account</h1>
            { error && <p className="error">{error}</p>}
            <div>
                <label>User Email</label><br/>
                <input type="email" placeholder="Your email address" value={email} onChange={ e => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password</label><br/>
                <input type="password" placeholder="Your password" value={password} onChange={ e => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password</label><br/>
                <input type="password" placeholder="Re-enter your password" value={confirmPassword} onChange={ e => setConfirmPassword(e.target.value)} />
            </div>
            <button onClick={createAccount}>Create Account</button>
            <Link className="link" to="/login">Already have an account? Log in here</Link>
            </div>
        </>
    )
    }

export default CreateAccountPage;