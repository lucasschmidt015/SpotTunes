import './Player.css'
import { useRef, useState, useEffect, useContext } from 'react';
import { AiFillBackward, AiFillForward, AiFillCaretRight } from 'react-icons/ai'
import { BsFillPauseFill } from 'react-icons/bs'
import { BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';

import { SpotfyContext } from '../../Context/Spotfy';

export default function Player(){
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(0);
    const [lastVolume, setLastVolume] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const audioRef = useRef(null);

    const { Teste } = useContext(SpotfyContext);

    useEffect(() => {
        function controlVolumeBar(){
            var slider = document.getElementById("Campo")
            var color = `linear-gradient(90deg,#6814FC ${volume * 100}%,#cac9c9 ${volume * 100}%)`
            slider.style.background = color;
        }

        controlVolumeBar();
    }, [volume]);

    useEffect(() => {
        function controlProgressBar(){
            var slider = document.getElementById("progress")
            var color = `linear-gradient(90deg,#6814FC ${currentTime}%,#cac9c9 ${currentTime}%)`
            slider.style.background = color;
        }

        controlProgressBar();
    }, [currentTime]);
    

    function onClickVolume(){
        setLastVolume(volume)
        setVolume(0);
    }

    function handlePlay(){
        setIsPlaying(true);
        audioRef.current.play();
    }

    function handlePause(){
        setIsPlaying(false);
        audioRef.current.pause();
    }

    function handleTimeUpdate(){
        setCurrentTime(audioRef.current.currentTime);
    }

    function handleValumeChange(event){
        setVolume(event.target.value);
        audioRef.current.volume = event.target.value;
    }


    return(
        <div className='player-container'>
            <div className='progress'>
                <input
                    type="range"
                    min="0"
                    max={audioRef.current ? audioRef.current.duration : 0}
                    value={currentTime}
                    id="progress"
                    onChange={ (event) => (audioRef.current.currentTime = event.target.value)}
                />
            </div>
            <div className='container-player'>
                <div className='info-area'>
                    <p>Now Playing</p>
                    <p>title of sing here</p>
                    <p>02:14/04:00</p>
                </div>
                <div className='buttons-area'>
                    <AiFillBackward />

                    {isPlaying ? (
                        <BsFillPauseFill onClick={handlePause}/>
                    ) : (
                        <AiFillCaretRight onClick={handlePlay}/>    
                    )}
                    
                    <AiFillForward />
                </div>
                <div className='volume-area'>
                    {volume == 0 ? (
                        <BsFillVolumeMuteFill onClick={() => setVolume(lastVolume !== 0 ? lastVolume : 0.5)}/>
                    ) : (
                        <BsVolumeDownFill onClick={onClickVolume}/>
                    )}
                    
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={(e) => handleValumeChange(e)}
                        id="Campo"
                    />
                </div>
            </div>
        </div>
    );
}