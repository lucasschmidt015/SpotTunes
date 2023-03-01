import { createContext } from "react";

export const SpotfyContext = createContext({});


function SpotfyProvider({children}){
    const Teste = 'Lucas';

    return (
        <SpotfyContext.Provider        
        value={{
            Teste,
        }}>
            {children}
        </SpotfyContext.Provider>
    );
}


export default SpotfyProvider;