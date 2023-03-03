import './SearchPage.css'
import { useState } from 'react';

import { BiSearch } from 'react-icons/bi'
import Navbar from '../../Components/Navbar';

import { BsFillPlayCircleFill } from 'react-icons/bs';
import { AiFillPlusCircle } from 'react-icons/ai';

export default function SearchPage(){

    const [SearchText, setSearchText] = useState("");

    const obj = [{
        id: 1,
        name: 'Macarena',
        artist: 'Los Del Rio',
    },{
        id: 2,
        name: 'The Night',
        artist: 'Avicii',
    },{
        id: 3,
        name: 'Love Me Like You Do',
        artist: 'Ellie Goulding',
    },{
        id: 4,
        name: 'Smoke On The Water',
        artist: 'Deep Purple',
    }]

    const [musics, setMusics] = useState(obj);

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
            <div className='registers'>
                {musics.length ? (
                    <>
                        {musics.map((song) => (
                            <div className='register' key={song.id}>
                                <BsFillPlayCircleFill/>
                                <span>{song.name}</span>
                                <span>{song.artist}</span>
                                <AiFillPlusCircle/>
                            </div>
                        ))}
                    </>
                        
                ) : (
                    <div className='default-text'>
                        <h2>Nothing here, type to search for your favorite song</h2>
                    </div>
                )}
                
            </div>
        </div>
    );
}