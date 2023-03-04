import './About.css';

import { GrClose }  from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { AiFillInstagram } from 'react-icons/ai';

import  MyImagem  from '../../Resources/MinhaFoto.png';

export default function About(props){

    function handleClose(){
        props.setRenderAbout(false);
    }

    function request(href){
        window.open(href, '_blank')
    }

    return(
        <div className='about-container'>
            <div className='view-area'>
                <div className='close-button'>
                    <GrClose onClick={handleClose}/>
                </div>
                <div className='info-area-about'>
                    <div className='line-one'>
                        <img src={MyImagem} />
                        <p>Developed by: Lucas Schmidt</p>
                    </div>
                    <div className='line-two'>
                        <BsGithub onClick={() => request('https://github.com/lucasschmidt015')} />
                        <SiLinkedin onClick={() => request('https://www.linkedin.com/in/lucas-schmidt-76a806212')} />
                        <AiFillInstagram onClick={() => request('https://www.instagram.com/__schmidtlucas/')} />
                    </div>
                    <div className='line-three'>
                        <p>This project was created to enhance my skills in front-end development and programming as a whole.</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}