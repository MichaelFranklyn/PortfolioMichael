import { softs } from '../../arraysContent/softs';
import CardSofts from '../C_CardSofts';
import './style.css';

function Softs() {
    return (
        <div className="contentSofts">
            <div className='leftDivSofts'>
                <h1>Minhas Softs Skills</h1>
                <p>Por trás de toda habilidade técnica, tem um ser humano</p>
            </div>
            <div className='rightDivSofts'>
                {softs.map((tech, index) => (
                    <CardSofts
                        key={index}
                        tech={tech}
                    />
                ))}
            </div>
        </div>
    );
}

export default Softs;