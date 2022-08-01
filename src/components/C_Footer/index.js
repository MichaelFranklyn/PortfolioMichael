import { useNavigate } from "react-router-dom";
import IconLogo from '../../assets/Icons/iconLogo.png';
import './style.css';

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