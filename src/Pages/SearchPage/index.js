import './SearchPage.css'
import { useState } from 'react';

import { BiSearch } from 'react-icons/bi'
import Navbar from '../../Components/Navbar';

export default function SearchPage(){

    const [SearchText, setSearchText] = useState("");

    return(
        <div className='content-searchpage'>
            <Navbar/>
            <div className='search-result'>
                <input
                    type="text"
                    placeholder='Type a music or artist'
                    value={SearchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <div className='button-search'>
                    <BiSearch/>
                </div>


            </div>
        </div>
    );
}