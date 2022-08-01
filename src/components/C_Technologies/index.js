import { techArray } from '../../arraysContent/tech';
import CardTech from '../C_CardTech';
import './style.css';

function Technologies() {
    return (
        <div className="contentTechnologies">
            <div className='leftDivTechnologies'>
                <h1>Minhas Tecnologias</h1>
                <p>Com grandes tecnologias vem grandes responsabilidades!</p>
            </div>
            <div className='rightDivTechnologies'>
                {techArray.map((tech, index) => (
                    <CardTech
                        key={index}
                        tech={tech}
                    />
                ))}
            </div>
        </div>
    );
}

export default Technologies;