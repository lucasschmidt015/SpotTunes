import './Login.css';
import { IoIosMusicalNotes } from 'react-icons/io';

import { SpotfyContext } from '../../Context/Spotfy';
import { useContext } from 'react';

export default function Login(){

    const { handleLogin }  = useContext(SpotfyContext);

    return(
        <div className="login-screen-background">
            <div className="login-screen">
                <h1>SpotTunes</h1>
                <IoIosMusicalNotes/>
                <button onClick={handleLogin}>Login with Spotfy</button>
            </div>            
        </div>
    );
}