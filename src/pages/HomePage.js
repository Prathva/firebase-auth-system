import useUser from "../hooks/useUser";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const { user} = useUser();
    const navigate = useNavigate();
    return(
        <>
            <p>Home Page</p>
            { user ? <button onClick={()=>{ signOut(getAuth());}}>Log Out</button> : <button onClick={() => { navigate('/login')}}>Log In</button>}

        </>
    )
    }
    
export default HomePage;