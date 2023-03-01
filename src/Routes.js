import { Route, Routes } from "react-router-dom";
import SearchPage from "./Pages/SearchPage";

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SearchPage/>}/>
        </Routes>
    );
}