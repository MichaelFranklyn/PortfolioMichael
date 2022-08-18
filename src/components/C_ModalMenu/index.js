import { useNavigate } from "react-router-dom";
import IconAboutMe from '../../assets/Icons/iconAboutMe.png';
import IconClose from '../../assets/Icons/iconClose.png';
import IconHome from '../../assets/Icons/iconHome.png';
import IconLogo from '../../assets/Icons/iconLogo.png';
import IconProject from '../../assets/Icons/iconProject.png';
import './style.css';

function ModalMenu({ pagina, setOpenModal, openModal }) {
    const navigateTo = useNavigate();

    return (
        <div className={openModal === true ? 'contentModalMenuOpen openAnimation' : openModal === false ? 'contentModalMenuOpen closeAnimation' : 'contentModalMenuNone'}>
            <div className='iconeCloseModal'>
                <img src={IconClose} alt='icone fechar' onClick={() => setOpenModal(false)} />
            </div>

            <div className='divModalMenu'>
                <h1>Menu</h1>
                <ul className='ulModalMenu'>
                    <div>
                        <img src={IconHome} alt='icone home' />
                        <li onClick={() => navigateTo("/")} style={pagina === "home" ? { color: '#03fa6e' } : {}}>Home</li>
                    </div>

                    <div>
                        <img src={IconAboutMe} alt='icone about' />
                        <li onClick={() => navigateTo("/aboutMe")} style={pagina === "aboutMe" ? { color: '#03fa6e' } : {}}>Sobre mim</li>
                    </div>

                    <div>
                        <img src={IconProject} alt='icone project' />
                        <li onClick={() => navigateTo("/projects")} style={pagina === "projects" ? { color: '#03fa6e' } : {}}>Projetos</li>
                    </div>
                </ul>

                <div className='buttonModalMenu'>
                    <button onClick={() => navigateTo("/contacts")}>Contato</button>
                </div>
            </div>

            <div className='headerModalMenu'>
                <img src={IconLogo} alt='IconLogo' />
                <h1>Michael Franklyn</h1>
            </div>
        </div>
    );
}

export default ModalMenu;