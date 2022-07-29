import './style.css';
import Logo from '../../assets/logoMichael.png'
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigateTo = useNavigate();

    return (
        <div className="contentFooter" >

            <div >
                <img onClick={() => navigateTo("/")} src={Logo} alt='logo perfil' />
            </div>
        </div>
    );
}

export default Footer;