import './style.css';
import Header from '../../components/Header';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer'

function ProjectsPage() {
    return (
        <div className="contentProjectsPage">
            <Header 
                pagina='projects'
            />
            <Projects/>
            <Footer/>
        </div>
    );
}

export default ProjectsPage;