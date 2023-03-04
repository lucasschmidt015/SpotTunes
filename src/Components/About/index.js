import './About.css'
import { GrClose }  from 'react-icons/gr'


export default function About(props){

    function handleClose(){
        props.setRenderAbout(false);
    }

    return(
        <div className='about-container'>
            <div className='view-area'>
                <div>
                    <GrClose onClick={handleClose}/>
                </div>
                <h1>teste</h1>
            </div>
        </div>
    );
}