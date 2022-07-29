import './style.css';
import IconAspas from '../../assets/iconAspas.png'
import ProfileMichael from '../../assets/profileMichael.jpg'
import Curriculo from '../../assets/Curriculo.pdf'


function AboutMe() {
    return (
        <div className="contentAboutMe">

            <div className='profileContentAboutMe'>
                <img src={ProfileMichael} alt='' />
                <h1>Michael Franklyn</h1>
                <h2>24 anos</h2>

                <div>
                    <ul>Curiosidades</ul>
                    <li>Torcedor do Vitória</li>
                    <li>Jogador de Xadrez</li>
                    <li>Autodidata</li>
                </div>

                <a href={Curriculo} download><button className='buttonGreen'>Curriculo</button></a>
            </div>

            <div className='divContentAboutMe'>
                <h1>Sobre mim</h1>
                <p>Sou <span>Desenvolvedor de Software Full Stack pela Cubos Academy</span> e graduando em Engenharia de Petróleo pela Universidade Federal da Bahia. Apaixonado desde criança por tecnologias e programas que facilitam o trabalho das pessoas, trazendo consigo um design atraente. Acredito que o conhecimento é um recurso ilimitado e é preciso estar preparado para quando a oportunidade de usá-lo ao nosso favor bater em nossa porta.
                </p>
                <div className='divSpanContentAboutMe'>
                    <div className='imgDivSpanContentAboutMe'>
                        <img src={IconAspas} alt='icone Aspas' />
                    </div>
                    <div className='textDivSpanContentAboutMe'>
                        <span>Hard work beats talent, when talent doesn't work hard.</span>
                    </div>
                </div>
                <p>Desde cedo, aprendi que a presença do <span>respeito, honestidade, comunicação, efetividade e trabalho em equipe</span> é primordial para alcançar os objetivos da empresa, por isso tenho essas qualidades bem alinhadas com os meus princípios.
                    Atualmente, estou desenvolvendo projetos pessoais e estudando na plataforma de aprendizado Alura, buscando me aprimorar tecnicamente.
                </p>
            </div>

        </div>
    );
}

export default AboutMe;