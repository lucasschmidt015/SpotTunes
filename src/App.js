import AllRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";

import Header from './Components/Header'
import Player from './Components/Player'


export default function App(){
  return(
    <BrowserRouter>
      <Header/>
      <AllRoutes/>
      <Player/>
    </BrowserRouter>
  );
}