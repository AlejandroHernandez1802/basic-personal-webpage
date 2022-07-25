import './Studies.css';
import { certificates } from '../../data';
import {KeyboardArrowLeft, KeyboardArrowRight} from '@material-ui/icons';
import { useState } from 'react';
import styled from 'styled-components';

const Studies = () =>{

    const Wrapper = styled.div`
        height: 100%;
        display: flex;
        transition: all 2s ease;
        transform: translateX(${props => props.slideIndex*-100}vw);
    `;

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (position) => {
        if(position === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : certificates.length-1)
        }
        else{
            setSlideIndex(slideIndex<certificates.length-1 ? slideIndex+1:0)
        }
    }

    return(
        <div className='s'>
            <div className='s-arrows' id='left' onClick={() => handleClick("left")}>
                <KeyboardArrowLeft />
            </div>
            <Wrapper slideIndex={slideIndex}>
                {certificates.map((certificate) => (
                    <div className='s-slide' key={certificate.id}>
                        <div className='s-img-container'>
                            <img className='s-img' src={certificate.img} alt='...'/>
                        </div>
                        <div className='s-info-container'>
                            <h1 className='s-title'>{certificate.title}</h1>
                            <p className='s-description'>{certificate.description}</p>
                            <a className='s-url' rel="noreferrer" href={certificate.url} target="_blank">Access certificate</a>
                        </div>
                    </div>
                ))}
            </Wrapper>
            <div className='s-arrows' id='right' onClick={() => handleClick("right")}>
                <KeyboardArrowRight />
            </div>
        </div>
    )
}

export default Studies;