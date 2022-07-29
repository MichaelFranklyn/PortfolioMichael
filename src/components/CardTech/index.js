import './style.css';
import { useState } from "react";


function CardTech(props) {
    const [cardOpen, setCardOpen] = useState(true)

    return (
        <div className="contentCardTech">

            {cardOpen
                ?
                <div onMouseOver={() => setCardOpen(!cardOpen)} className='frontContentCardTech'>
                    <div >
                        <img src={props.tech.imagem1} alt='ff' />
                        {props.tech.imagem2 === false ? "" : <img src={props.tech.imagem2} alt='ff' />}
                    </div>

                    <h1>{props.tech.nome}</h1>
                </div>
                :
                <div onMouseLeave={() => setCardOpen(!cardOpen)} className='backContentCardTech'>
                    <ul>Conteúdo</ul>

                    <div className='liBackContentCardTech'>
                        {props.tech.conteudo.map((cont, index) => (
                            <li key={index}><span>{cont}</span></li>
                        ))}
                    </div>

                </div>}
        </div>
    );
}

export default CardTech;