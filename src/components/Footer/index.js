import './style.css';
import IconLogo from '../../assets/Icons/iconLogo.png'
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigateTo = useNavigate();

    return (
        <div className="contentFooter" >

            <div >
                <img onClick={() => navigateTo("/")} src={IconLogo} alt='logo perfil' />
            </div>
        </div>
    );
}

export default Footer;