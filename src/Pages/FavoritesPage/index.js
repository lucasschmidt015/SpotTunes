import { useState } from 'react';
import Navbar from '../../Components/Navbar';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { IoMdTrash } from 'react-icons/io';

export default function FavoritesPage(){

    const [loading, setLoading] = useState(false); // this state is used to render a label loading while the request to fetch the songs is made

    const obj = [{
        id: 1,
        name: 'Macarena',
        artist: 'Los Del Rio',
    },{
        id: 2,
        name: 'The Night',
        artist: 'Avicii',
    }]

    const [musics, setMusics] = useState(obj);

    if (loading){
        return(
            <div>
                <h1>Loading....</h1>
            </div>
        );
    }

    return(
        <div className='content-searchpage'>
            <Navbar page="Favorites" />
            <div className='registers'>
                {musics.length ? (
                    <>
                        {musics.map((song) => (
                            <div className='register' key={song.id}>
                                <BsFillPlayCircleFill/>
                                <span>{song.name}</span>
                                <span>{song.artist}</span>
                                <IoMdTrash/>
                            </div>
                        ))}
                    </>
                        
                ) : (
                    <div className='default-text'>
                        <h2>Nothing here</h2>
                    </div>
                )}
                
            </div>
        </div>
    );
}