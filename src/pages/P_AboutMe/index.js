import { arrayCertificates } from '../../arraysContent/certificates';
import AboutMe from '../../components/C_AboutMe';
import Certificates from '../../components/C_Certificates';
import Footer from '../../components/C_Footer';
import Header from '../../components/C_Header';
import Technologies from '../../components/C_Technologies';
import Softs from '../../components/C_Softs'
import './style.css';

function AboutMePage() {
    return (
        <div className="contentAboutMePage">
            <Header
                pagina='aboutMe'
            />

            <div className='divContentAboutMePage'>
                <AboutMe />
                <Technologies />
                <Softs />
                <Certificates slides={arrayCertificates} />
            </div>

            <Footer />
        </div>
    );
}

export default AboutMePage;