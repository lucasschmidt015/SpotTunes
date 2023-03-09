import { createContext, useState } from "react";

export const SpotfyContext = createContext({});


function SpotfyProvider({children}){
    const [isLoged, setIsLoged] = useState(false);
    const [loading, setLoading] = useState(false);

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