import { projectsArray } from '../../arraysContent/projects';
import ProjectsContent from '../C_ProjectsContent';
import './style.css';

function Projects() {
    return (
        <div className="contentProjects">
            <div className='titleContentProjects'>
                <h1>Portfólio</h1>
                <h2>Projetos Recentes</h2>
            </div>

            <div className='moviesContentProjects'>
                {projectsArray.slice(0).reverse().map((video, i) => (
                    <ProjectsContent
                        key={i}
                        title={video.title}
                        video={video.video}
                        descricao={video.descricao}
                        codigo={video.codigo}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;