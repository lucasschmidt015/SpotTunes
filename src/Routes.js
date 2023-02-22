import { Route, Routes } from "react-router-dom";
import DefaultPage from './Pages/DefaultPage';

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<DefaultPage/>}/>
        </Routes>
    );
}