import AllRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";

import Header from './Components/Header'
import Player from './Components/Player'

import SpotfyProvider from "./Context/Spotfy";

export default function App(){
  return(
    <SpotfyProvider>
      <BrowserRouter>
        <Header/>
        <AllRoutes/>
        <Player/>
      </BrowserRouter>  
    </SpotfyProvider>    
  );
}