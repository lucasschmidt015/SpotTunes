import './Navbar.css'

export default function Navbar(){

    function onClickSearch(){
        const componentFavorites = document.getElementById("favorites");
        const componentSearch = document.getElementById("search");

        componentFavorites.style.boxShadow = "none"
        componentSearch.style.boxShadow = "10px 0 10px -10px #6814FC, 0 10px 10px -10px #6814FC"
    }

    function onClickFavorites(){
        const componentFavorites = document.getElementById("favorites");
        const componentSearch = document.getElementById("search");

        componentSearch.style.boxShadow = "none"
        componentFavorites.style.boxShadow = "0 10px 10px -10px #6814FC, -10px 0 10px -10px #6814FC"
    }

    return(
        <div className='container-navbar'>
            <h2 onClick={onClickSearch} id="search">Search</h2>
            <h2 onClick={onClickFavorites} id="favorites">Favorites</h2>
        </div>
    );
}