import './style.css';
import { useState } from 'react'
import { SliderData } from '../../Content/certificates'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function Certificates({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className="contentCertificates">
            <h1>Certificados</h1>
            <p>"O conhecimento é um investimento com lucros inesgotáveis"</p>


            <div className='contentCarrossel'>
                <FaArrowAltCircleLeft className='arrowContentCarrosel' onClick={prevSlide} />

                <div className='mapContentCarrossel'>
                    {SliderData.map((slide, index) => (
                        <div
                            className={index === current ? 'imgActiveContentCarrosel' : 'imgStopContentCarrosel'}
                            key={index}
                        >
                            {index === current && (
                                <img src={slide.image} alt='imagemCarrossel' className='imageContentCarrosel' />
                            )}
                        </div>
                    ))}
                </div>

                <FaArrowAltCircleRight className='arrowContentCarrosel' onClick={nextSlide} />

                <div className='arrowCertificatesMobile'>
                    <FaArrowAltCircleLeft className='arrowContentCarroselMobile' onClick={prevSlide} />
                    <FaArrowAltCircleRight  className='arrowContentCarroselMobile' onClick={nextSlide} />
                </div>
            </div>
        </div>
    );
}

export default Certificates;