import './Studies.css';
import { certificates } from './CertificatesData';
import {KeyboardArrowLeft, KeyboardArrowRight} from '@material-ui/icons'

const Studies = () =>{
    return(
        <div className='s'>
            <div className='s-arrows' id='left'>
                <KeyboardArrowLeft />
            </div>
            <div className='s-wrapper'>
                {certificates.map((certificate) => (
                    <div className='s-slide'>
                        <div className='s-img-container'>
                            <img className='s-img' src={certificate.img} alt='...'/>
                        </div>
                        <div className='s-info-container'>
                            <h1 className='s-title'>{certificate.title}</h1>
                            <p className='s-description'>{certificate.description}</p>
                            <a href={certificate.url}>Access certificate</a>
                        </div>
                    </div>
                ))}
            </div>
            <div className='s-arrows' id='right'>
                <KeyboardArrowRight />
            </div>
        </div>
    )
}

export default Studies;