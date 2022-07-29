import './style.css';
import { useNavigate } from "react-router-dom";
import IconX from '../../assets/iconX.png'
import Logo from '../../assets/logoMichael.png'
import IconCasa from '../../assets/iconCasa.png'
import IconLamp from '../../assets/iconLamp.png'
import IconProject from '../../assets/iconProject.png'

function ModalMenu({ pagina, setOpenModal }) {
    const navigateTo = useNavigate();

    return (
        <div className='contentModalMenuOpen'>

            
            <div className='iconeCloseModal'>
                <img src={IconX} alt='icone fechar' onClick={() => setOpenModal(false)} />
            </div>

            <div className='divModalMenu'>
                <h1>Menu</h1>

                <ul className='ulModalMenu'>
                    <div>
                        <img src={IconCasa} alt='icone home' />
                        <li onClick={() => navigateTo("/")} style={pagina === "home" ? { color: '#03fa6e' } : {}}>Home</li>
                    </div>

                    <div>
                        <img src={IconProject} alt='icone about' />
                        <li onClick={() => navigateTo("/aboutMe")} style={pagina === "aboutMe" ? { color: '#03fa6e' } : {}}>Sobre mim</li>

                    </div>

                    <div>
                        <img src={IconLamp} alt='icone project' />
                        <li onClick={() => navigateTo("/projects")} style={pagina === "projects" ? { color: '#03fa6e' } : {}}>Projetos</li>

                    </div>
                </ul>

                <div className='buttonModalMenu'>
                    <button onClick={() => navigateTo("/contacts")}>Contato</button>
                </div>
            </div>

            <div className='headerModalMenu'>
                <img src={Logo} alt='logo' />
                <h1>Michael Franklyn</h1>
            </div>

        </div>
    );
}

export default ModalMenu;