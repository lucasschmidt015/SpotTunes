import AllRoutes from "./Routes/Routes";
import { BrowserRouter } from "react-router-dom";

import Header from './Components/Header'
import Player from './Components/Player'
import SpotfyProvider from "./Context/Spotfy";
import About from "./Components/About";
import { useState } from "react";

export default function App(){

  const [renderAbout, setRenderAbout] = useState(false);

  return(
    <SpotfyProvider>
      <BrowserRouter>
        <Header setRenderAbout={setRenderAbout}/>
        <AllRoutes/>
        <Player/>
        {renderAbout && (
          <About setRenderAbout={setRenderAbout}/>
        )} 
      </BrowserRouter>  
    </SpotfyProvider> 
  );
}