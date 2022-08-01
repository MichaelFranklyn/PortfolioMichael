import AboutMe from '../../components/AboutMe';
import Certificates from '../../components/certificates';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Technologies from '../../components/Technologies';
import './style.css';

import { arrayCertificates } from '../../arraysContent/certificates';


function AboutMePage() {
    return (
        <div className="contentAboutMePage">
            <Header
                pagina='aboutMe'
            />

            <div className='divContentAboutMePage'>
                <AboutMe />
                <Technologies />
                <Certificates slides={arrayCertificates} />
            </div>

            <Footer />
        </div>
    );
}

export default AboutMePage;