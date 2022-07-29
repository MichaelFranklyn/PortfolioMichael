import './style.css';
import CardTech from '../CardTech';
import { techArray } from '../../Content/tech'

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