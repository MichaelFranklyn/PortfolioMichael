import './style.css';
import Header from '../../components/Header';
import AboutMe from '../../components/AboutMe';
import Technologies from '../../components/Technologies'
import Certificates from '../../components/certificates';
import Footer from '../../components/Footer'

import { SliderData } from '../../Content/certificates'


function AboutMePage() {

    return (
        <div className="contentAboutMePage">
            <Header 
                pagina='aboutMe'
            />
            
            <div className='divContentAboutMePage'>
                <AboutMe />
                <Technologies />
                <Certificates slides={SliderData}/>
            </div>

            <Footer/>
        </div>
    );
}

export default AboutMePage;