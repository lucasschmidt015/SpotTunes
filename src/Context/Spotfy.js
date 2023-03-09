import { createContext, useState } from "react";

export const SpotfyContext = createContext({});


function SpotfyProvider({children}){
    const [isLoged, setIsLoged] = useState(false);
    const [loading, setLoading] = useState(false);

    const Client_ID = process.env.REACT_APP_CLIENT_ID || "Not-Found enviroment variable"
    const Client_Secret = process.env.REACT_APP_CLIENT_SECRET || "Not-Found enviroment variable";


    function handleLogin(){
        console.log("Hello World");
    }

    return (
        <SpotfyContext.Provider        
        value={{
            isLoged,
            setIsLoged,
            loading,
            handleLogin,
        }}>
            {children}
        </SpotfyContext.Provider>
    );
}


export default SpotfyProvider;