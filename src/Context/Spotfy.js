import { createContext, useState } from "react";

export const SpotfyContext = createContext({});


function SpotfyProvider({children}){
    const [showAbout, setShowAbout] = useState(false);

    return (
        <SpotfyContext.Provider        
        value={{
            showAbout,
            setShowAbout,
        }}>
            {children}
        </SpotfyContext.Provider>
    );
}


export default SpotfyProvider;