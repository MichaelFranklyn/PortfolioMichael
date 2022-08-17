import './style.css';

function CardSofts(props) {

    return (
        <div className="contentCardSofts">
            <div className='frontContentCardSofts'>
                <div >
                    <img src={props.tech.imagem1} alt='ff' />
                </div>

                <h1>{props.tech.nome}</h1>
            </div>

        </div>
    );
}

export default CardSofts;