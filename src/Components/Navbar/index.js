import './Navbar.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar(props){

    const Navegate = useNavigate();

    useEffect(() => {
        console.log(props.page)
        if (props.page == 'Search'){
            const componentFavorites = document.getElementById("favorites");
            const componentSearch = document.getElementById("search");
            componentFavorites.style.boxShadow = "none"
            componentSearch.style.boxShadow = "10px 0 10px -10px #6814FC, 0 10px 10px -10px #6814FC"    
        }
        else if(props.page == 'Favorites'){
            const componentFavorites = document.getElementById("favorites");
            const componentSearch = document.getElementById("search");
            componentSearch.style.boxShadow = "none"
            componentFavorites.style.boxShadow = "0 10px 10px -10px #6814FC, -10px 0 10px -10px #6814FC"    
        }
    }, [])

    return(
        <div className='container-navbar'>
            <h2 onClick={() => Navegate('/')} id="search">Search</h2>
            <h2 onClick={() => Navegate('/favorites')} id="favorites">Favorites</h2>
        </div>
    );
}