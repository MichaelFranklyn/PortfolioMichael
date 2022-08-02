import Curriculo from '../../assets/Curriculo/Curriculo.pdf';
import IconAspas from '../../assets/Icons/iconAspas.png';
import ProfileMichael from '../../assets/ProfilePhoto/profileMichael.jpg';
import './style.css';

function AboutMe() {
    return (
        <div className="contentAboutMe">
            <div className='profileContentAboutMe'>
                <img src={ProfileMichael} alt='' />
                <h1>Michael Franklyn</h1>
                <h2>24 anos</h2>
                <h2>Salvador,Ba</h2>

                <div>
                    <ul>Curiosidades</ul>
                    <li>Autodidata</li>
                    <li>Jogador de xadrez</li>
                    <li>Torcedor do Vitória</li>
                </div>

                <a href={Curriculo} download><button className='buttonGreen'>Currículo</button></a>
            </div>

            <div className='divContentAboutMe'>
                <h1>Sobre mim</h1>
                <p>Sou <span>Desenvolvedor de Software Full Stack pela Cubos Academy</span> e graduando em Engenharia de Petróleo pela Universidade Federal da Bahia. Apaixonado por tecnologias e programas que facilitam o trabalho das pessoas, trazendo consigo um design atraente. Acredito que o conhecimento é um recurso ilimitado e é preciso estar preparado para quando surgir a oportunidade de usá-lo ao nosso favor.
                </p>
                <div className='divSpanContentAboutMe'>
                    <div className='imgDivSpanContentAboutMe'>
                        <img src={IconAspas} alt='icone Aspas' />
                    </div>
                    <div className='textDivSpanContentAboutMe'>
                        <span>Hard work beats talent, when talent doesn't work hard.</span>
                    </div>
                </div>
                <p>Desde cedo, aprendi que a importância do <span>respeito, honestidade, comunicação, efetividade e trabalho em equipe</span> em um ambiente de trabalho é primordial para que os objetivos da empresa sejam alcançados, por isso busco sempre fortalecer essas qualidades e manter bem alinhadas com os meus princípios.</p>
                <p>Como um bom autodidata, estou sempre em busca de aprimorar meus conhecimentos. Atualmente, estudo na plataforma de aprendizado Alura e desenvolvendo projetos pessoais.
                    Acredito fielmente que a inovação e o uso das tecnologias podem ser usados para melhorar vidas.</p>
            </div>
        </div>
    );
}

export default AboutMe;