import Footer from '../../components/C_Footer';
import Header from '../../components/C_Header';
import Projects from '../../components/C_Projects';
import './style.css';

function ProjectsPage() {
    return (
        <div className="contentProjectsPage">
            <Header
                pagina='projects'
            />
            <Projects />
            <Footer />
        </div>
    );
}

export default ProjectsPage;