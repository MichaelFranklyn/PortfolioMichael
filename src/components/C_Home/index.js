import { Tooltip, useClipboard } from "@chakra-ui/react";
import 'animate.css';
import { useNavigate } from "react-router-dom";
import IconGithub from '../../assets/IconsContact/github.svg';
import IconGmail from '../../assets/IconsContact/gmail.svg';
import IconLinkedin from '../../assets/IconsContact/linkedin.svg';
import IconWhatsapp from '../../assets/IconsContact/whatsapp.svg';
import './style.css';

function Home() {
    const { hasCopied, onCopy } = useClipboard("mfrankteixeira@gmail.com");
    const navigateTo = useNavigate();

    return (
        <div className="contentHome">
            <div className='leftDivHome'>
                <h2>Olá! Eu sou</h2>
                <h1>Michael Franklyn</h1>
                <p>Desenvolvedor Fullstack com experiência em aplicações web</p>
                <button className='buttonGreen' onClick={() => navigateTo("/contacts")}>Contato</button>

                <div className='iconsLeftDivHome'>
                    <Tooltip label={"Visitar perfil no GitHub"} color="white" >
                        <img src={IconGithub} alt='icone Github' onClick={() =>
                            window.open(
                                "https://github.com/MichaelFranklyn",
                                "_blank"
                            )} />
                    </Tooltip>

                    <Tooltip label={"Visitar perfil no Linkedin"} color="white">
                        <img src={IconLinkedin} alt='icone Linkedin' onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/michaelfranklyn-/",
                                "_blank"
                            )} />
                    </Tooltip>


                    <Tooltip label={hasCopied ? "Email copiado!" : "Copiar email"} closeOnClick={false} color="white">
                        <img className='iconEmail' src={IconGmail} alt='icone Gmail' onClick={onCopy} />
                    </Tooltip>

                    <Tooltip label={"Entrar em contato via whatsApp"} color="white">
                        <img className='iconWhats' src={IconWhatsapp} alt='icone Whatsapp' onClick={() =>
                            window.open(
                                "https://api.whatsapp.com/send?phone=5571993007048",
                                "_blank"
                            )} />
                    </Tooltip>
                </div>
            </div>
        </div>
    );
}

export default Home;