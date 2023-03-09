import { SpotfyContext } from "../Context/Spotfy";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function ConfigRoutes({loggedComponent, defaultComponent, isPrivate}){
    const { isLoged, loading } = useContext(SpotfyContext);

    if (loading){
        return(
            <div>
                <h1>Loading page...</h1>
            </div>
        );
    }

    if (!isLoged && isPrivate){
        return <Navigate to="/"/>
    }

    if (isLoged && !isPrivate){
        return <Navigate to="/dashboard"/>
    }
    
    return isLoged ? loggedComponent : defaultComponent;

}

