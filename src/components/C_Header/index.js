import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import IconLogo from '../../assets/Icons/iconLogo.png';
import IconMenu from '../../assets/Icons/iconMenu.png';
import ModalMenu from '../C_ModalMenu';
import './style.css';

function Header({ pagina }) {
    const navigateTo = useNavigate();
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="contentHeader">
            <div className="leftDivHeader" onClick={() => navigateTo("/")}>
                <img src={IconLogo} alt='logo perfil' />
            </div>

            <div className="rightDivHeader">
                <ul>
                    <li onClick={() => navigateTo("/")} style={pagina === "home" ? { color: '#03fa6e' } : {}}>Home</li>
                    <li onClick={() => navigateTo("/aboutMe")} style={pagina === "aboutMe" ? { color: '#03fa6e' } : {}}>Sobre mim</li>
                    <li onClick={() => navigateTo("/projects")} style={pagina === "projects" ? { color: '#03fa6e' } : {}}>Projetos</li>
                </ul>
                <button className='buttonGreen' onClick={() => navigateTo("/contacts")}>Contato</button>
            </div>

            <div className='iconeMenuHeader'>
                <img src={IconMenu} alt='icone menu' onClick={() => setOpenModal(true)} />
                <span>Menu</span>
            </div>

            {openModal && <ModalMenu
                openModal={openModal}
                setOpenModal={setOpenModal}
                pagina={pagina}
            />}
        </div>
    );
}

export default Header;