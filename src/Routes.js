import { Route, Routes } from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
import FavoritesPage from "./Pages/FavoritesPage";

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SearchPage/>}/>
            <Route path="/favorites" element={<FavoritesPage/>}/>
        </Routes>
    );
}