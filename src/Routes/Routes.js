import { Route, Routes } from "react-router-dom";
import SearchPage from "../Pages/SearchPage";
import FavoritesPage from "../Pages/FavoritesPage";
import Login from "../Pages/Login";

import ConfigRoutes from "./ConfigRoutes";

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<ConfigRoutes loggedComponent={<SearchPage/>} defaultComponent={<Login/>}/>}/>
            <Route path="/dashboard" element={<ConfigRoutes loggedComponent={<SearchPage/>} defaultComponent={<SearchPage/>} isPrivate/>}/>
            <Route path="/favorites" element={<ConfigRoutes loggedComponent={<FavoritesPage/>} defaultComponent={<FavoritesPage/>} isPrivate/>}/>
        </Routes>
    );
}