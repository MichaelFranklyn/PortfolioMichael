import './style.css';
import IconGithub from '../../assets/IconsContact/github.svg'
import IconLinkedin from '../../assets/IconsContact/linkedin.svg'
import IconGmail from '../../assets/IconsContact/gmail.svg'
import IconWhatsapp from '../../assets/IconsContact/whatsapp.svg'
import { useClipboard, Tooltip } from "@chakra-ui/react";

function InfoContacts() {
    const { hasCopied, onCopy } = useClipboard("mfrankteixeira@gmail.com");

    return (
        <div className="contentInfoContacts">

            <h1>Redes Sociais</h1>

            <div className='divContentInfoContacts'>
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
                    <img src={IconGmail} alt='icone Gmail' onClick={onCopy} />
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
    );
}

export default InfoContacts;