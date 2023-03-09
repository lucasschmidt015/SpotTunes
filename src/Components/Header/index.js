import Img from '../../Resources/MinhaFoto.png';
import { CSSTransition } from 'react-transition-group';
import './Header.css'
import { ImExit } from 'react-icons/im'
import { AiFillFileUnknown } from 'react-icons/ai'
import { useState, useContext } from 'react';
import { SpotfyContext } from '../../Context/Spotfy';

export default function Header(props){

    const [showBackdown, setShowBackdown] = useState(false);

    const { isLoged } = useContext(SpotfyContext);

    function hendleAbout(){
        props.setRenderAbout(true);
    }

    if (!isLoged){
        return(
            <div>
            </div>
        );
    }
    
    return(
        <div className="header-container">
            <h2>SpotTunes</h2>
            <div className="profile-options">
                <span>User Name</span>
                    
                <img src={Img} alt="UserName" onClick={() => setShowBackdown(!showBackdown)}/>
                <CSSTransition in={showBackdown} classNames="component" timeout={200} unmountOnExit>
                    <div className='dropdown' id='dropdown'>
                        <div onClick={hendleAbout}>
                            <AiFillFileUnknown/>
                            <p>About</p>
                        </div>
                        <div>
                            <ImExit/>
                            <p>Exit</p>
                        </div>
                    </div>                
                </CSSTransition>
            </div>
        </div>
    );
}